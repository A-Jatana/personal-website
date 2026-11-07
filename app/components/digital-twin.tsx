"use client";

import { FormEvent, useState } from "react";

type Message = { role: "user" | "assistant"; content: string };

const suggestions = [
  "What did I build at RBC?",
  "Tell me about my education",
  "What projects have I worked on?",
];

export default function DigitalTwin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [started, setStarted] = useState(false);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function sendMessage(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content }];
    setMessages(nextMessages);
    setDraft("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "The Digital Twin could not respond.");
      setMessages([...nextMessages, { role: "assistant", content: result.reply }]);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "The Digital Twin could not respond.");
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(draft);
  }

  return (
    <section className="digital-twin section" id="digital-twin">
      <div className="shell">
        <div className="digital-twin-heading">
          <div>
            <div className="section-kicker"><span>02</span> THE DIGITAL TWIN</div>
            <h2>Ask me<br />anything<span className="period">.</span></h2>
          </div>
          <p>A career and education Q&amp;A, grounded in my experience. Curious about a project, a system I built, or what I studied? Start here.</p>
        </div>

        <div className="twin-window">
          <div className="twin-topbar">
            <div className="twin-identity"><span className="twin-avatar">AJ<span>.</span></span><span><strong>Amitoz&apos;s Digital Twin</strong><small><i /> PROFILE-GROUNDED AI</small></span></div>
            <span className="twin-model">NEMOTRON 3.5 <b>·</b> OPENROUTER</span>
          </div>

          {!started ? (
            <div className="twin-consent">
              <span className="consent-icon">✳</span>
              <h3>A little context, before we chat.</h3>
              <p>Your questions and a résumé-based profile summary are sent to OpenRouter&apos;s free NVIDIA model to generate replies. OpenRouter notes that free endpoint requests may be logged and used to improve NVIDIA products. Please don&apos;t share private or sensitive information.</p>
              <button className="button button-primary" onClick={() => setStarted(true)}>Start a conversation <span>↗</span></button>
            </div>
          ) : (
            <>
              <div className="twin-messages" aria-live="polite" aria-label="Chat messages">
                {messages.length === 0 && <div className="twin-welcome"><span className="welcome-mark">AJ<span>.</span></span><div><strong>Hi, I&apos;m Amitoz&apos;s Digital Twin.</strong><p>Ask me about my engineering work, projects, or education. I&apos;ll stick to what&apos;s in my profile.</p></div></div>}
                {messages.map((message, index) => <div className={`chat-message ${message.role}`} key={`${message.role}-${index}`}><span className="message-label">{message.role === "assistant" ? "DIGITAL TWIN" : "YOU"}</span><p>{message.content}</p></div>)}
                {loading && <div className="chat-message assistant"><span className="message-label">DIGITAL TWIN</span><p className="typing"><i /><i /><i /><span>Thinking through it…</span></p></div>}
                {error && <div className="chat-error" role="alert">{error}</div>}
              </div>
              {messages.length === 0 && <div className="twin-suggestions">{suggestions.map((suggestion) => <button key={suggestion} onClick={() => void sendMessage(suggestion)} disabled={loading}>{suggestion}<span>↗</span></button>)}</div>}
              <form className="twin-composer" onSubmit={handleSubmit}>
                <label className="sr-only" htmlFor="twin-question">Ask a question about Amitoz&apos;s background</label>
                <input id="twin-question" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Ask about my experience, education, or projects…" maxLength={2000} disabled={loading} />
                <button type="submit" aria-label="Send message" disabled={loading || !draft.trim()}>↗</button>
              </form>
              <div className="twin-footnote">AI-GENERATED · GROUNDED IN PROFILE DETAILS · MAY MAKE MISTAKES</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
