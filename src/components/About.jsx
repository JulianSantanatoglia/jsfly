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
               Sobre mí
             </h2>
             <div className="w-20 h-1 bg-blue-500 rounded-full"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              ¡Hola! Soy Julián Santanatoglia, piloto de dron certificado apasionado por la fotografía y el video aéreo en Almería Capital.  
              Mi especialización se centra en el sector inmobiliario y publicitario, 
              donde capturo la esencia única de cada proyecto desde perspectivas que transforman 
              la forma de ver los espacios.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Cuento con número de registro de operador, certificación A1/A3 y cumplo 
              completamente con la normativa AESA para volar en territorio español y 
              dentro de la Unión Europea. Mi compromiso con la seguridad y el cumplimiento 
              normativo garantiza que cada proyecto se ejecute con los más altos estándares 
              profesionales.
            </p>

            {/* Skills */}
                         <div className="space-y-4">
               <h3 className="text-xl font-semibold text-gray-800">Especialidades</h3>
               <div className="grid grid-cols-2 gap-4">
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   <span className="text-gray-700">Fotografía Inmobiliaria</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   <span className="text-gray-700">Video Aéreo Publicitario</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   <span className="text-gray-700">Documentación de Terrenos</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   <span className="text-gray-700">Urbanizaciones</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                   <span className="text-gray-700">Complejos Turísticos</span>
                 </div>
               </div>
             </div>

            {/* Stats */}
                         <div className="grid grid-cols-3 gap-6 pt-6">
               <div className="text-center">
                 <div className="text-3xl font-bold text-blue-500">50+</div>
                 <div className="text-sm text-gray-600">Vuelos Realizados</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-bold text-blue-500">10+</div>
                 <div className="text-sm text-gray-600">Proyectos Completados</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-bold text-blue-500">2+</div>
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
