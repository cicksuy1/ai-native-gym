import { useEffect, useRef, useState, useCallback } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  api,
  subscribe,
  type Module,
  type Progress,
  type Lesson,
  type Challenge,
  type Turn,
} from "./api.ts";

type Tab = "lesson" | "drill" | "challenge";

export function App() {
  const [modules, setModules] = useState<Module[]>([]);
  const [progress, setProgress] = useState<Progress | null>(null);
  const [slug, setSlug] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("lesson");
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [drill, setDrill] = useState<{ markdown: string } | null>(null);
  const [challenge, setChallenge] = useState<Challenge | null>(null);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [partial, setPartial] = useState("");
  const [input, setInput] = useState("");
  const [cost, setCost] = useState(0);
  const [celebrating, setCelebrating] = useState(false);

  const refreshProgress = useCallback(() => {
    api.progress().then(setProgress).catch(() => {});
  }, []);

  // Initial load + SSE subscription.
  useEffect(() => {
    api.curriculum().then((c) => setModules(c.modules)).catch(() => {});
    refreshProgress();
    const unsub = subscribe({
      tutor_partial: (d) => setPartial((p) => p + (d.text ?? "")),
      tutor_message: (d) => {
        setPartial("");
        setTurns((t) => [...t, { kind: "tutor", text: d.text ?? "", ts: Date.now() }]);
      },
      tool_activity: (d) =>
        setTurns((t) => [...t, { kind: "activity", text: d.text ?? "", ts: Date.now() }]),
      progress_changed: () => refreshProgress(),
      celebrate: () => {
        setCelebrating(true);
        setTimeout(() => setCelebrating(false), 4000);
      },
      cost_update: (d) => setCost(d.totalCostUsd ?? 0),
    });
    return unsub;
  }, [refreshProgress]);

  // When a module is selected, load its content + history and open the conversation.
  const openModule = useCallback((s: string) => {
    setSlug(s);
    setTab("lesson");
    setPartial("");
    api.lesson(s).then(setLesson).catch(() => setLesson(null));
    api.drill(s).then(setDrill).catch(() => setDrill(null));
    api.challenge(s).then(setChallenge).catch(() => setChallenge(null));
    api.history(s).then((h) => setTurns(h.turns)).catch(() => setTurns([]));
    api.startSession(s).catch(() => {});
  }, []);

  const send = useCallback(() => {
    const text = input.trim();
    if (!text) return;
    setTurns((t) => [...t, { kind: "learner", text, ts: Date.now() }]);
    setInput("");
    api.sendInput(text).catch(() => {});
  }, [input]);

  const completed = new Set(progress?.completed.map((r) => r.module) ?? []);

  return (
    <div className="app">
      <aside className="sidebar">
        <h1 className="brand">AI-Native Gym 🏋️</h1>
        <p className="tagline">Become a better <em>executor</em> of AI coding tools.</p>
        <nav className="modules">
          {modules.map((m) => (
            <button
              key={m.slug}
              className={`module-row${slug === m.slug ? " active" : ""}${m.isSpine ? " spine" : ""}`}
              onClick={() => openModule(m.slug)}
            >
              <span className="badge">{completed.has(m.slug) ? "✅" : progress?.current === m.slug ? "▶" : "⬜"}</span>
              <span className="mod-num">{m.number}</span>
              <span className="mod-title">{m.title}{m.isSpine ? " ⭐" : ""}</span>
            </button>
          ))}
        </nav>
        <div className="progress-foot">
          {progress && (
            <span>{progress.completed.length}/{modules.length} passed</span>
          )}
          {cost > 0 && <span className="cost">${cost.toFixed(3)}</span>}
        </div>
      </aside>

      <main className="content">
        {celebrating && <div className="celebrate">🎉 Module passed — nicely driven!</div>}
        {!slug && (
          <div className="welcome">
            <h2>Pick a module to begin</h2>
            <p>
              Each module runs <strong>read → practice → challenge</strong>. The coach on the right is
              a live conversation — it teaches the lesson, sets your drill, runs your challenge, and
              scores how you drove the agent. The reps happen in <em>your own</em> Claude Code session.
            </p>
          </div>
        )}
        {slug && (
          <>
            <div className="tabs">
              <button className={tab === "lesson" ? "on" : ""} onClick={() => setTab("lesson")}>Read</button>
              <button className={tab === "drill" ? "on" : ""} onClick={() => setTab("drill")} disabled={!drill}>
                Practice
              </button>
              <button className={tab === "challenge" ? "on" : ""} onClick={() => setTab("challenge")} disabled={!challenge}>
                Challenge
              </button>
            </div>
            <div className="panel markdown">
              {tab === "lesson" && lesson && (
                <Markdown remarkPlugins={[remarkGfm]}>{lesson.markdown}</Markdown>
              )}
              {tab === "drill" && drill && (
                <Markdown remarkPlugins={[remarkGfm]}>{drill.markdown}</Markdown>
              )}
              {tab === "challenge" && challenge && (
                <>
                  <Markdown remarkPlugins={[remarkGfm]}>{challenge.mission}</Markdown>
                  <hr />
                  <Markdown remarkPlugins={[remarkGfm]}>{challenge.scorecard}</Markdown>
                </>
              )}
            </div>
          </>
        )}
      </main>

      <section className="chat">
        <header className="chat-head">Coach</header>
        <div className="turns">
          {turns.map((t, i) => (
            <div key={i} className={`turn ${t.kind}`}>
              {t.kind === "activity" ? (
                <span className="activity">{t.text}</span>
              ) : (
                <Markdown remarkPlugins={[remarkGfm]}>{t.text}</Markdown>
              )}
            </div>
          ))}
          {partial && (
            <div className="turn tutor streaming">
              <Markdown remarkPlugins={[remarkGfm]}>{partial}</Markdown>
            </div>
          )}
        </div>
        <div className="composer">
          <textarea
            value={input}
            placeholder={slug ? "Talk to your coach…" : "Open a module first"}
            disabled={!slug}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
          />
          <button onClick={send} disabled={!slug || !input.trim()}>Send</button>
        </div>
      </section>
    </div>
  );
}
