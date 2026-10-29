export type Venue = {
  vid: string;
  venueName: string;
  imgSrc: string;
  description: string;
};

// Assignment: the list data is an array of objects.
export const venues: Venue[] = [
  {
    vid: "001",
    venueName: "The Bloom Pavilion",
    imgSrc: "/img/bloom.jpg",
    description:
      "A light-filled garden pavilion framed by lush greenery, ideal for romantic ceremonies and elegant daytime celebrations.",
  },
  {
    vid: "002",
    venueName: "Spark Space",
    imgSrc: "/img/sparkspace.jpg",
    description:
      "A vibrant contemporary venue with flexible styling, designed for creative gatherings, launches, and modern celebrations.",
  },
  {
    vid: "003",
    venueName: "The Grand Table",
    imgSrc: "/img/grandtable.jpg",
    description:
      "An intimate dining setting where warm lighting and refined details create an inviting backdrop for unforgettable occasions.",
  },
];

// Assignment: detail data is a Map of objects keyed by vid.
// Deriving it from the array keeps names and images consistent.
export const venueDetails = new Map<string, Venue>(
  venues.map((venue) => [venue.vid, venue]),
);
