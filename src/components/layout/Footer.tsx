import { Mail, MapPin, Phone, Facebook, Instagram } from 'lucide-react';
import { images } from '@/data/images';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-guarala-dark text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={images.logo}
              alt="Logotipo Instituto Guarala"
              className="h-12 w-12 rounded-full object-contain ring-2 ring-guarala-gold/40"
            />
            <div>
              <p className="font-serif text-lg font-bold text-white">
                Instituto Guarala
              </p>
              <p className="text-xs uppercase tracking-wider text-guarala-gold">
                Formação Técnica
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Formamos profissionais técnicos de excelência, preparados para os
            desafios do mercado tecnológico moderno.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Navegação</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-guarala-gold">Início</a></li>
            <li><a href="#sobre" className="hover:text-guarala-gold">Sobre</a></li>
            <li><a href="#cursos" className="hover:text-guarala-gold">Cursos</a></li>
            <li><a href="#contactos" className="hover:text-guarala-gold">Contactos</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Cursos</h3>
          <ul className="space-y-2 text-sm">
            <li>Técnico de Informática</li>
            <li>Gestão de Sistemas Informáticos</li>
            <li>Redes e Sistemas Informáticos</li>
            <li>Telecomunicações e Eletrónica</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-semibold text-white">Contactos</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-guarala-gold" />
              <span>Angola</span>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-guarala-gold" />
              <span>+244 900 000 000</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-guarala-gold" />
              <span>geral@institutoguarala.ao</span>
            </li>
          </ul>
          <div className="mt-4 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-guarala-gold hover:text-guarala-dark">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-guarala-gold hover:text-guarala-dark">
              <Instagram size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-slate-400">
        © {year} Instituto Guarala. Todos os direitos reservados.
      </div>
    </footer>
  );
}