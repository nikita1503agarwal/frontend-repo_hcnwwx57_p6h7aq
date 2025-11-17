import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'How it works', href: '#solution' },
    { label: 'Features', href: '#features' },
    { label: 'Results', href: '#results' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500" />
            <span className="font-bold text-gray-900">ClickGram.io</span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-700 hover:text-gray-900">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#cta" className="text-sm font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-sm hover:shadow-md transition">
              Start free trial
            </a>
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="text-sm text-gray-700" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="#cta" className="text-sm font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 w-max">
                Start free trial
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
