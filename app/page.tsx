"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import dataSON from "../test.json";
import img from "./public/ruler.png";
interface TodoData {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
export default function Home() {
  const [todo, setTodo] = useState<TodoData | null>(null); // State to hold the fetched data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const jsonData: TodoData = await response.json();
        setTodo(jsonData); // Store the fetched data
      } catch (error) {
        console.error("Error fetching the data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

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
          {loading ? (
            <p>Loading...</p>
          ) : todo ? (
            <div className="mb-4 flex flex-row">
              <div className="flex items-center">
                <Image
                  className="dark:invert rotate-90 mr-4"
                  src={img} // Ensure 'img' is defined in your component
                  alt="Ruler"
                  width={20}
                  height={20}
                />
                <p>Displaced {todo.userId} millimeters from the target.</p>
              </div>
            </div>
          ) : (
            <p>No data available.</p>
          )}
        </div>
      </main>
    </div>
  );
}
