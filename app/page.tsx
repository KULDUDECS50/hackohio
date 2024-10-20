"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import Papa from "papaparse";

interface AnalyticsData {
  time: number;
  displacement: number;
  angleDisplacement: number;
  image1: string; // Assume it's a URL or a base64 string
  image2: string; // Assume it's a URL or a base64 string
}
export default function Home() {
  const [data, setData] = useState<AnalyticsData | null>(null);
  const [showData, setShowData] = useState(false); // Control visibility of the analytics section

  useEffect(() => {
    // Load CSV file using PapaParse
    Papa.parse("test.csv", {
      header: true,
      complete: (results) => {
        console.log(results.data); // Array of parsed objects
      },
    });
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20  sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row items-center mb-6">
          {" "}
          {/* Add items-center here for vertical alignment */}
          <h1 className="text-7xl">Group 178</h1>
          <div className="ml-56">
            {" "}
            {/* Add margin-left here */}
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-white dark:bg-foreground dark:text gap-2 hover:bg-[#24262d] dark:hover:bg-white dark:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert rotate-90"
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Run Emulator
            </a>
          </div>
        </div>
        <div className="mb-6">
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">Built to scale.</li>
            <li>Scaled to build.</li>
          </ol>
        </div>

        <div className="flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
          <h2 className="text-4xl w-full text-foregorund dark:text-[foreground] ">
            Analytics
          </h2>
        </div>
        <div className="w-full h-[2px] bg-foreground dark:bg-foreground"></div>
      </main>
    </div>
  );
}
