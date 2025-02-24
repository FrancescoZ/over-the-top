import { placeholderImages } from '../utils/imageUtils';

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  tier: 'gold' | 'silver' | 'bronze';
}

export const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'PawPerfect',
    logo: placeholderImages.sponsors[0],
    description: 'Premium dog food and accessories',
    website: 'https://example.com',
    tier: 'gold',
  },
  {
    id: '2',
    name: 'BarkBuddy',
    logo: placeholderImages.sponsors[1],
    description: 'Training equipment specialist',
    website: 'https://example.com',
    tier: 'gold',
  },
  {
    id: '3',
    name: 'DoggyTech',
    logo: placeholderImages.sponsors[2],
    description: 'Smart collars and tracking devices',
    website: 'https://example.com',
    tier: 'silver',
  },
  {
    id: '4',
    name: 'PetPro',
    logo: placeholderImages.sponsors[3],
    description: 'Professional grooming products',
    website: 'https://example.com',
    tier: 'bronze',
  },
];
