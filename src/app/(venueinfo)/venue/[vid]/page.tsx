import Image from "next/image";
import { notFound } from "next/navigation";
import getVenue from "@/libs/getVenue";

export default async function VenuePage({
  params,
}: {
  params: Promise<{ vid: string }>;
}) {
  const { vid } = await params;
  const venueJson = await getVenue(vid);
  const venue = venueJson.data;

  if (!venue) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7f3eb] p-6 text-stone-900">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 md:flex-row">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl md:w-1/2">
          <Image
            src={venue.picture}
            alt={venue.name}
            fill
            sizes="(max-width: 768px) 90vw, 450px"
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-amber-950">
            {venue.name}
          </h1>
          <p className="mt-4 leading-relaxed">
            {venue.address}, {venue.district}, {venue.province} {venue.postalcode}
          </p>
          <p className="mt-2">Telephone: {venue.tel}</p>
          <p className="mt-2">
            Daily rate: {venue.dailyrate.toLocaleString("en-US")} THB
          </p>
        </div>
      </div>
    </main>
  );
}
