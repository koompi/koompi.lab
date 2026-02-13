const ContentServerDiagram = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8 w-full max-w-5xl mx-auto px-4">
      {/* Label for context */}
      <p className="text-sm text-gray-500 font-medium mb-2">
        Connects via Local WiFi — No Internet Required
      </p>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 w-full">
        {/* Left Devices */}
        <div className="grid grid-cols-2 gap-4 order-2 lg:order-1 flex-1 justify-items-center">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all w-32">
            <span className="text-3xl block mb-2">📱</span>
            <p className="text-sm text-gray-600 font-medium">Phones</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all w-32">
            <span className="text-3xl block mb-2">📋</span>
            <p className="text-sm text-gray-600 font-medium">Tablets</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all w-32">
            <span className="text-3xl block mb-2">💻</span>
            <p className="text-sm text-gray-600 font-medium">Laptops</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all w-32">
            <span className="text-3xl block mb-2">🖥️</span>
            <p className="text-sm text-gray-600 font-medium">Ministations</p>
          </div>
        </div>

        {/* Connection Indicator (Left) */}
        <div className="hidden lg:flex items-center gap-2 order-1">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-koompi-secondary"></div>
          <svg className="w-6 h-6 text-koompi-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>

        {/* Content Server - Center */}
        <div className="bg-gradient-to-br from-koompi-primary to-koompi-secondary rounded-2xl p-8 shadow-xl text-center min-w-[220px] order-1 lg:order-2 relative overflow-hidden group">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-white/5 rounded-2xl"></div>
          <div className="relative z-10">
            <img
              src="/images/products/content-server.png"
              alt="Content Server"
              className="w-32 h-32 object-contain mx-auto mb-4 drop-shadow-lg group-hover:scale-110 transition-transform"
            />
            <p className="font-bold text-white text-lg">Content Server</p>
            <p className="text-sm text-white/70">2TB Library</p>
          </div>
        </div>

        {/* Connection Indicator (Right) */}
        <div className="hidden lg:flex items-center gap-2 order-3">
          <svg className="w-6 h-6 text-koompi-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-koompi-secondary"></div>
        </div>

        {/* Right Devices - Only show on large screens for balance */}
        <div className="hidden lg:grid grid-cols-2 gap-3 order-4 opacity-60">
          <div className="bg-white/50 rounded-xl p-4 border border-gray-100 text-center">
            <span className="text-2xl block mb-1 grayscale">📱</span>
            <p className="text-xs text-gray-400">More...</p>
          </div>
        </div>
      </div>

      {/* Mobile WiFi indicator */}
      <div className="flex lg:hidden items-center gap-2 mt-2 order-3">
        <div className="flex gap-1">
          <span className="w-1 h-3 bg-koompi-secondary rounded-full animate-pulse"></span>
          <span className="w-1 h-4 bg-koompi-secondary rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></span>
          <span className="w-1 h-5 bg-koompi-secondary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-1 h-6 bg-koompi-secondary rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></span>
        </div>
        <span className="text-xs text-gray-500">WiFi 6 • Up to 150 connections</span>
      </div>
    </div>
  )
}

export default ContentServerDiagram
