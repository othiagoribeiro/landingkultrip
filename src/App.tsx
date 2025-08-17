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
          </div>
        </div>
      </header>

      {/* Hero Section - Full Width */}
      <div className="relative h-96 md:h-[500px] w-full overflow-hidden">
        <img 
          src="/src/assets/Foto-Capa-Kultrip-10---Chile.png" 
          alt="Chile Travel Adventure" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
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
        {/* Magic of Stories Section */}
        <section className="text-center p-6 bg-white rounded-2xl shadow-lg max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">✨</span>
            <h2 className="text-xl font-bold text-gray-800">
              The magic of stories drives your sales
            </h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Kultrip helps you inspire your visitors, capture more qualified leads and close more sales 
            thanks to the emotional power of stories. Travelers don't just look for destinations, they seek to live experiences.
          </p>
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

      {/* Call to Action Section - Full Width */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 py-16 text-center text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sell stories, not trips.
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-light">
            Boost sales with personalized itineraries powered by Kultrip.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Planning Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
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
                  <a href="#consultation" className="text-gray-400 hover:text-white transition-colors">
                    Book a Consultation
                  </a>
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