export interface Category {
  id: string;
  title: string;
  featured: boolean;
  image: string;
}

export interface ProductFever {
  id: string;
  title: string;
  images: string[];
  price: string;
  originalPrice: string;
  rating: number;
  category: string;
}

export interface Product extends Omit<ProductFever, "category"> {
  category: Category;
  description: string;
}
