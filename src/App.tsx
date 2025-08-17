import React from 'react';
import { ROICalculator } from './components/ROICalculator';
import { Film, Target, Mail, Heart, Globe, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/src/assets/icone-roxo.png" 
                alt="Kultrip" 
                className="w-10 h-10"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Kultrip
              </h1>
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              Book a Call
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Width */}
      <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
        <img 
          src="/src/assets/Foto-Capa-Kultrip-10---Chile copy.png" 
          alt="Chile Travel Adventure" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Create story-inspired itineraries to sell
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium drop-shadow-md">
              Attract qualified leads, boost conversions, and increase sales with Kultrip
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Video Sales Section */}
        <section className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Container */}
            <div className="order-2 lg:order-1">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/QyccRi4G8vo"
                    title="Kultrip - Transform Your Travel Agency"
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                {/* Video overlay decoration */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-full opacity-15"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                Watch Demo
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                The magic of 
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> stories</span> drives your sales
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Kultrip helps you inspire your visitors, capture more qualified leads and close more sales 
                thanks to the emotional power of stories.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <p className="text-gray-700">
                    <strong>Emotional Connection:</strong> Travelers don't just look for destinations, they seek to live experiences
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  </div>
                  <p className="text-gray-700">
                    <strong>Higher Conversions:</strong> Story-driven itineraries convert 3x better than traditional listings
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  </div>
                  <p className="text-gray-700">
                    <strong>Qualified Leads:</strong> Capture detailed preferences and contact information automatically
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="border-2 border-purple-200 text-purple-700 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Why integrate Kultrip into Your Agency?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Film className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unique Experiences</h3>
              <p className="text-gray-600">
                Connect destinations with famous stories to create memorable and inspiring trips.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Total Personalization</h3>
              <p className="text-gray-600">
                Each itinerary adapts to the user's preferences, travel companions, and trip duration.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lead Generation</h3>
              <p className="text-gray-600">
                Capture contact information and preferences for direct commercial follow-up.
              </p>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <ROICalculator />

      </main>

      {/* Lead Form Section - Full Width */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 text-center text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to boost your sales?
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto font-light">
            Get a personalized demo and see how Kultrip can transform your agency.
          </p>
          
          {/* Lead Form */}
          <div className="max-w-md mx-auto">
            <form className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Nome *"
                  required
                  className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email *"
                  required
                  className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Telefone *"
                  required
                  className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Empresa *"
                  required
                  className="w-full p-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                />
              </div>
              <p className="text-sm text-white/80 text-left">
                * Todos os dados são obrigatórios
              </p>
              <button
                type="submit"
                className="w-full bg-white text-purple-600 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Your Demo
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">K</span>
                </div>
                <span className="text-2xl font-bold">Kultrip</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Creating unforgettable travel experiences to the world's most 
                amazing destinations. Discover new cultures, cuisines, and 
                adventures with our expert travel planning.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <Heart className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <Mail className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#integrate" className="text-gray-400 hover:text-white transition-colors">
                    Integrate
                  </a>
                </li>
                <li>
                  <a href="#calculator" className="text-gray-400 hover:text-white transition-colors">
                    Calculator
                  </a>
                </li>
                <li>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    Book a Call
                  </button>
                </li>
                <li>
                  <a href="#kultrip" className="text-gray-400 hover:text-white transition-colors">
                    Kultrip
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">+34 622 17 68 54</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">charles.santana@kultrip.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">Mallorca, Spain</span>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex justify-center gap-8">
              <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#support" className="text-gray-400 hover:text-white transition-colors text-sm">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;