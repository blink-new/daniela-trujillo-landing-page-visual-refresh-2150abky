import React from 'react';
import { Lightbulb, Phone, Calendar, Mail, Instagram, MessageCircle, ClipboardCheck, Users, Globe, Heart, Star, ThumbsUp } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white-pure">
      {/* Header Principal */}
      <header className="bg-gray-elegant relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold mb-4 text-white">
              Daniela Trujillo
            </h1>
            
            <p className="font-poppins text-lg md:text-xl text-orange-warm font-medium mb-6">
              Coach, Orientadora Vocacional y Planificación Universitaria
            </p>
            
            <h2 className="font-momentum text-2xl md:text-3xl mb-8 text-white font-semibold">
              Fundadora de Elige con Claridad y <span className="text-pink-pastel">U</span>-MOM
            </h2>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 border-l-4 border-orange-warm shadow-lg max-w-4xl mx-auto">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Lightbulb className="w-10 h-10 text-orange-warm" />
                </div>
                <div className="px-4">
                  <p className="font-momentum text-xl md:text-2xl lg:text-3xl leading-relaxed text-black-soft">
                    <span className="font-bold text-black-soft">Autodescubrimiento, propósito y claridad</span>
                    <br />
                    para diseñar tu <span className="underline decoration-orange-warm decoration-2 underline-offset-4">futuro académico y profesional</span>
                  </p>
                </div>
              </div>
            </div>
            
            <p className="font-poppins text-white mt-6 text-lg font-medium">
              <span className="text-orange-warm font-bold text-xl">+</span> de 13 años de experiencia
            </p>
          </div>
        </div>
      </header>

      {/* Bloque de Propósito */}
      <section className="py-16 bg-white-pure">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="font-momentum text-4xl md:text-5xl font-bold text-black-soft mb-6">
              Encuentra tu propósito y<br /><span className="text-orange-warm">diseña tu futuro</span>
            </h2>
            
            <p className="font-poppins text-xl text-gray-smoke mb-8 leading-relaxed">
              Acompañamiento especializado en orientación vocacional y admisiones universitarias internacionales para jóvenes y familias
            </p>
            
            <a 
              href="https://wa.me/593997883462" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-orange-warm text-white px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-orange-600 transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6 mr-3 text-orange-200" />
              Conversemos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-left mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-black-soft mb-8">
              Sobre mí
            </h2>
          </div>
          
          {/* Contenido con foto y texto */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              {/* Texto con iconos naranjas - lado izquierdo */}
              <div className="md:col-span-2">
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-orange-warm text-2xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="font-poppins text-lg font-bold text-black-soft mb-2">
                        <span className="text-orange-warm font-bold text-xl">+</span> de 13 años de experiencia
                      </h3>
                      <p className="font-poppins text-base text-gray-smoke leading-relaxed">
                        En coaching vocacional y mentoría juvenil
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-orange-warm text-2xl">💛</span>
                    </div>
                    <div>
                      <h3 className="font-poppins text-lg font-bold text-black-soft mb-2">
                        Fundadora de programas especializados
                      </h3>
                      <p className="font-poppins text-base text-gray-smoke leading-relaxed">
                        Elige con Claridad (orientación vocacional para jóvenes) y UMOM (programa para madres)
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-orange-warm text-2xl">👥</span>
                    </div>
                    <div>
                      <h3 className="font-poppins text-lg font-bold text-black-soft mb-2">
                        <span className="text-orange-warm font-bold text-xl">+</span> de 500 familias acompañadas
                      </h3>
                      <p className="font-poppins text-base text-gray-smoke leading-relaxed">
                        En la toma de decisiones educativas y profesionales
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">
                      <span className="text-orange-warm text-2xl">🌍</span>
                    </div>
                    <div>
                      <h3 className="font-poppins text-lg font-bold text-black-soft mb-2">
                        Especialista en admisiones internacionales
                      </h3>
                      <p className="font-poppins text-base text-gray-smoke leading-relaxed">
                        Estados Unidos, España, Reino Unido, Canadá y más países
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Foto cuadrada - lado derecho */}
              <div className="md:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="bg-white p-3 rounded-lg shadow-lg">
                    <img 
                      src="/daniela-photo.jpeg" 
                      alt="Daniela Trujillo" 
                      className="w-80 h-80 object-cover rounded-lg"
                    />
                  </div>
                  {/* Recuadro naranja con estadística sobre la foto */}
                  <div className="absolute -bottom-4 -right-4 bg-orange-warm text-white px-6 py-3 rounded-lg shadow-lg">
                    <div className="text-center">
                      <p className="font-poppins text-2xl font-bold">500+</p>
                      <p className="font-poppins text-sm">Familias</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-beige-ivory">
        <div className="container mx-auto px-4">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold text-black-soft text-center mb-6">
            Mis Servicios
          </h2>
          <p className="text-xl md:text-2xl font-poppins text-gray-smoke text-center mb-12 max-w-4xl mx-auto">
            Programas especializados para acompañarte en cada etapa de tu desarrollo personal y profesional
          </p>
          
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Servicio 1: Test Vocacional */}
            <div className="bg-white-pure p-6 rounded-lg shadow-lg text-center border border-gray-light">
              <div className="flex justify-center mb-4">
                <ClipboardCheck className="w-12 h-12 text-celeste-pastel" />
              </div>
              <h3 className="text-lg font-semibold text-celeste-pastel mb-4 font-poppins leading-tight">
                Test Vocacional + Sesión de Coaching
              </h3>
              <p className="text-gray-smoke font-poppins mb-6 text-sm leading-relaxed min-h-[6rem]">
                Descubre tus fortalezas, intereses y el camino profesional que mejor se adapta a ti. Incluye un test vocacional completo y una sesión de retroalimentación personalizada.
              </p>
              <button className="bg-orange-warm text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-orange-600 transition-colors w-full">
                Más información
              </button>
            </div>

            {/* Servicio 2: Coaching Individual */}
            <div className="bg-white-pure p-6 rounded-lg shadow-lg text-center border border-gray-light">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-celeste-pastel" />
              </div>
              <h3 className="text-lg font-semibold text-celeste-pastel mb-4 font-poppins leading-tight">
                Programa de Coaching Individual
              </h3>
              <p className="text-gray-smoke font-poppins mb-6 text-sm leading-relaxed min-h-[6rem]">
                Acompañamiento personalizado uno a uno para ayudarte a definir tu proyecto de vida, tomar decisiones con confianza y crear tu propio camino hacia el futuro.
              </p>
              <button className="bg-orange-warm text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-orange-600 transition-colors w-full">
                Agendar sesión
              </button>
            </div>

            {/* Servicio 3: Asesoría Internacional */}
            <div className="bg-white-pure p-6 rounded-lg shadow-lg text-center border border-gray-light">
              <div className="flex justify-center mb-4">
                <Globe className="w-12 h-12 text-azul-pastel" />
              </div>
              <h3 className="text-lg font-semibold text-azul-pastel mb-4 font-poppins leading-tight">
                Asesoría Universitaria Internacional
              </h3>
              <p className="text-gray-smoke font-poppins mb-6 text-sm leading-relaxed min-h-[6rem]">
                Guía completa y estratégica para postular a universidades en Estados Unidos, Canadá, España, Reino Unido y más.
              </p>
              <button className="bg-orange-warm text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-orange-600 transition-colors w-full">
                Consultar
              </button>
            </div>

            {/* Servicio 4: UMOM */}
            <div className="bg-white-pure p-6 rounded-lg shadow-lg text-center border border-gray-light">
              <div className="flex justify-center mb-4">
                <Heart className="w-12 h-12 text-lila-pastel" />
              </div>
              <h3 className="text-lg font-semibold text-lila-pastel mb-4 font-poppins leading-tight">
                UMOM – Coaching y Talleres para Madres
              </h3>
              <p className="text-gray-smoke font-poppins mb-6 text-sm leading-relaxed min-h-[6rem]">
                Programa especializado de apoyo y desarrollo personal para madres que desean acompañar mejor a sus hijos, reconectar con su propósito y construir una vida con sentido.
              </p>
              <button className="bg-orange-warm text-white px-6 py-3 rounded-lg font-poppins font-semibold hover:bg-orange-600 transition-colors w-full">
                Conocer más
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white-pure">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-black-soft mr-4">
              Testimonios
            </h2>
            <ThumbsUp className="w-8 h-8 text-orange-warm" />
          </div>
          
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="bg-gray-light p-8 rounded-lg shadow-lg">
              {/* Estrellitas de review */}
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
              <p className="font-poppins text-base text-black-soft mb-6 italic leading-relaxed">
                "Gracias al acompañamiento de Daniela, mi hijo pudo conocerse mejor, descubrir cómo le gusta estudiar y tomar una decisión mucho más clara y segura sobre su futuro universitario."
              </p>
              <p className="font-poppins font-semibold text-gray-smoke text-sm">
                — Andrea Arce, Mamá
              </p>
            </div>
            
            <div className="bg-gray-light p-8 rounded-lg shadow-lg">
              {/* Estrellitas de review */}
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
              <p className="font-poppins text-base text-black-soft mb-6 italic leading-relaxed">
                "Vivimos una fantástica experiencia en el proceso electivo y posterior ingreso a la universidad con mi hijo Emilio. Nunca sentimos dudas durante el proceso, nos sentimos emocionalmente seguros."
              </p>
              <p className="font-poppins font-semibold text-gray-smoke text-sm">
                — Verónica Vásquez, Mamá
              </p>
            </div>
            
            <div className="bg-gray-light p-8 rounded-lg shadow-lg">
              {/* Estrellitas de review */}
              <div className="flex justify-center mb-4">
                <div className="flex space-x-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                </div>
              </div>
              <p className="font-poppins text-base text-black-soft mb-6 italic leading-relaxed">
                "Mi hijo mayor se graduó en Economía en una de las mejores universidades del mundo, en Inglaterra (KCL). Mi hijo menor está ahora en Roma, Italia, desarrollando su talento en el fútbol. Ambos están felices y plenamente enfocados en lo que hacen, y eso es resultado directo del acompañamiento vocacional que recibieron de Daniela."
              </p>
              <p className="font-poppins font-semibold text-gray-smoke text-sm">
                — Eduardo Veintimilla, Papá
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-black-soft mb-4">
              Contacto
            </h2>
            <p className="font-poppins text-xl text-gray-smoke">
              Estoy aquí para acompañarte en tu proceso de autodescubrimiento
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <a 
              href="https://wa.me/593997883462" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-light"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-black-soft text-lg mb-1">WhatsApp</h3>
                <p className="font-poppins text-gray-smoke">Conversemos directamente</p>
              </div>
            </a>
            
            <a 
              href="https://calendly.com/danielatrujillok/coaching-1-hora" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-light"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-black-soft text-lg mb-1">Agenda una reunión</h3>
                <p className="font-poppins text-gray-smoke">Calendly</p>
              </div>
            </a>
            
            <a 
              href="https://instagram.com/eligeconclaridad" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-light"
            >
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Instagram className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-black-soft text-lg mb-1">Instagram</h3>
                <p className="font-poppins text-gray-smoke">@eligeconclaridad</p>
              </div>
            </a>
            
            <a 
              href="mailto:daniela@eligeconclaridad.com"
              className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-light"
            >
              <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-black-soft text-lg mb-1">Email</h3>
                <p className="font-poppins text-gray-smoke">daniela@eligeconclaridad.com</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Llamado a la acción final */}
      <section className="py-16 bg-gray-elegant text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-momentum text-3xl md:text-4xl font-bold mb-8">
            ¿Listo para descubrir tu camino y tomar decisiones con claridad?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/593997883462" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-warm text-white px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-colors"
            >
              Escríbeme por WhatsApp
            </a>
            <a 
              href="https://calendly.com/danielatrujillok/coaching-1-hora" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-orange-warm text-white px-8 py-4 rounded-lg font-poppins font-semibold hover:bg-opacity-90 transition-colors"
            >
              Agenda tu sesión
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-light py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="flex justify-center space-x-8 mb-6">
              <img 
                src="/logo-elige-con-claridad.jpg" 
                alt="Logo Elige con Claridad" 
                className="h-12 w-auto"
              />
              <div className="h-12 w-24 bg-gray-medium rounded flex items-center justify-center">
                <span className="text-xs text-white font-poppins">UMOM</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="font-poppins text-xl text-gray-smoke italic">
                "Clarity creates calm"
              </p>
              <p className="font-poppins text-xl text-gray-smoke italic">
                "Autoconocimiento es el inicio de todo"
              </p>
            </div>
          </div>
          
          <div className="text-center pt-8 border-t border-gray-medium">
            <p className="font-poppins text-sm text-gray-smoke">
              © 2024 Daniela Trujillo - Elige con Claridad. Todos los derechos reservados.
            </p>
            <p className="font-poppins text-sm text-gray-smoke mt-2">
              <a href="#" className="hover:text-orange-warm transition-colors">
                Políticas de privacidad
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;