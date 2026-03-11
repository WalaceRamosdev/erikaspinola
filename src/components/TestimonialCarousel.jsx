import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "A terapia com a Érika foi o divisor de águas que eu precisava. Ela ouve com a alma. Sinto que voltei a me conectar com quem eu verdadeiramente sou sob uma nova perspectiva.",
    name: "M. Silva",
    role: "Paciente Online",
  },
  {
    text: "Encontrei um espaço sem julgamentos onde consegui olhar para as feridas do passado com amorosidade, compreendendo os padrões da minha família de forma profunda.",
    name: "João V.",
    role: "Paciente Presencial",
  },
  {
    text: "A abordagem sistêmica aliada à transpessoal trouxe clareza que eu não tive em anos de terapia convencional. Érika é de um profissionalismo e sensibilidade ímpares.",
    name: "Carla T.",
    role: "Paciente Online",
  },
  {
    text: "Minha vida mudou completamente após as sessões. O acolhimento e a técnica da Érika são algo que nunca encontrei antes.",
    name: "Ana P.",
    role: "Paciente Online",
  },
  {
    text: "Sempre tive medo de terapia, mas com a Érika me senti segura desde o primeiro momento. Recomendo para todos.",
    name: "Ricardo M.",
    role: "Paciente Presencial",
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 }
      }
    })
  };

  const nextStep = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextStep, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-12">
      <div className="relative h-[400px] md:h-[350px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full"
          >
            <div className="bg-brand-light p-8 md:p-12 rounded-3xl border border-brand-green/10 shadow-xl flex flex-col justify-between h-full min-h-[300px]">
              <div className="flex-grow">
                <svg className="w-12 h-12 text-brand-gold opacity-20 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C15.4647 8 15.017 8.44772 15.017 9V12C15.017 12.5523 14.5693 13 14.017 13H13.017C12.4647 13 12.017 12.5523 12.017 12V6C12.017 5.44772 12.4647 5 13.017 5H19.017C20.6738 5 22.017 6.34315 22.017 8V15C22.017 17.7614 19.7785 20 17.017 20H14.017V21ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H7.017C6.46472 8 6.017 8.44772 6.017 9V12C6.017 12.5523 5.56929 13 5.017 13H4.017C3.46472 13 3.017 12.5523 3.017 12V6C3.017 5.44772 3.46472 5 4.017 5H10.017C11.6738 5 13.017 6.34315 13.017 8V15C13.017 17.7614 10.7785 20 8.017 20H5.017V21Z" />
                </svg>
                <p className="text-brand-dark/80 font-serif italic text-xl md:text-2xl leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>
              
              <div className="flex items-center space-x-4 pt-8 border-t border-brand-green/10 mt-8">
                <div className="w-14 h-14 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-dark text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <span className="text-sm text-brand-dark/50 font-light">{testimonials[currentIndex].role}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center space-x-8 mt-12">
        <button
          onClick={prevStep}
          className="p-3 bg-brand-white border border-brand-green/10 rounded-full text-brand-green hover:bg-brand-green hover:text-brand-white transition-all duration-300 shadow-sm"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>
        
        {/* Indicators */}
        <div className="flex space-x-3">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentIndex ? 1 : -1);
                setCurrentIndex(idx);
              }}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'w-8 bg-brand-gold' : 'w-2.5 bg-brand-green/20'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextStep}
          className="p-3 bg-brand-white border border-brand-green/10 rounded-full text-brand-green hover:bg-brand-green hover:text-brand-white transition-all duration-300 shadow-sm"
          aria-label="Próximo"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
