import React from 'react';
import { ImageSlideshow } from './components/ImageSlideshow';
import { ConversationalWidget } from './components/ConversationalWidget';
import { ROICalculator } from './components/ROICalculator';

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
        <div className="grid lg:grid-cols-2 gap-12 items-stretch min-h-[80vh]">
          {/* Left Side - Image Slideshow */}
          <div className="relative">
            <ImageSlideshow />
          </div>

          {/* Right Side - Conversational Widget */}
          <div className="relative">
            <ConversationalWidget />
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            ¿Por qué integrar Kultrip en Animatium?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Experiencias Únicas</h3>
              <p className="text-gray-600">
                Conecta destinos con historias famosas para crear viajes memorables e inspiradores.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalización Total</h3>
              <p className="text-gray-600">
                Cada itinerario se adapta a los gustos, compañía y duración del viaje del usuario.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📧</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Generación de Leads</h3>
              <p className="text-gray-600">
                Captura información de contacto y preferencias para seguimiento comercial directo.
              </p>
            </div>
          </div>
        </section>

        {/* Integration Preview */}
        <section className="mt-20 bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Integración perfecta con Animatium
          </h2>
          <div className="bg-gray-50 rounded-2xl p-6 border-2 border-dashed border-gray-300">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold mb-2">Widget Embebido</h3>
              <p>
                Kultrip se integra como un widget responsive en cualquier página de Animatium,
                manteniendo la coherencia visual y la experiencia de usuario.
              </p>
            </div>
          </div>
        </section>

        {/* ROI Calculator */}
        <ROICalculator />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src="/src/assets/icone-roxo.png" 
                alt="Kultrip" 
                className="w-8 h-8"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <span className="text-xl font-bold">Kultrip</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Transformando viajes en historias inolvidables
            </p>
            <div className="text-xs text-gray-500 max-w-2xl mx-auto">
              <p className="mb-2">
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