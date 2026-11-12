import { useState } from 'react';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CourseCard } from '@/components/sections/CourseCard';
import { CourseModal } from '@/components/sections/CourseModal';
import { courses } from '@/data/courses';
import type { Course } from '@/types';

export function Courses() {
  const [selected, setSelected] = useState<Course | null>(null);

  return (
    <section id="cursos" className="bg-guarala-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionTitle
          eyebrow="Oferta Formativa"
          title="Cursos que preparam para o futuro"
          description="Quatro áreas de formação técnica, cada uma desenhada para responder às necessidades reais do mercado."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} onOpen={setSelected} />
          ))}
        </div>
      </div>
      <CourseModal course={selected} onClose={() => setSelected(null)} />
    </section>
  );
}