"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
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
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground dark:bg-white text-background gap-2 hover:bg-[#383838] dark:hover:bg-foreground text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
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
        {/* Before and After Sections */}
        <div className="flex gap-8 w-full">
          {/* Before Section */}
          <div className="flex-1 rounded-lg p-6 bg-white shadow-md dark:bg-white/[0.06]">
            <h2 className="text-lg font-bold mb-4">Analytics</h2>
            <div className="flex flex-row items-center mb-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4 block text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:text-sm file:font-semibold 
      file:bg-gray-200 file:dark:bg-white/[0.06] hover:file:bg-gray-300 dark: dark:file:text-gray-200 
      dark:hover:file:dark:bg-white/[0.04] focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              />
              {/**
               * Actually id ont want a upload file. I want the button to
               */}

              {selectedImage && (
                <Image
                  src={selectedImage as string}
                  alt="Uploaded Image"
                  width={650}
                  height={200}
                  className="rounded-lg border border-light-300 shadow-md transition-transform duration-200 transform hover:scale-105"
                />
              )}

              {!selectedImage && (
                <p className="dark:bg-white/[0.06]0 dark:text-gray-400 text-sm mt-2">
                  No image uploaded. Please select an image to preview it.
                </p>
              )}
            </div>
          </div>

          {/* After Section
          <div className="flex-1 rounded-lg border border-light-300 p-6 bg-white shadow-md  dark:bg-white/[0.06]">
            <h2 className="text-lg font-bold mb-4">After</h2>
            <p>Your content for the after section goes here.</p>
          </div> */}
        </div>
      </main>

      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          target="_blank"
          href="https://hack.osu.edu/hack12/"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Please vote for us! →
        </a>
      </footer> */}
    </div>
  );
}
