import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="mb-4 text-7xl">Group 178</h1>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Placeholder 1{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold"></code>
            .
          </li>
          <li>Placeholder 2</li>
        </ol>

        {/* Before and After Sections */}
        <div className="flex gap-8 w-full">
          {/* Before Section */}
          <div className="flex-1 rounded-lg border border-light-300 p-6 bg-white shadow-md dark:bg-white/[0.06]">
            <h2 className="text-lg font-bold mb-4">Before</h2>
            <p>Your content for the before section goes here.</p>
          </div>

          {/* After Section */}
          <div className="flex-1 rounded-lg border border-light-300 p-6 bg-white shadow-md  dark:bg-white/[0.06]">
            <h2 className="text-lg font-bold mb-4">After</h2>
            <p>Your content for the after section goes here.</p>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
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
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
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
      </footer>
    </div>
  );
}
