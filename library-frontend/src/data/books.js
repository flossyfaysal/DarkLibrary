// data/books.js
const generateMockBooks = () => {
  const titles = [
    "The Great",
    "Shadows of",
    "Echoes in",
    "A Journey to",
    "Tales of",
    "Beyond the",
    "Whispers of",
    "The Last",
    "Secrets of",
    "Dreams in",
  ];
  const descriptors = [
    "Gatsby",
    "Realm",
    "Darkness",
    "Light",
    "Time",
    "Horizon",
    "Silence",
    "Empire",
    "Fate",
    "Dawn",
  ];
  const authors = [
    "F. Scott Fitzgerald",
    "George Orwell",
    "Harper Lee",
    "Jane Austen",
    "J.R.R. Tolkien",
    "Mary Shelley",
    "Ernest Hemingway",
    "Virginia Woolf",
    "Mark Twain",
    "Emily Bronte",
  ];

  const mockBooks = [];
  for (let i = 1; i <= 500; i++) {
    const titlePrefix = titles[Math.floor(Math.random() * titles.length)];
    const titleSuffix =
      descriptors[Math.floor(Math.random() * descriptors.length)];
    const author = authors[Math.floor(Math.random() * authors.length)];
    const available = Math.random() > 0.3; // 70% chance of being available
    mockBooks.push({
      id: i,
      title: `${titlePrefix} ${titleSuffix} ${i}`, // Unique title with ID
      author,
      available,
      cover: "https://placehold.co/600x400",
    });
  }
  return mockBooks;
};

export const mockBooks = generateMockBooks();
