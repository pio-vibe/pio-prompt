import Link from 'next/link';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <span className="text-4xl">🤖</span>
          <h1 className="text-2xl font-bold mt-4">Welcome to pio-prompt</h1>
          <p className="text-slate-600 mt-2">Build AI prompts like building blocks</p>
        </div>
        <Link href="/builder" className="block w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-700">
          Try Demo (No Login)
        </Link>
        <p className="text-center text-sm text-slate-500 mt-4">Login coming soon!</p>
      </div>
    </div>
  );
}
