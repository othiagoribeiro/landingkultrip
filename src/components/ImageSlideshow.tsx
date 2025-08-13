import React, { useState, useEffect } from 'react';

const destinations = [
  {
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Plataforma 9 3/4',
    subtitle: 'Harry Potter - Londres'
  },
  {
    image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Los molinos de Campo de Criptana',
    subtitle: 'Don Quijote - España'
  },
  {
    image: 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Montmartre',
    subtitle: 'Emily in Paris - París'
  },
  {
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Hobbiton',
    subtitle: 'El Señor de los Anillos - Nueva Zelanda'
  },
  {
    image: 'https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Nueva York',
    subtitle: 'Gossip Girl - Estados Unidos'
  },
  {
    image: 'https://images.pexels.com/photos/1578662/pexels-photo-1578662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Escocia',
    subtitle: 'Outlander - Reino Unido'
  }
];

export const ImageSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full overflow-hidden rounded-2xl">
      {destinations.map((destination, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={destination.image}
            alt={destination.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-bold mb-2">{destination.title}</h3>
            <p className="text-lg opacity-90">{destination.subtitle}</p>
          </div>
        </div>
      ))}
      
      {/* Call to Action Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight drop-shadow-2xl">
            Crea tu itinerario turístico inspirado por tu historia favorita
          </h2>
          <p className="text-xl md:text-2xl opacity-95 mb-12 drop-shadow-lg font-medium">
            Vive una aventura de película
          </p>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};