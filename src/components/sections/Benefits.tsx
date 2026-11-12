import { ShieldCheck, Rocket, HeartHandshake, Lightbulb } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';

const items = [
  { icon: ShieldCheck, title: 'Formação Reconhecida', text: 'Certificação valorizada no mercado de trabalho.' },
  { icon: Rocket, title: 'Preparação Prática', text: 'Projetos reais e contacto com tecnologia atual.' },
  { icon: HeartHandshake, title: 'Acompanhamento', text: 'Apoio próximo a cada estudante ao longo do percurso.' },
  { icon: Lightbulb, title: 'Inovação', text: 'Metodologias ativas e atualizadas ao setor.' },
];

export function Benefits() {
  return (
    <section id="beneficios" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Porquê o Instituto Guarala"
          title="Benefícios e oportunidades para os nossos estudantes"
          description="Mais do que formação técnica, oferecemos um percurso completo de desenvolvimento profissional."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 p-6 transition-all hover:-translate-y-1 hover:border-guarala-red/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-guarala-red/10 text-guarala-red">
                <Icon size={24} />
              </div>
              <h3 className="mt-4 font-semibold text-guarala-dark">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}