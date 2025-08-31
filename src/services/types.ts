export type BgVariant = "heroBG_v1" | "heroBG_v2" | "heroBG_v3" | "heroBG_v4";

export type HeroTexts =
  | "Get 10% off your first order"
  | "Save 15% on some books"
  | " Summer Sale! Up to - 40 % discounts"
  | "Last chance to buy our spring bestsellers";

//!footer
export type FooterFormProps = {
  isOpen?: boolean;
  onClick: () => void;
};
