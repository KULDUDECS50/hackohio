"use client";
import Image from "next/image";
import { useState } from "react";
import img from "./public/ruler.png";
import aimg from "./public/angle.png";
import shot from "./public/shot.png";

export default function Home() {
  const [loading, setLoading] = useState(false); // Start with loading set to false
  const [showAnalytics, setShowAnalytics] = useState(false); // State for showing analytics

  const handleRunEmulatorClick = () => {
    setLoading(true); // Start loading
    setShowAnalytics(false); // Hide analytics initially
    setTimeout(() => {
      setShowAnalytics(true); // Show analytics after delay
      setLoading(false); // Stop loading
    }, 1000); // Delay duration (1000ms = 1 second)
  };

  const data = {
    x: 126.0,
    y: 57.0,
    theta: -0.18,
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row items-center mt-6 mb-3">
          <h1 className="text-6xl">autopatt</h1>
          <div className="ml-56">
            <a
              className="rounded-full border border-solid border-transparent flex items-center transition-all duration-300 ease-in-out justify-center bg-foreground text-white dark:bg-foreground dark:text gap-2 hover:bg-[#24262d] dark:hover:bg-white dark:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer"
              onClick={handleRunEmulatorClick}
            >
              <Image
                className="dark:invert rotate-90"
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              run emulator
            </a>
          </div>
        </div>
        <div className="mb-4">
          <ul className=" text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">- built to scale.</li>
            <li>- scaled to build.</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
          <h2 className="text-4xl w-full text-foreground dark:text-[foreground]">
            analytics.
          </h2>
        </div>
        <div className="w-full h-[2px] bg-foreground dark:bg-foreground"></div>

        {loading ? (
          <div className="loader">Loading...</div> // Show a loading indicator
        ) : showAnalytics ? (
          <div className="container mx-auto text-sm sm:text-left font-[family-name:var(--font-geist-mono)]">
            <div className="mb-4">
              <Image
                className="w-full rounded-lg border-white/50 border-11"
                src={shot}
                alt="Description of the image"
                width={400}
                height={300}
              />
            </div>
            <div className="mb-4 flex flex-row">
              <ul>
                <li className="mb-3">
                  <div className="flex items-center">
                    <Image
                      className="dark:invert rotate-90 mr-4"
                      src={img}
                      alt="Ruler"
                      width={20}
                      height={20}
                    />
                    <p>Displaced {data.x / 3.7} mm to the right</p>
                  </div>
                </li>
                <li className="mb-3">
                  <div className="flex items-center">
                    <Image
                      className="dark:invert rotate-90 mr-4"
                      src={img}
                      alt="Ruler"
                      width={20}
                      height={20}
                    />
                    <p>Displaced {data.y / 3.7} mm to the left</p>
                  </div>
                </li>
                <li className="mb-0">
                  <div className="flex items-center">
                    <Image
                      className="dark:invert mr-4"
                      src={aimg}
                      alt="Angle Ruler"
                      width={20}
                      height={20}
                    />
                    <p>Angled at {data.theta / 3.7} degrees from the target.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        ) : null}
      </main>
      <div>
        <h1>
          <a href="./dissertation" className="underline underline-offset-4">
            dissertation
          </a>
        </h1>
      </div>
    </div>
  );
}
