import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { images } from '@/data/images';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#beneficios', label: 'Benefícios' },
  { href: '#contactos', label: 'Contactos' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 shadow-md backdrop-blur-md'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={images.logo}
            alt="Logotipo Instituto Guarala"
            className="h-12 w-12 rounded-full object-contain ring-2 ring-guarala-gold/40"
          />
          <div className="hidden sm:block">
            <p className="font-serif text-lg font-bold leading-tight text-guarala-dark">
              Instituto Guarala
            </p>
            <p className="text-xs uppercase tracking-wider text-guarala-red">
              Formação Técnica de Excelência
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-guarala-red"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+244900000000"
            className="flex items-center gap-2 text-sm font-semibold text-guarala-red"
          >
            <Phone size={16} />
            +244 900 000 000
          </a>
        </div>

        <button
          className="rounded-lg p-2 text-guarala-dark lg:hidden"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-guarala-red"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}