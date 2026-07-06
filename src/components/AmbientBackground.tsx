const variants: Record<string, [string, string]> = {
  green: ['#003c33', '#1863dc'],
  navy: ['#071829', '#1863dc'],
  mixed: ['#003c33', '#071829'],
};

export function AmbientBackground({ variant = 'green' }: { variant?: keyof typeof variants }) {
  const c = variants[variant] || variants.green;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10" aria-hidden>
      <div
        className="absolute -top-1/3 -left-1/4 w-[50%] h-[50%] rounded-full opacity-[0.06] blur-[60px]"
        style={{
          backgroundColor: c[0],
          animation: 'ambient-drift 8s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />
      <div
        className="absolute -bottom-1/4 -right-1/4 w-[40%] h-[40%] rounded-full opacity-[0.04] blur-[50px]"
        style={{
          backgroundColor: c[1],
          animation: 'ambient-drift 10s ease-in-out infinite alternate-reverse',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
