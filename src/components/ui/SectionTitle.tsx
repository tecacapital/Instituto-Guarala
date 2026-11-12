interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-guarala-red/10 px-4 py-1 text-sm font-semibold uppercase tracking-wider text-guarala-red">
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-serif text-3xl font-bold text-guarala-dark md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-balance text-base text-slate-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}