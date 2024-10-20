"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import img from "./public/ruler.png";
import aimg from "./public/angle.png";
import Link from "next/link";

import Dissertation from "./dissertation/page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

interface TodoData {
  stat1: number;
  stat2: number;
  stat3: number;
  title: string;
  completed: boolean;
}

export default function Home() {
  //const [todo, setTodo] = useState<TodoData | null>(null); // State to hold the fetched todo data
  const [loading, setLoading] = useState(true);
  const data = {
    x: 126.0,
    y: 57.0,
    theta: -0.18,
  };
  // const [transformationData, setTransformationData] = useState<{
  //   x: number;
  //   y: number;
  //   theta: number;
  // } | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // Fetch todo data
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/todos/1"
  //       );
  //       const jsonData: TodoData = await response.json();
  //       setTodo(jsonData); // Store the fetched todo data
  //     } catch (error) {
  //       console.error("Error fetching the todo data:", error);
  //     }
  //   };

  //   const fetchTransformationData = async () => {
  //     // Fetch transformation data from public folder
  //     try {
  //       const response = await fetch("/data.json"); // Ensure this is the correct path
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const jsonData = await response.json();
  //       setTransformationData(jsonData.transformation); // Adjust according to your JSON structure
  //     } catch (error) {
  //       console.error("Error fetching transformation data:", error);
  //     } finally {
  //       setLoading(false); // Set loading to false after fetching
  //     }
  //   };

  //   fetchData();
  //   fetchTransformationData();
  // }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row items-center mb-6">
          <h1 className="text-7xl">autopatt</h1>
          <div className="ml-56">
            <a className="rounded-full border border-solid border-transparent flex items-center transition-all duration-300 ease-in-out justify-center bg-foreground text-white dark:bg-foreground dark:text gap-2 hover:bg-[#24262d] dark:hover:bg-white dark:text-black text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
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
        <div className="mb-6">
          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">built to scale.</li>
            <li>scaled to build.</li>
          </ol>
        </div>

        <div className="flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
          <h2 className="text-4xl w-full text-foreground dark:text-[foreground]">
            analytics.
          </h2>
        </div>
        <div className="w-full h-[2px] bg-foreground dark:bg-foreground"></div>

        <div className="container mx-auto text-sm sm:text-left font-[family-name:var(--font-geist-mono)]">
          <div className="mb-4 flex flex-row">
            <ul>
              <li>
                <div className="flex items-center">
                  <Image
                    className="dark:invert rotate-90 mr-4"
                    src={img}
                    alt="Ruler"
                    width={20}
                    height={20}
                  />
                  <p>Displaced {data.x / 3.7}mm to the right</p>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Image
                    className="dark:invert rotate-90 mr-4"
                    src={img}
                    alt="Ruler"
                    width={20}
                    height={20}
                  />
                  <p>Displaced {data.y / 3.7}mm to the left</p>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <Image
                    className="dark:invert mr-4"
                    src={aimg}
                    alt="Ruler"
                    width={20}
                    height={20}
                  />
                  <p>Angled at {data.theta / 3.7} degrees from the target.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <div>
        <h1>
          Learn <a href="./dissertation">Next.js!</a>
        </h1>
      </div>
    </div>
  );
}
