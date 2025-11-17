const tiers = [
  { name: 'Starter', price: '$49', desc: 'For testing Telegram flows', features: ['5k events/mo', 'Meta CAPI', 'Basic postbacks'] },
  { name: 'Growth', price: '$149', desc: 'For growing teams', features: ['50k events/mo', 'All integrations', 'Priority support'] },
  { name: 'Scale', price: 'Custom', desc: 'For high volume', features: ['500k+ events/mo', 'SLAs & SSO', 'Dedicated success'] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Pricing that grows with you</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div key={t.name} className="p-6 rounded-2xl bg-gradient-to-br from-blue-600/5 via-indigo-600/5 to-purple-600/5 border">
              <div className="text-sm text-gray-600">{t.name}</div>
              <div className="mt-2 text-3xl font-bold text-gray-900">{t.price}</div>
              <div className="mt-1 text-sm text-gray-700">{t.desc}</div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {t.features.map((f) => (
                  <li key={f}>• {f}</li>
                ))}
              </ul>
              <a href="#cta" className="mt-6 inline-flex justify-center items-center text-sm font-semibold text-white px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
