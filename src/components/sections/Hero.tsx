import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, GraduationCap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { images } from '@/data/images';

const slides = [
  { src: images.whatsapp2, alt: 'Estudantes do Instituto Guarala em formação prática' },
  { src: images.whatsapp4, alt: 'Laboratório de informática do Instituto Guarala' },
  { src: images.whatsapp6, alt: 'Atividades académicas no Instituto Guarala' },
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <section id="inicio" className="relative min-h-[90vh] overflow-hidden pt-20">
      {/* Fundo do carrossel */}
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <img
            key={slide.alt}
            src={slide.src}
            alt={slide.alt}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-guarala-dark/90 via-guarala-dark/70 to-guarala-dark/40" />
      </div>

      {/* Conteúdo */}
      <div className="relative mx-auto flex min-h-[calc(90vh-5rem)] max-w-7xl flex-col justify-center px-4 py-16 md:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-guarala-gold/20 px-4 py-1.5 text-sm font-semibold text-guarala-gold backdrop-blur-sm">
            <GraduationCap size={16} />
            Instituto Guarala
          </span>
          <h1 className="mt-6 text-balance font-serif text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Formação técnica que abre portas para o futuro
          </h1>
          <p className="mt-6 max-w-xl text-balance text-lg text-slate-200">
            Cursos de excelência em Informática, Gestão de Sistemas, Redes e
            Telecomunicações. Preparamos profissionais para os desafios
            tecnológicos do mercado moderno.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#cursos">
              <Button variant="secondary" size="lg">
                Conhecer cursos
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href="#contactos">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-guarala-dark"
              >
                Falar connosco
              </Button>
            </a>
          </div>
        </div>

        {/* Controlos do carrossel */}
        <div className="mt-12 flex items-center gap-4">
          <button
            onClick={prev}
            aria-label="Slide anterior"
            className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? 'w-8 bg-guarala-gold'
                    : 'w-2 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Slide seguinte"
            className="rounded-full bg-white/20 p-2 text-white backdrop-blur-sm transition-colors hover:bg-white/40"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}