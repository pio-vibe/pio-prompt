'use client';
import { useState } from 'react';
import Link from 'next/link';

const promptCards = [
  { id: 'email', name: 'Email Writer', icon: '📧', tier: 'free', base: 'Write a {tone} email about {topic}', params: ['tone', 'topic'] },
  { id: 'todo', name: 'To-do Generator', icon: '📋', tier: 'free', base: 'Create a to-do list for {goal}', params: ['goal'] },
  { id: 'social', name: 'Social Post', icon: '📱', tier: 'free', base: 'Write a {platform} post about {topic}', params: ['platform', 'topic'] },
  { id: 'blog', name: 'Blog Post', icon: '📰', tier: 'starter', base: 'Write a blog post about {topic}', params: ['topic'] },
  { id: 'code', name: 'Code Review', icon: '💻', tier: 'free', base: 'Review this code: {code}', params: ['code'] },
  { id: 'summary', name: 'Summary', icon: '📚', tier: 'free', base: 'Summarize: {content}', params: ['content'] },
];

export default function Builder() {
  const [selected, setSelected] = useState<string[]>([]);
  const [params, setParams] = useState<Record<string, string>>({});
  const [output, setOutput] = useState('');

  const toggle = (id: string) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(s => s !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const generate = () => {
    let result = selected.map(sid => {
      const card = promptCards.find(c => c.id === sid);
      if (!card) return '';
      let text = card.base;
      card.params.forEach(p => {
        text = text.replace('{' + p + '}', params[p] || '');
      });
      return '## ' + card.icon + ' ' + card.name + '\n' + text;
    }).join('\n\n---\n\n');
    setOutput(result);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="bg-zinc-900/50 border-b border-zinc-800 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">🤖</div>
            <span className="text-lg font-bold">pio-prompt Builder</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-zinc-500 text-sm">{selected.length} cards selected</span>
            <Link href="/" className="text-zinc-400 hover:text-white transition">← Back</Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Cards */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-zinc-400">Choose Cards</h2>
          <div className="grid grid-cols-2 gap-3">
            {promptCards.map(card => (
              <button key={card.id} onClick={() => toggle(card.id)}
                className={'p-5 rounded-xl text-left transition-all duration-200 ' + (selected.includes(card.id) 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                  : 'bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800')}>
                <span className="text-3xl block mb-2">{card.icon}</span>
                <div className="font-semibold">{card.name}</div>
                <div className="text-xs opacity-60 mt-1">{card.tier.toUpperCase()}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Config & Output */}
        <div className="space-y-6">
          {selected.length > 0 && (
            <div className="bg-zinc-900/50 border border-zinc-800 p-5 rounded-xl">
              <h3 className="font-semibold mb-4">Configure Parameters</h3>
              <div className="space-y-3">
                {selected.flatMap(sid => {
                  const card = promptCards.find(c => c.id === sid);
                  if (!card) return [];
                  return card.params.map(p => (
                    <div key={sid + '-' + p}>
                      <label className="block text-sm text-zinc-400 mb-1 capitalize">{p}</label>
                      <input type="text" value={params[p] || ''} onChange={e => setParams({...params, [p]: e.target.value})}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:border-blue-500 focus:outline-none transition" placeholder={'Enter ' + p} />
                    </div>
                  ));
                })}
              </div>
              <button onClick={generate} className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
                ✨ Generate Prompt
              </button>
            </div>
          )}

          {output && (
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden">
              <div className="bg-zinc-950 px-4 py-2 border-b border-zinc-800 flex justify-between items-center">
                <span className="text-sm text-zinc-400">Generated Prompt</span>
                <button onClick={() => navigator.clipboard.writeText(output)} className="text-sm text-blue-400 hover:text-blue-300">
                  📋 Copy
                </button>
              </div>
              <pre className="p-4 text-sm text-zinc-300 whitespace-pre-wrap max-h-96 overflow-y-auto font-mono">{output}</pre>
            </div>
          )}

          {selected.length === 0 && (
            <div className="bg-zinc-900/50 border border-zinc-800 p-12 rounded-xl text-center">
              <div className="text-5xl mb-4">🃏</div>
              <h3 className="text-xl font-semibold mb-2">Select Prompt Cards</h3>
              <p className="text-zinc-500">Click on the cards to add them to your prompt builder</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
