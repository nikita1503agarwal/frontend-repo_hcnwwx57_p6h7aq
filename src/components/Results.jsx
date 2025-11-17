export default function Results() {
  return (
    <section id="results" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">2× ROAS from real Telegram signals</h2>
            <p className="mt-4 text-gray-700">When platforms see what happens inside Telegram, they optimize. Expect stronger quality, lower CPA, and clean reporting.</p>
            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10 border">
              <blockquote className="text-gray-900 font-medium">“We doubled ROAS after sending Bot Started and Purchase to CAPI. ClickGram paid for itself in week one.”</blockquote>
              <div className="mt-3 text-sm text-gray-600">— Alex P., Performance Lead</div>
            </div>
          </div>
          <div>
            <div className="p-6 rounded-2xl bg-white border shadow-sm">
              <div className="text-sm text-gray-600">ROAS over time</div>
              <div className="mt-4 h-48 w-full">
                <svg viewBox="0 0 400 160" className="h-full w-full">
                  <defs>
                    <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  <path d="M10 130 C 70 120, 120 110, 160 90 S 250 40, 320 50 S 380 120, 390 110" stroke="#6366f1" strokeWidth="3" fill="none" />
                  <path d="M10 130 C 70 120, 120 110, 160 90 S 250 40, 320 50 S 380 120, 390 110 L 390 160 L 10 160 Z" fill="url(#g)" />
                </svg>
              </div>
              <div className="mt-3 text-xs text-gray-500">After enabling CAPI + postbacks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
