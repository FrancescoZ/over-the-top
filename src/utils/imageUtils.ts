export const generatePlaceholderImage = (
  width: number,
  height: number,
  seed: number = Math.floor(Math.random() * 1000)
) => {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
};

// Predefined image placeholders for our site
export const placeholderImages = {
  hero: generatePlaceholderImage(1920, 600, 123),
  adoption: {
    before: generatePlaceholderImage(400, 300, 124),
    after: generatePlaceholderImage(400, 300, 125),
  },
  sponsors: [
    generatePlaceholderImage(200, 100, 126),
    generatePlaceholderImage(200, 100, 127),
    generatePlaceholderImage(200, 100, 128),
    generatePlaceholderImage(200, 100, 129),
  ],
  events: generatePlaceholderImage(400, 300, 130),
};

// For debugging - log the URLs to make sure they're generating correctly
console.log("Placeholder Images:", placeholderImages);
