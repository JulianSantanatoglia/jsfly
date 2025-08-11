import { useState } from 'react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      image: '/images/imagen-3.jpg',
      title: 'Paisaje Montañoso',
      category: 'Naturaleza',
      description: 'Vista aérea de las montañas al amanecer'
    },
    {
      id: 2,
      image: '/images/imagen-4.jpg',
      title: 'Ciudad desde el Cielo',
      category: 'Urbano',
      description: 'Perspectiva única de la ciudad'
    },
    {
      id: 3,
      image: '/images/imagen-5.jpg',
      title: 'Costa Marina',
      category: 'Naturaleza',
      description: 'Playas y acantilados desde las alturas'
    },
    {
      id: 4,
      image: '/images/imagen-6.jpg',
      title: 'Campo de Cultivo',
      category: 'Rural',
      description: 'Patrones geométricos de la agricultura'
    },
    {
      id: 5,
      image: '/images/imagen-7.jpg',
      title: 'Atardecer Urbano',
      category: 'Urbano',
      description: 'La ciudad bañada por la luz dorada'
    },
    {
      id: 6,
      image: '/images/imagen-8.jpg',
      title: 'Bosque Aéreo',
      category: 'Naturaleza',
      description: 'Vista panorámica del bosque'
    }
  ];

  const openModal = (item) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className="section-padding">
      <div className="container-custom">
        {/* Header */}
                 <div className="text-center mb-12">
           <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
             Portfolio
           </h2>
           <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Una selección de mis mejores trabajos de fotografía y video aéreo. 
            Cada imagen cuenta una historia única desde las alturas.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                 <div className="p-6 text-white">
                   <div className="text-sm text-blue-400 font-medium mb-2">
                     {item.category}
                   </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="bg-white rounded-xl overflow-hidden">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-cover"
                />
                                 <div className="p-6">
                   <div className="text-sm text-blue-500 font-medium mb-2">
                     {selectedImage.category}
                   </div>
                   <h3 className="text-2xl font-bold text-gray-800 mb-2">
                     {selectedImage.title}
                   </h3>
                  <p className="text-gray-600">{selectedImage.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
