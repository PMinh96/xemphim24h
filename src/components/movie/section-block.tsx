// src/components/section/section-block.tsx
type SectionBlockProps = {
  title: string;
  children: React.ReactNode;
  moreHref?: string;
};

export const SectionBlock = ({
  title,
  children,
  moreHref,
}: SectionBlockProps) => {
  return (
    <section className="">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">
          {title}
        </h2>
        {moreHref && (
          <a
            href={moreHref}
            className="text-sm text-blue-400 hover:text-blue-300 hover:underline"
          >
            Xem thêm →
          </a>
        )}
      </div>

      {children}
    </section>
  );
};
