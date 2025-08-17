import React from 'react';
import { ConversationalWidget } from './components/ConversationalWidget';
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
            <div className="text-sm text-gray-600">
              Widget para <span className="font-semibold">Animatium</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Crea tu itinerario turístico inspirado por tu historia favorita
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 font-medium">
            Vive una aventura de película
          </p>
        </div>

        {/* Conversational Widget */}
        <div className="max-w-4xl mx-auto mb-20">
          <ConversationalWidget />
        </div>

        {/* Features Section */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            ¿Por qué integrar Kultrip en Animatium?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Film className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Experiencias Únicas</h3>
              <p className="text-gray-600">
                Conecta destinos con historias famosas para crear viajes memorables e inspiradores.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalización Total</h3>
              <p className="text-gray-600">
                Cada itinerario se adapta a los gustos, compañía y duración del viaje del usuario.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-600" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Generación de Leads</h3>
              <p className="text-gray-600">
                Captura información de contacto y preferencias para seguimiento comercial directo.
              </p>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <ROICalculator />

        {/* Call to Action Section */}
        <section className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Live Your Story?
          </h2>
          <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto font-light">
            Join thousands of travelers who've turned their favorite stories into unforgettable 
            adventures. Your next chapter starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Planning Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-20">
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
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Destinations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Reviews
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
                  <span className="text-gray-400">+1 (555) 123-DREAM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">hello@kultrip.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span className="text-gray-400">New York, NY</span>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Notice */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-xs text-gray-500 max-w-4xl mx-auto text-center">
              <p className="mb-4">
                <strong>Privacidad de datos:</strong> La información recopilada se utiliza únicamente para crear 
                itinerarios personalizados y establecer contacto comercial. No compartimos datos con terceros.
              </p>
              <p>
                Al proporcionar tu correo electrónico, aceptas recibir tu guía personalizada y comunicaciones 
                relacionadas con nuestros servicios turísticos.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;