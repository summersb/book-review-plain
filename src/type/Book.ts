enum BookType {
  Ebook, Audio, Paper
}

export type Book = {
  title: string;
  genre: string;
  series: string;
  number: number;
  review: string;
  spoilerReview: string;
  dateRead: string;
  bookType: BookType;
  authorId: string;
}