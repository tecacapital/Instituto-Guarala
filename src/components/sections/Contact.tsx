import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

const contacts = [
  { icon: MapPin, label: 'Localização', value: 'Angola' },
  { icon: Phone, label: 'Telefone', value: '+244 900 000 000' },
  { icon: Mail, label: 'Email', value: 'geral@institutoguarala.ao' },
  { icon: Clock, label: 'Horário', value: 'Seg–Sex · 08h00–17h00' },
];

export function Contact() {
  return (
    <section id="contactos" className="bg-guarala-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Contactos"
          title="Estamos prontos para te receber"
          description="Visita-nos ou entra em contacto para saberes mais sobre a oferta formativa."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {contacts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-guarala-red/10 text-guarala-red">
                  <Icon size={22} />
                </div>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {label}
                </p>
                <p className="mt-1 font-medium text-guarala-dark">{value}</p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-2xl bg-guarala-dark p-8 text-white">
            <h3 className="font-serif text-2xl font-bold">Pronto para dar o próximo passo?</h3>
            <p className="mt-3 text-slate-300">
              Fala connosco e descobre qual o curso mais indicado para o teu perfil.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li>• Atendimento personalizado</li>
              <li>• Informação detalhada sobre cada curso</li>
              <li>• Apoio no processo de inscrição</li>
            </ul>
            <a href="mailto:geral@institutoguarala.ao" className="mt-8 inline-block">
              <Button variant="secondary" size="lg">
                Enviar mensagem
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}