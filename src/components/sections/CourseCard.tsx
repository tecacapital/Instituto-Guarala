import { ArrowRight } from 'lucide-react';
import type { Course } from '@/types';
import { images, type ImageKey } from '@/data/images';

interface CourseCardProps {
  course: Course;
  onOpen: (course: Course) => void;
}

export function CourseCard({ course, onOpen }: CourseCardProps) {
  const imageKey = course.image as ImageKey;
  const imageSrc = images[imageKey] ?? images.whatsapp1;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageSrc}
          alt={`Imagem do curso ${course.name}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, ${course.accentColor}cc, transparent 60%)` }}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-xl font-bold text-guarala-dark">
          {course.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {course.shortDescription}
        </p>
        <button
          onClick={() => onOpen(course)}
          className="mt-5 inline-flex items-center gap-2 self-start rounded-lg px-3 py-2 text-sm font-semibold transition-colors"
          style={{ color: course.accentColor }}
        >
          Saber mais
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </button>
      </div>
    </article>
  );
}