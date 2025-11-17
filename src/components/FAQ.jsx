const faqs = [
  { q: 'How do you capture Telegram events?', a: 'Use our middleware or SDK to listen to bot updates and channel actions, then forward to our API.' },
  { q: 'Do you support Meta CAPI deduplication?', a: 'Yes. We handle fbp/fbc and event_id mapping to avoid duplicates across pixel and server.' },
  { q: 'Can I use my own tracker?', a: 'Absolutely. Send postbacks to Voluum, Keitaro, RedTrack and more.' },
  { q: 'Is my data secure?', a: 'We encrypt in transit and at rest, with strict access controls and EU-friendly data handling.' },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">FAQ</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {faqs.map((f) => (
            <div key={f.q} className="p-6 rounded-2xl bg-white border shadow-sm">
              <div className="font-semibold text-gray-900">{f.q}</div>
              <div className="mt-2 text-sm text-gray-700">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
