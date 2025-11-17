export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">How ClickGram connects Telegram ↔ Meta CAPI</h2>
            <p className="mt-4 text-gray-700">
              We capture key Telegram actions from your bots, channels, or chats and send them server-side to Meta CAPI or your tracker via postbacks. Your campaigns finally learn what happens after the click.
            </p>
            <ol className="mt-6 space-y-4 text-gray-700 list-decimal list-inside">
              <li>Install our lightweight Telegram middleware or use our SDK.</li>
              <li>Define events like Bot Started, Channel Joined, DM Sent, Purchase.</li>
              <li>We enrich with click IDs, map parameters, and send to CAPI/postbacks.</li>
              <li>Platforms optimize to quality events. ROAS climbs.</li>
            </ol>
          </div>
          <div>
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-600/10 via-indigo-600/10 to-purple-600/10 border border-blue-200/50">
              <div className="grid gap-4">
                <div className="p-4 rounded-xl bg-white shadow border">
                  <div className="text-sm text-gray-600">Telegram Event</div>
                  <div className="mt-1 font-semibold">bot_started</div>
                </div>
                <div className="p-4 rounded-xl bg-white shadow border">
                  <div className="text-sm text-gray-600">Enrichment</div>
                  <div className="mt-1 font-semibold">fbp / fbc / click_id</div>
                </div>
                <div className="p-4 rounded-xl bg-white shadow border">
                  <div className="text-sm text-gray-600">Destination</div>
                  <div className="mt-1 font-semibold">Meta CAPI / Postback URL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
