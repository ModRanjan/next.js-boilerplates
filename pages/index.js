export default function Home() {
  return (
    <main className="text-center">
      <h1 className="my-5 text-4xl font-bold">
        Welcome to
        <a
          className="text-cyan-600"
          href="https://tailwindcss.com/docs/guides/nextjs"
        >
          Next.js+Tailwind
        </a>
        configured Boilerplate
      </h1>

      <div className="flex flex-wrap justify-center gap-3 p-5 mt-5">
        <a
          href="https://nextjs.org/docs"
          className="flex flex-col items-center px-3 border shadow-md hover:border-gray-400 hover:shadow-lg"
        >
          <h2 className="my-5 text-2xl font-semibold">Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn"
          className="flex flex-col items-center px-3 border shadow-md hover:border-gray-400 hover:shadow-lg"
        >
          <h2 className="my-5 text-2xl font-semibold">Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className="flex flex-col items-center px-3 border shadow-md hover:border-gray-400 hover:shadow-lg"
        >
          <h2 className="my-5 text-2xl font-semibold">Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className="flex flex-col items-center px-3 border shadow-md hover:border-gray-400 hover:shadow-lg"
        >
          <h2 className="my-5 text-2xl font-semibold">Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </main>
  );
}
