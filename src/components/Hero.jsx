import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/60 backdrop-blur px-3 py-1 text-xs text-gray-700">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              New: Telegram → Meta CAPI Tracking
            </div>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
              Make Telegram measurable.
            </h1>
            <p className="mt-5 text-lg text-gray-700 max-w-2xl">
              ClickGram turns Telegram into a performance channel. Track actions like Bot Started, Channel Joined, or DM Sent and send them back to your ad platforms to optimize and retarget.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center items-center text-sm font-semibold text-white px-5 py-3 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow hover:shadow-lg transition">
                Start free trial
              </a>
              <a href="#solution" className="inline-flex justify-center items-center text-sm font-semibold px-5 py-3 rounded-lg border border-gray-300 text-gray-800 bg-white/70 backdrop-blur hover:bg-white">
                How it works
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-600">
              Trusted by performance marketers scaling Telegram flows.
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white" />
    </section>
  );
}
