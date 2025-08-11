const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/imagen-1.jpg"
          alt="Vista aérea con drone"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
                     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
             Capturando el mundo desde
             <span className="block text-blue-500">las alturas</span>
           </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            Fotografía y video aéreo profesional con drones. 
            Descubre perspectivas únicas y momentos extraordinarios desde el cielo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-3"
            >
              Ver Portfolio
            </button>
            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white/20 hover:bg-white/30 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-lg backdrop-blur-sm"
            >
              Contactar
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
