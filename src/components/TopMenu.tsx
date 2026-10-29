import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

export default async function TopMenu() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-20 w-full items-center justify-end border-b border-amber-900/15 bg-[#fbf8f1]/95 px-[clamp(0.75rem,2.5vw,2rem)] text-stone-800 shadow-[0_6px_24px_rgba(69,45,21,0.10)] backdrop-blur-md">
      <div className="absolute left-0 flex h-full items-center">
        {session ? (
          <Link
            href="/api/auth/signout?callbackUrl=%2F"
            className="flex h-full items-center px-4 text-sm text-cyan-600 transition-colors hover:text-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
            aria-label="Sign out"
          >
            <div>Sign-Out</div>
          </Link>
        ) : (
          <Link
            href="/api/auth/signin?callbackUrl=%2F"
            className="flex h-full items-center px-4 text-sm text-cyan-600 transition-colors hover:text-cyan-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-600"
            aria-label="Sign in"
          >
            <div className="flex items-center h-full text-cyan-600 text-sm">
              Sign-In
            </div>
          </Link>
        )}
        <TopMenuItem label="My Booking" pageRef="/mybooking" />
      </div>
      <div className="flex h-full items-center">
        <TopMenuItem label="Booking" subLabel="Menu Item" pageRef="/booking" />
        <div className="flex h-12 items-center pl-[clamp(0.75rem,1.5vw,1.25rem)]">
          <Image
            src={"/img/logo.png"}
            alt="Venue Explorer logo"
            width={56}
            height={56}
            sizes="56px"
            priority
            className="shrink-0 rounded-xl shadow-sm ring-1 ring-amber-900/15"
          />
        </div>
      </div>
    </nav>
  );
}
