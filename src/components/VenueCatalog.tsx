import Card from "@/components/Card";

export default async function VenueCatalog({
  venuesJson,
}: {
  venuesJson: Promise<VenueJson>;
}) {
  const venues = await venuesJson;

  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-3">
      {venues.data.map((venue: VenueItem) => (
        <Card
          key={venue.id}
          href={`/venue/${venue.id}`}
          venueName={venue.name}
          imgSrc={venue.picture}
          description={`${venue.district}, ${venue.province}`}
        />
      ))}
    </div>
  );
}
