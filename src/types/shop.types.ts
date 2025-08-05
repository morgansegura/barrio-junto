export type TShopItem = {
  id: number | string;
  media: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title?: string;
  description?: string;
  inStock?: boolean;
  detail?: {
    color?: string;
    sizes?: ["sm", "md", "lg", "xl"];
    price?: string;
    stock?: string;
    style?: string;
    brand?: string;
  };
};
