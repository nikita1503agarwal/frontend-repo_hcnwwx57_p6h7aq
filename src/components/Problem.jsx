export default function Problem() {
  return (
    <section id="problem" className="relative py-20 bg-gradient-to-b from-white to-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Telegram is a black box after the click.</h2>
            <p className="mt-4 text-gray-700">
              Users land in Telegram but conversion data never makes it back to your ad platforms. You can't optimize, retarget, or prove ROI.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• No attribution beyond CTR</li>
              <li>• Wasted spend on low-quality traffic</li>
              <li>• Broken retargeting and lookalikes</li>
              <li>• Manual reporting with guesswork</li>
            </ul>
          </div>
          <div className="relative">
            <div className="p-6 rounded-2xl bg-white shadow-xl border border-blue-100/60">
              <div className="text-sm text-gray-600">Typical Telegram funnel</div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                <div className="p-4 rounded-xl bg-gray-50">Ad Click</div>
                <div className="p-4 rounded-xl bg-gray-50">Telegram</div>
                <div className="p-4 rounded-xl bg-gray-50">? ? ?</div>
              </div>
              <div className="mt-4 text-center text-gray-500">No feedback loop. No optimization.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
