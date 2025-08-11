const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/images/imagen-2.jpg"
                alt="Fotógrafo aéreo trabajando"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
                         <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-500 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
                           <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
               Sobre Mí
             </h2>
             <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Soy un apasionado fotógrafo y videógrafo aéreo especializado en capturar 
              momentos únicos desde perspectivas que solo los drones pueden ofrecer. 
              Con años de experiencia en el campo, he desarrollado un ojo único para 
              la composición aérea y la narrativa visual.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Mi trabajo abarca desde paisajes naturales hasta proyectos comerciales, 
              siempre buscando contar historias a través de imágenes que inspiren y 
              emocionen. Cada vuelo es una nueva oportunidad para descubrir la belleza 
              oculta de nuestro mundo. Cumplo con toda la normativa AESA y cuento con 
              certificación A1/A3, registro de operador y piloto de dron certificado.
            </p>

            {/* Skills */}
                         <div className="space-y-4">
               <h3 className="text-xl font-semibold text-gray-800">Especialidades</h3>
               <div className="grid grid-cols-2 gap-4">
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   <span className="text-gray-700">Fotografía Aérea</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   <span className="text-gray-700">Video Aéreo</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   <span className="text-gray-700">Paisajes Naturales</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   <span className="text-gray-700">Proyectos Comerciales</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   <span className="text-gray-700">Cumplimiento AESA</span>
                 </div>
               </div>
             </div>

            {/* Stats */}
                         <div className="grid grid-cols-3 gap-6 pt-6">
               <div className="text-center">
                 <div className="text-3xl font-bold text-blue-500">500+</div>
                 <div className="text-sm text-gray-600">Vuelos Realizados</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-bold text-blue-500">50+</div>
                 <div className="text-sm text-gray-600">Proyectos Completados</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-bold text-blue-500">3+</div>
                 <div className="text-sm text-gray-600">Años de Experiencia</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
