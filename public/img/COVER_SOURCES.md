# Banner cover photo sources

Downloaded on 2026-10-01 for the A07 banner. All four source pages identify
these photos as free to use under the [Unsplash License](https://unsplash.com/license).
These are downloaded JPEG assets, 1920 x 1280 pixels, served locally by Next.js.

| Local file | Photographer | Original photo |
| --- | --- | --- |
| cover.jpg | ISKRA Photography | [Banquet hall with chandeliers and tables](https://unsplash.com/photos/a-banquet-hall-with-chandeliers-and-tables-iXTkKQyVqbM) |
| cover2.jpg | Francesco Liotti | [Wedding reception table at Villa Caristo](https://unsplash.com/photos/a-table-set-up-for-a-wedding-reception-Yzqm8ZYsxEY) |
| cover3.jpg | Roger Ce | [Outdoor wedding reception in Acapulco](https://unsplash.com/photos/a-table-set-up-for-a-wedding-reception-Voqts1b2S1Y) |
| cover4.jpg | Andreea Avramescu | [Wedding reception tables in a wooden barn](https://unsplash.com/photos/elegant-wedding-reception-tables-with-floral-centerpieces-y_9BLtb5sig) |

Use these public paths in Banner.tsx:

```ts
const covers = [
  "/img/cover.jpg",
  "/img/cover2.jpg",
  "/img/cover3.jpg",
  "/img/cover4.jpg",
];
```

The `public` directory name is omitted from browser URLs.
