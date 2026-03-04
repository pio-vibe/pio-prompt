'use client';
import { useState } from 'react';
import Link from 'next/link';

// Simple prompt cards data
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
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">🤖 pio-prompt Builder</Link>
        <span className="text-sm text-slate-500">{selected.length} cards selected</span>
      </header>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Choose Cards</h2>
          <div className="grid grid-cols-2 gap-3">
            {promptCards.map(card => (
              <button key={card.id} onClick={() => toggle(card.id)}
                className={'p-4 rounded-xl text-left transition ' + (selected.includes(card.id) ? 'bg-blue-600 text-white' : 'bg-white border shadow-sm hover:bg-slate-50')}>
                <span className="text-2xl">{card.icon}</span>
                <div className="font-medium">{card.name}</div>
                <div className="text-xs opacity-70">{card.tier}</div>
              </button>
            ))}
          </div>
        </div>
        <div>
          {selected.length > 0 && (
            <div className="bg-white p-4 rounded-xl border shadow-sm mb-4">
              <h3 className="font-semibold mb-3">Configure</h3>
              {selected.flatMap(sid => {
                const card = promptCards.find(c => c.id === sid);
                if (!card) return [];
                return card.params.map(p => (
                  <div key={sid + '-' + p} className="mb-2">
                    <label className="block text-sm text-slate-600 mb-1">{p}</label>
                    <input type="text" value={params[p] || ''} onChange={e => setParams({...params, [p]: e.target.value})}
                      className="w-full px-3 py-2 rounded border" placeholder={p} />
                  </div>
                ));
              })}
              <button onClick={generate} className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
                Generate Prompt
              </button>
            </div>
          )}
          {output && (
            <div className="bg-slate-900 text-slate-100 p-4 rounded-xl">
              <pre className="whitespace-pre-wrap text-sm">{output}</pre>
              <button onClick={() => navigator.clipboard.writeText(output)} className="mt-3 bg-slate-700 px-4 py-2 rounded text-sm">
                📋 Copy
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
