import { Facebook, Activity, LineChart, SlidersHorizontal } from 'lucide-react';

const items = [
  { name: 'Meta', color: 'from-blue-600 to-indigo-600' },
  { name: 'TikTok', color: 'from-green-400 to-cyan-500' },
  { name: 'Google', color: 'from-yellow-400 to-orange-500' },
  { name: 'Voluum', color: 'from-fuchsia-500 to-purple-600' },
  { name: 'Keitaro', color: 'from-rose-500 to-pink-600' },
  { name: 'RedTrack', color: 'from-sky-500 to-blue-700' },
];

export default function Integrations() {
  return (
    <section id="integrations" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Plugs into your stack</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.name} className="p-6 rounded-2xl bg-white border shadow-sm">
              <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${i.color}`} />
              <div className="mt-4 font-semibold text-gray-900">{i.name}</div>
              <div className="text-sm text-gray-600">Native or via postbacks</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
