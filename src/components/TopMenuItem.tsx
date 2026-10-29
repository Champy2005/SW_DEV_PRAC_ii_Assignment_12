import Link from "next/link";

export default function TopMenuItem({
  label,
  subLabel,
  pageRef,
}: {
  label: string;
  subLabel?: string;
  pageRef: string;
}) {
  return (
    <Link
      href={pageRef}
      scroll
      className="group relative flex h-14 min-w-0 flex-col items-center justify-center px-2 sm:px-6 text-center transition-colors duration-200 before:absolute before:top-1/2 before:right-[-4px] before:z-10 before:size-2 before:-translate-y-1/2 before:rotate-45 before:rounded-[1px] before:border before:border-amber-900/45 before:bg-[#fbf8f1] before:shadow-[0_0_0_3px_rgba(251,248,241,0.9)] before:content-[''] after:absolute after:top-1/2 after:right-0 after:h-11 after:w-[2px] after:-translate-y-1/2 after:rounded-full after:bg-gradient-to-b after:from-transparent after:via-amber-900/55 after:to-transparent after:content-[''] hover:text-amber-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-800 sm:min-w-32"
    >
      {subLabel && (
        <span className="text-[0.65rem] font-medium tracking-[0.2em] text-stone-500 uppercase transition-colors group-hover:text-amber-800">
          {subLabel}
        </span>
      )}
      <span className="mt-0.5 text-sm font-bold leading-none text-amber-950 sm:text-xl">
        {label}
      </span>
    </Link>
  );
}
