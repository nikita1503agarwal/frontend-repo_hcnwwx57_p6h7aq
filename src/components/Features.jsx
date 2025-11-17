import { Activity, ArrowUpRight, BarChart3, Boxes, Cable, CheckCircle2, Link2 } from 'lucide-react';

const features = [
  { icon: Activity, title: 'Event tracking', desc: 'Bot Started, Channel Joined, DM Sent, Purchase, Custom.' },
  { icon: Cable, title: 'CAPI ready', desc: 'First-class Meta CAPI support with event deduplication.' },
  { icon: Link2, title: 'Postbacks', desc: 'Flexible postbacks for any tracker or affiliate platform.' },
  { icon: ArrowUpRight, title: 'Optimization', desc: 'Send high-signal events so algorithms bid smarter.' },
  { icon: BarChart3, title: 'Retargeting', desc: 'Trigger audiences from Telegram behaviors.' },
  { icon: Boxes, title: 'Integrations', desc: 'Meta, TikTok, Google, Voluum, Keitaro, RedTrack.' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Everything you need to scale Telegram</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-6 rounded-2xl bg-white border shadow-sm">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
