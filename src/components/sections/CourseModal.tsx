import { Check, Briefcase, Sparkles } from 'lucide-react';
import type { Course } from '@/types';
import { Modal } from '@/components/ui/Modal';
import { images, type ImageKey } from '@/data/images';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export function CourseModal({ course, onClose }: CourseModalProps) {
  if (!course) return null;

  const imageKey = course.image as ImageKey;
  const imageSrc = images[imageKey] ?? images.whatsapp1;

  return (
    <Modal isOpen={!!course} onClose={onClose} title={course.name}>
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={`Imagem do curso ${course.name}`}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, ${course.accentColor}dd, transparent 70%)` }}
        />
        <div className="absolute bottom-4 left-6 right-6">
          <h2 className="font-serif text-2xl font-bold text-white md:text-3xl">
            {course.name}
          </h2>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <p className="text-slate-700">{course.fullDescription}</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 font-semibold text-guarala-dark">
              <Sparkles size={18} style={{ color: course.accentColor }} />
              Competências
            </h3>
            <ul className="mt-3 space-y-2">
              {course.skills.map((skill) => (
                <li key={skill} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="mt-0.5 shrink-0" style={{ color: course.accentColor }} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-semibold text-guarala-dark">
              <Briefcase size={18} style={{ color: course.accentColor }} />
              Saídas Profissionais
            </h3>
            <ul className="mt-3 space-y-2">
              {course.careers.map((career) => (
                <li key={career} className="flex items-start gap-2 text-sm text-slate-600">
                  <Check size={16} className="mt-0.5 shrink-0" style={{ color: course.accentColor }} />
                  {career}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl bg-slate-50 p-5">
          <h3 className="font-semibold text-guarala-dark">Benefícios do curso</h3>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {course.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-slate-600">
                <Check size={16} className="mt-0.5 shrink-0 text-guarala-red" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
}