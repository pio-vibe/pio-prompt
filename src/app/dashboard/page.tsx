import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm p-4 flex justify-between">
        <Link href="/" className="text-xl font-bold">🤖 pio-prompt</Link>
        <Link href="/" className="text-slate-600">Sign Out</Link>
      </header>
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl border">
            <div className="text-3xl font-bold">10</div>
            <div className="text-slate-500">Cards Available</div>
          </div>
          <div className="bg-white p-6 rounded-xl border">
            <div className="text-3xl font-bold">0</div>
            <div className="text-slate-500">Saved Prompts</div>
          </div>
          <div className="bg-white p-6 rounded-xl border">
            <div className="text-3xl font-bold">Free</div>
            <div className="text-slate-500">Current Plan</div>
          </div>
        </div>
        <Link href="/builder" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium inline-block">
          Open Builder →
        </Link>
      </main>
    </div>
  );
}
