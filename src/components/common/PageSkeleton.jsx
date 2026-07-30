function Block({ className = "" }) {
  return <div className={`animate-pulse rounded-lg bg-[#e7e7ea] ${className}`} aria-hidden="true" />;
}

export default function PageSkeleton({ fullScreen = false }) {
  const content = (
    <div className="w-full" role="status" aria-live="polite" aria-label="Loading page">
      <span className="sr-only">Loading page...</span>

      <div className="mb-5 hidden items-center justify-between md:flex">
        <div>
          <Block className="h-6 w-40" />
          <Block className="mt-2 h-2.5 w-24" />
        </div>
        <Block className="h-10 w-28" />
      </div>

      <div className="mb-4 md:hidden">
        <Block className="h-6 w-36" />
        <Block className="mt-2 h-3 w-52" />
      </div>

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="card p-4">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Block className="h-3 w-20" />
                <Block className="mt-3 h-7 w-24" />
                <Block className="mt-3 h-2.5 w-28 max-w-full" />
              </div>
              <Block className="h-10 w-10 rounded-xl" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-4 xl:grid-cols-[1.35fr_0.65fr]">
        <section className="card p-4">
          <Block className="h-4 w-36" />
          <Block className="mt-2 h-2.5 w-52 max-w-full" />
          <Block className="mt-5 h-[220px] w-full sm:h-[270px]" />
        </section>
        <section className="card p-4">
          <Block className="h-4 w-32" />
          <Block className="mt-2 h-2.5 w-44 max-w-full" />
          <div className="mt-5 flex justify-center">
            <Block className="h-40 w-40 rounded-full" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {Array.from({ length: 4 }, (_, index) => <Block key={index} className="h-7" />)}
          </div>
        </section>
      </div>

      <section className="card mt-4 overflow-hidden">
        <div className="border-b border-line p-4">
          <Block className="h-4 w-32" />
          <Block className="mt-2 h-2.5 w-48 max-w-full" />
        </div>
        <div className="space-y-3 p-4">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="grid grid-cols-[1fr_1.5fr_1fr] gap-4">
              <Block className="h-10" />
              <Block className="h-10" />
              <Block className="h-10" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen bg-canvas p-4 sm:p-6 lg:p-8">
        <div className="mx-auto max-w-[1280px]">{content}</div>
      </div>
    );
  }

  return content;
}
