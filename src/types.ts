export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  category: 'Threading' | 'Waxing' | 'Tinting' | 'Other';
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  platform: 'Google' | 'Instagram';
}

export interface GalleryImage {
  id: string;
  url: string;
  caption: string;
}
