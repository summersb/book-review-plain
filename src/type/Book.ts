enum BookType {
  Ebook, Audio, Paper
}

export type Book = {
  title: string;
  genre: string;
  series: string;
  source: string;
  number: number;
  review: string;
  spoilerReview: string;
  dateRead: string;
  bookType: BookType;
  authorId: string;
}