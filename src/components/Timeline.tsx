interface TimelineItem {
  year: string;
  title: string;
  desc: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <>
      <div className="mt-16 hidden md:block">
        <ol className="flex">
          {items.map((item, i) => (
            <li key={item.year} className="relative flex-1">
              <div className="flex items-center">
                <div className="relative z-10 h-3 w-3 shrink-0 rounded-full bg-primary" />
                {i < items.length - 1 && (
                  <div className="h-px w-full bg-hairline/60" aria-hidden />
                )}
              </div>
              <div className="mt-4 pr-6">
                <span className="text-mono-label text-orange">{item.year}</span>
                <h3 className="mt-1.5 text-sm font-semibold text-primary leading-snug">{item.title}</h3>
                <p className="mt-1.5 text-xs text-body-muted leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="md:hidden mt-12 -mx-6 px-6">
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
          {items.map((item) => (
            <div key={item.year} className="w-64 shrink-0 snap-center">
              <div className="rounded-2xl border border-hairline/40 bg-white p-5">
                <span className="text-mono-label text-orange">{item.year}</span>
                <h3 className="mt-1.5 text-base font-semibold text-primary leading-snug">{item.title}</h3>
                <p className="mt-2 text-sm text-body-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
