export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url?: string; // Optional
  created_at?: Date;
  updated_at?: Date;
}
