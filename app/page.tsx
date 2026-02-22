import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="mb-2 text-5xl font-bold tracking-tight text-white">
          FFXIV Rotation Guide
        </h1>
        <p className="mb-12 text-lg text-ffxiv-muted">
          Step-by-step rotation breakdowns with annotations explaining the{" "}
          <span className="text-ffxiv-highlight">why</span> behind each action.
        </p>

        <div className="grid gap-4">
          <Link
            href="/reaper"
            className="group flex items-center gap-6 rounded-xl border border-ffxiv-accent bg-ffxiv-surface p-6 transition-all hover:border-ffxiv-highlight hover:bg-ffxiv-accent/50"
          >
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-ffxiv-highlight/20 text-3xl">
              ⚔
            </div>
            <div className="text-left">
              <h2 className="text-xl font-semibold text-white group-hover:text-ffxiv-highlight">
                Reaper
              </h2>
              <p className="text-sm text-ffxiv-muted">
                Standard 2-minute rotation &middot; Double Enshroud opener
                &middot; Filler phase
              </p>
            </div>
            <span className="ml-auto text-2xl text-ffxiv-muted transition-transform group-hover:translate-x-1 group-hover:text-ffxiv-highlight">
              &rarr;
            </span>
          </Link>
        </div>

        <p className="mt-12 text-xs text-ffxiv-muted">
          Data sourced from The Balance FFXIV community guides and codebase
          analysis.
        </p>
      </div>
    </main>
  );
}
