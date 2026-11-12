import { BookOpen, Users, Target, Award } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { images } from '@/data/images';

const pillars = [
  { icon: BookOpen, title: 'Ensino Prático', text: 'Laboratórios equipados e projetos reais.' },
  { icon: Users, title: 'Corpo Docente', text: 'Professores com experiência no terreno.' },
  { icon: Target, title: 'Foco no Mercado', text: 'Cursos alinhados com a procura real.' },
  { icon: Award, title: 'Excelência', text: 'Compromisso com a qualidade da formação.' },
];

export function About() {
  return (
    <section id="sobre" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-guarala-gold/20" />
            <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-2xl bg-guarala-red/10" />
            <img
              src={images.whatsapp3}
              alt="Ambiente de formação do Instituto Guarala"
              className="relative z-10 w-full rounded-2xl object-cover shadow-xl"
            />
          </div>
          <div>
            <SectionTitle
              align="left"
              eyebrow="Sobre o Instituto"
              title="Uma instituição dedicada à formação técnica de qualidade"
              description="O Instituto Guarala nasceu com o propósito de capacitar jovens e profissionais com competências técnicas sólidas, preparando-os para os desafios de um mercado em constante evolução tecnológica."
            />
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-guarala-red/10 text-guarala-red">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-guarala-dark">{title}</h3>
                    <p className="mt-1 text-sm text-slate-600">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}