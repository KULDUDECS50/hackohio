"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

function App() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const isValidEmail = (value: string) =>
    /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);

  const joinWaitlist = async () => {
    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Enter a valid email.");
      return;
    }
    setStatus("loading");
    setMessage("");
    // TODO: Hook up to backend/Google Sheet/Zapier. Simulate for now.
    console.log("Submitting email:", email);

    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
    setMessage("You're on the list. We'll be in touch soon.");
    setEmail("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* top header bar in primary green */}
      <div className="w-full bg-primary text-center uppercase tracking-wide text-black py-2">
        1ST PLACE AT HACK OHIO 2024
      </div>
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral/40 bg-black px-3 py-1 text-xs body-font">
            <span className="h-2 w-2 rounded-full bg-primary" /> waitlist open
          </div>
          <h1 className="header-font mt-4 text-5xl md:text-6xl tracking-tight text-primary">
            AI for photolithography
            <span className="text-secondary">
              — real‑time alignment and defect detection
            </span>
          </h1>
          <p className="body-font mt-3 text-sm text-muted">
            Join the early access waitlist. We’ll notify you when invites open.
          </p>

          <div className="mt-6 mx-auto grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 max-w-xl ">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@lab.edu"
              className="body-font w-full rounded-full border border-neutral/40 bg-background px-4 py-3 text-sm text-white placeholder:text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={joinWaitlist}
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-black shadow hover:opacity-90 disabled:opacity-70"
            >
              {status === "loading" ? "Joining…" : "Join waitlist"}
              {status !== "loading" && <ChevronRight className="h-4 w-4" />}
            </button>
          </div>

          {message && (
            <div
              className={`body-font mt-3 text-sm ${
                status === "error" ? "text-red-600" : "text-foreground"
              }`}
            >
              {message}
            </div>
          )}

          <p className="body-font mt-10 text-xs text-muted">
            By joining, you agree to receive occasional emails about autopatt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
