export default function FinalCTA() {
  return (
    <section id="cta" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,white,transparent_30%),radial-gradient(circle_at_80%_30%,white,transparent_30%)]" />
          <div className="relative p-10 sm:p-14">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">Stop running blind on Telegram.</h3>
            <p className="mt-3 text-white/90 max-w-2xl">Start sending real Telegram events to your ad platforms and watch ROAS climb.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex justify-center items-center text-sm font-semibold text-blue-600 bg-white px-5 py-3 rounded-lg shadow hover:shadow-lg transition">Start free trial</a>
              <a href="#solution" className="inline-flex justify-center items-center text-sm font-semibold text-white/90 px-5 py-3 rounded-lg ring-1 ring-white/60">See how it works</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
