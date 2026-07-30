function Line({ className = "" }) {
  return <div className={`rounded-full bg-[#e8e8eb] ${className}`} />;
}

function SkeletonCard({ className = "", children }) {
  return (
    <div
      className={`min-w-0 overflow-hidden rounded-[12px] border border-[#e9e9ec] bg-white p-4 ${className}`}
    >
      {children}
    </div>
  );
}

function MetricSkeleton() {
  return (
    <SkeletonCard className="h-[132px] p-5">
      <div className="flex justify-between">
        <div className="flex-1">
          <Line className="h-3 w-[42%]" />
          <Line className="mt-4 h-7 w-[58%]" />
          <Line className="mt-4 h-2.5 w-[72%]" />
        </div>
        <div className="h-10 w-10 rounded-lg bg-[#ddd7ff]" />
      </div>
    </SkeletonCard>
  );
}

function ChartSkeleton() {
  return (
    <SkeletonCard className="h-[260px]">
      <div className="flex items-center justify-between">
        <Line className="h-4 w-28" />
        <div className="h-7 w-16 rounded-md bg-[#ededee]" />
      </div>
      <Line className="mt-5 h-6 w-24" />
      <div className="mt-5 flex h-[150px] items-end gap-3">
        {[45, 72, 55, 88, 64, 96, 76, 84].map((height, index) => (
          <div
            key={index}
            className="flex-1 rounded-t-md bg-[#ddd7ff]"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </SkeletonCard>
  );
}

function ListSkeleton({ rows = 5, height = "h-[285px]" }) {
  return (
    <SkeletonCard className={height}>
      <div className="flex items-center justify-between">
        <Line className="h-4 w-32" />
        <div className="h-7 w-7 rounded-md bg-[#ededee]" />
      </div>
      <div className="mt-5 space-y-4">
        {Array.from({ length: rows }, (_, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="h-8 w-8 shrink-0 rounded-lg bg-[#e6e1ff]" />
            <div className="min-w-0 flex-1">
              <Line className="h-2.5 w-[58%]" />
              <Line className="mt-2 h-2 w-[84%]" />
            </div>
          </div>
        ))}
      </div>
    </SkeletonCard>
  );
}

function TrackingSkeleton() {
  return (
    <SkeletonCard className="h-[285px] p-0">
      <div className="relative h-full bg-[#eeeeef] p-3">
        <div className="h-9 rounded-lg bg-white" />
        <div className="absolute bottom-0 left-0 right-0 h-[92px] border-t border-[#e1e1e4] bg-white p-3">
          <Line className="h-3 w-28" />
          <Line className="mt-4 h-1 w-full bg-[#ddd7ff]" />
          <div className="mt-4 flex justify-between">
            <Line className="h-2 w-28" />
            <Line className="h-2 w-28" />
          </div>
        </div>
      </div>
    </SkeletonCard>
  );
}

function TableSkeleton() {
  return (
    <SkeletonCard className="h-[265px]">
      <div className="flex items-center justify-between">
        <Line className="h-4 w-32" />
        <div className="h-7 w-7 rounded-md bg-[#ededee]" />
      </div>
      <div className="mt-4 h-8 rounded-md bg-[#e8e3ff]" />
      <div className="mt-1 divide-y divide-[#eeeeef]">
        {Array.from({ length: 4 }, (_, index) => (
          <div key={index} className="grid h-10 grid-cols-5 items-center gap-4">
            <Line className="h-2 w-full" />
            <Line className="h-2 w-full" />
            <Line className="h-2 w-full" />
            <Line className="h-2 w-full" />
            <Line className="h-4 w-12" />
          </div>
        ))}
      </div>
    </SkeletonCard>
  );
}

export default function DashboardSkeleton() {
  return (
    <div className="animate-pulse" aria-label="Loading dashboard">
      <header className="mb-4 hidden h-10 items-center justify-between md:flex">
        <div>
          <Line className="h-2.5 w-20" />
          <Line className="mt-2 h-5 w-36" />
        </div>
        <div className="flex gap-3">
          <div className="h-10 w-[260px] rounded-lg bg-white xl:w-[330px]" />
          <div className="h-10 w-36 rounded-lg bg-[#dedee1]" />
        </div>
      </header>

      <div className="mb-4 flex gap-2 md:hidden">
        <div className="h-10 flex-1 rounded-lg bg-white" />
        <div className="h-10 w-10 rounded-lg bg-[#dedee1]" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }, (_, index) => (
          <MetricSkeleton key={index} />
        ))}

        <div className="sm:col-span-2 xl:col-span-1 xl:row-span-2">
          <ListSkeleton rows={4} height="h-full min-h-[320px]" />
        </div>
        <div className="sm:col-span-2 xl:col-span-1">
          <ChartSkeleton />
        </div>
        <div className="sm:col-span-2 xl:col-span-2">
          <ChartSkeleton />
        </div>
        <div className="sm:col-span-2 xl:col-span-1">
          <ListSkeleton rows={5} />
        </div>
        <div className="sm:col-span-2 xl:col-span-2">
          <TrackingSkeleton />
        </div>
        <div className="sm:col-span-2 xl:col-span-1">
          <ListSkeleton rows={4} />
        </div>
        <div className="sm:col-span-2 xl:col-span-3">
          <TableSkeleton />
        </div>
        <div className="sm:col-span-2 xl:col-span-1">
          <ListSkeleton rows={4} height="h-[265px]" />
        </div>
      </div>
    </div>
  );
}
