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
}
