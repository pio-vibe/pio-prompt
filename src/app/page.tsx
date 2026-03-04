import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiMyMDI3M2IiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-30" />
        
        <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl">🤖</div>
            <span className="text-xl font-bold">pio-prompt</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/builder" className="text-zinc-400 hover:text-white transition">Builder</Link>
            <Link href="/pricing" className="text-zinc-400 hover:text-white transition">Pricing</Link>
            <Link href="/login" className="bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-zinc-200 transition">Get Started</Link>
          </nav>
        </header>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 rounded-full px-4 py-2 text-sm text-zinc-400 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Now with 40+ AI Prompt Cards
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Build Perfect<br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              AI Prompts
            </span>
            <br />Like Building Blocks
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Select from 40+ pre-built Prompt Cards. Mix and match to create 
            the perfect prompt for any task. No more struggling with AI.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/builder" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:opacity-90 transition shadow-lg shadow-blue-500/25">
              Try Demo Free
            </Link>
            <Link href="/pricing" className="bg-zinc-900 border border-zinc-800 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-zinc-800 transition">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why pio-prompt?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🃏', title: '40+ Prompt Cards', desc: 'Ready-to-use prompts for email, social media, coding, and more' },
              { icon: '🧩', title: 'Mix & Match', desc: 'Combine multiple cards to create complex workflows' },
              { icon: '💳', title: 'Flexible Plans', desc: 'Start free, upgrade when you need more power' },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-zinc-700 transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Prompt Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: '📧', name: 'Productivity', count: 6 },
              { icon: '📱', name: 'Content', count: 7 },
              { icon: '📚', name: 'Learning', count: 4 },
              { icon: '💼', name: 'Business', count: 6 },
              { icon: '🎯', name: 'Personal', count: 5 },
              { icon: '🎨', name: 'Creative', count: 5 },
              { icon: '💻', name: 'Developer', count: 5 },
              { icon: '✨', name: 'More...', count: 8 },
            ].map((cat) => (
              <div key={cat.name} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl hover:border-zinc-600 transition cursor-pointer group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition">{cat.icon}</div>
                <div className="font-semibold">{cat.name}</div>
                <div className="text-sm text-zinc-500">{cat.count} cards</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-zinc-800 text-center text-zinc-500">
        <p>© 2026 pio-prompt. Built by Hin + Pio 🧑‍💻</p>
      </footer>
    </div>
  );
}
