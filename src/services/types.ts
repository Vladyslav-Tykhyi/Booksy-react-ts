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
