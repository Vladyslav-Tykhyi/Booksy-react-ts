import axios from "axios";

export type BgVariant = "heroBG_v1" | "heroBG_v2" | "heroBG_v3" | "heroBG_v4";

export type HeroTexts =
  | "Get 10% off your first order"
  | "Save 15% on some books"
  | " Summer Sale! Up to - 40 % discounts"
  | "Last chance to buy our spring bestsellers";

export interface EmailData {
  name: string;
  email: string;
  message?: string;
}

export interface FooterFormProps {
  userEmail: React.Dispatch<React.SetStateAction<EmailData>>;
  onClick: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClick: () => void;
  userEmailField: { name: string; email: string; message?: string };
  setUserEmailField: React.Dispatch<
    React.SetStateAction<{ name: string; email: string; message?: string }>
  >;
}

export interface EventItem {
  id: number;
  img1x: string;
  img2x: string;
  alt: string;
  heading: string;
  accessibility: string;
  text: string;
}

export interface EventsListProps {
  handleRegister: () => void;
}

export interface ModalBTNProps {
  isOpen?: boolean;
  onClick: () => void;
}

export interface Book {
  _id: string;
  title: string;
  author: string;
  price: number;
  book_image: string;
  description: string;
}

export interface BookCategoryProps {
  list_name: string;
  books: Book[];
}

axios.defaults.baseURL = "https://books-backend.p.goit.global";

export const fetchTopBooks = async () => {
  const response = await axios.get("/books/top-books");
  return response.data as BookCategoryProps[];
};

export interface BooksQueryProps {
  data: BookCategoryProps[] | undefined;
  error: unknown;
  isLoading: boolean;
  isError: boolean;
  onClick: (book: Book) => void;
  setVisibleCount: React.Dispatch<React.SetStateAction<number>>;
  booksQuantity: number;
  visibleBooks: number;
}

export interface BookModalProps {
  isOpen?: boolean;
  onClick: () => void;
  book: Book;
}
