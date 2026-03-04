import Link from 'next/link';

const plans = [
  { name: 'Free', price: 0, features: ['10 Cards', '5 Saved', 'Basic Support'] },
  { name: 'Starter', price: 49, features: ['30 Cards', '50 Saved', 'Email Support'], popular: true },
  { name: 'Pro', price: 149, features: ['100 Cards', '500 Saved', 'Priority Support', 'API Access'] },
  { name: 'Ultimate', price: 299, features: ['Unlimited', 'Unlimited', '1-on-1', 'White-label'] },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm p-4">
        <Link href="/" className="text-xl font-bold">🤖 pio-prompt</Link>
      </header>
      <main className="max-w-6xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Simple Pricing</h1>
        <p className="text-center text-slate-600 mb-12">Choose the plan that fits you</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {plans.map(plan => (
            <div key={plan.name} className={`bg-white rounded-2xl p-6 border ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {plan.popular && <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">Popular</span>}
              <h3 className="text-xl font-semibold mt-2">{plan.name}</h3>
              <div className="text-4xl font-bold mt-4">${plan.price}<span className="text-sm text-slate-500">/mo</span></div>
              <ul className="mt-6 space-y-2">
                {plan.features.map(f => (
                  <li key={f} className="text-sm text-slate-600">✓ {f}</li>
                ))}
              </ul>
              <button className={`w-full mt-6 py-2 rounded-lg font-medium ${plan.popular ? 'bg-blue-600 text-white' : 'bg-slate-100'}`}>
                {plan.price === 0 ? 'Get Started' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
