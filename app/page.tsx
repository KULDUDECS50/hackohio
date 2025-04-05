"use client";
import React, { useState } from "react";
import Image from "next/image";

import { Ruler, RotateCcw, Target } from "lucide-react";
import shot from "./public/shot.png";
import Dissertation from "./pages/Dissertation";
import LinkedIn from "./pages/Linkedin";
function App() {
  const [loading, setLoading] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  const handleRunEmulatorClick = () => {
    setLoading(true);
    setShowAnalytics(false);
    setTimeout(() => {
      setShowAnalytics(true);
      setLoading(false);
    }, 1000);
  };

  const data = {
    x: 126.0,
    y: 57.0,
    theta: -0.18,
  };
  if (currentPage === "dissertation") {
    return <Dissertation onBack={() => setCurrentPage("home")} />;
  }

  if (currentPage === "linkedin") {
    return <LinkedIn onBack={() => setCurrentPage("home")} />;
  }

  return (
    <div className="min-h-screen bg-[#e9eae0] text-[#0d4714]">
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-12">
          <h1 className="header-font text-6xl">autopatt</h1>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCurrentPage("dissertation")}
              className="header-font text-xl underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              dissertation
            </button>
            <button
              onClick={() => setCurrentPage("linkedin")}
              className="header-font text-xl underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              connect
            </button>
            <button
              onClick={handleRunEmulatorClick}
              className="body-font bg-[#0d4714] text-[#e9eae0] px-6 py-3 rounded-full hover:bg-opacity-90 transition-all flex items-center gap-2"
            >
              <RotateCcw size={20} />
              run emulator
            </button>
          </div>
        </div>

        <div className="mb-12">
          <ul className="body-font text-lg space-y-2">
            <li>- built to scale.</li>
            <li>- scaled to build.</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="header-font text-4xl mb-2">analytics.</h2>
          <p className="body-font text-sm">(most recent run)</p>
        </div>

        <div className="h-px bg-[#0d4714] mb-8"></div>

        {loading ? (
          <div className="body-font text-center text-xl">Loading...</div>
        ) : showAnalytics ? (
          <div className="space-y-8">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={shot}
                width={400}
                height={300}
                alt="Analytics visualization"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="body-font space-y-6">
              <div className="flex items-center gap-4">
                <Ruler className="w-6 h-6" />
                <p>Displaced {(data.x / 3.7).toFixed(2)} mm vertically</p>
              </div>
              <div className="flex items-center gap-4">
                <Ruler className="w-6 h-6" />
                <p>Displaced {(data.y / 3.7).toFixed(2)} mm horizontally</p>
              </div>
              <div className="flex items-center gap-4">
                <Target className="w-6 h-6" />
                <p>
                  Angled at {(data.theta / 3.7).toFixed(2)} degrees from target
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default App;
