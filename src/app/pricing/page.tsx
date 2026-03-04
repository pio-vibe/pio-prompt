import Link from 'next/link';

const plans = [
  { name: 'Free', price: 0, features: ['10 Cards', '5 Saved Prompts', 'Basic Support'] },
  { name: 'Starter', price: 49, features: ['30 Cards', '50 Saved', 'Email Support'], popular: true },
  { name: 'Pro', price: 149, features: ['100 Cards', '500 Saved', 'Priority Support', 'API Access'] },
  { name: 'Ultimate', price: 299, features: ['Unlimited Cards', 'Unlimited Saves', '1-on-1 Support', 'White-label'] },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="bg-zinc-900/50 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">🤖</div>
            <span className="text-lg font-bold">pio-prompt</span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h1>
        <p className="text-center text-zinc-400 mb-16 text-lg">Choose the plan that fits your needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {plans.map(plan => (
            <div key={plan.name} className={'relative bg-zinc-900/50 border rounded-2xl p-6 ' + (plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20' : 'border-zinc-800')}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-zinc-500">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-zinc-400">
                    <span className="text-green-500">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button className={'w-full py-3 rounded-lg font-medium transition ' + (plan.popular 
                ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90' 
                : 'bg-zinc-800 hover:bg-zinc-700')}>
                {plan.price === 0 ? 'Get Started' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-left">
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">Can I cancel anytime?</h3>
              <p className="text-zinc-400 text-sm">Yes! You can cancel your subscription at any time.</p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
              <h3 className="font-semibold mb-2">What payment methods?</h3>
              <p className="text-zinc-400 text-sm">We accept all major credit cards through Stripe.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
