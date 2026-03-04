import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <h1 className="text-xl font-bold text-slate-800">pio-prompt</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/builder" className="text-slate-600 hover:text-slate-900">Builder</Link>
            <Link href="/pricing" className="text-slate-600 hover:text-slate-900">Pricing</Link>
            <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">Get Started</Link>
          </nav>
        </div>
      </header>
      <section className="py-20 text-center px-4">
        <h2 className="text-5xl font-bold text-slate-900 mb-6">
          Build Perfect AI Prompts <br />
          <span className="text-blue-600">Like Building Blocks</span>
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
          Select from 40+ pre-built Prompt Cards. Mix and match to create the perfect prompt.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/builder" className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700">
            Start Building Free
          </Link>
          <Link href="/pricing" className="bg-white text-slate-700 border-2 border-slate-200 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-slate-50">
            View Pricing
          </Link>
        </div>
      </section>
      <footer className="bg-slate-900 text-slate-400 py-8 text-center">
        <p>© 2026 pio-prompt. Built by Hin + Pio 🧑‍💻</p>
      </footer>
    </main>
  );
}
