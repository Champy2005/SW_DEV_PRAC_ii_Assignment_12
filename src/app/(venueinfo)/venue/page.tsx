import { Suspense } from "react";
import getVenues from "@/libs/getVenues";
import VenueCatalog from "@/components/VenueCatalog";

export default function VenuePage() {
  const venuesJson = getVenues();

  return (
    <main>
      <h1>Explore venues</h1>
      <Suspense fallback={<p>Loading venues...</p>}>
        <VenueCatalog venuesJson={venuesJson} />
      </Suspense>
    </main>
  );
}
