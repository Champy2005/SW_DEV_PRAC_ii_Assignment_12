import Link from "next/link";
import BookingList from "@/components/BookingList";

export default function MyBookingPage() {
  return (
    <main className="mx-auto min-h-[calc(100vh-5rem)] max-w-5xl px-4 py-10 sm:px-8">
      <h1 className="text-3xl font-bold text-amber-950">My Booking</h1>
      <BookingList />
      <Link href="/booking" className="mt-8 inline-block font-semibold text-amber-900 underline">Book a venue</Link>
    </main>
  );
}
