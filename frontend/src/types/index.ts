export interface Size {
  id: string;
  title: string;
  order: string;
}

export interface Category {
  id: string;
  title: string;
  featured: boolean;
  image: string;
  sizes: Size[];
}

export interface ProductFever {
  id: string;
  title: string;
  images: string[];
  price: string;
  originalPrice: string;
  rating: number;
  category: string;
  averageRating: number | null;
}

export interface Review {
  rating: number;
  shortTitle: string;
  review: string;
}

export interface ReviewExtended extends Review {
  createdAt: Date;
  user: { firstName: string; lastName: string };
}

export interface Product extends Omit<ProductFever, "category"> {
  category: Category;
  description: string;
  hasReviewed: boolean;
  userReview: Review | null;
  reviewCount: {
    total: number;
    [key: number]: number;
  };
}
