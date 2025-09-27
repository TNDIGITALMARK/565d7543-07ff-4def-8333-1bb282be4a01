export interface Product {
  id: string;
  name: string;
  category: 'stem' | 'gaming';
  subcategory: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  images: string[];
  description: string;
  features: string[];
  ageRange: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  educationalBenefits?: string[];
  compatibility?: string;
  inStock: boolean;
  bestseller?: boolean;
  newProduct?: boolean;
}

export const products: Product[] = [
  // STEM Products
  {
    id: 'stem-1',
    name: 'Space Explorer Kit',
    category: 'stem',
    subcategory: 'Science Kits',
    price: 49.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviewCount: 127,
    image: '/api/placeholder/300/300',
    images: ['/api/placeholder/300/300', '/api/placeholder/300/300', '/api/placeholder/300/300'],
    description: 'Explore the mysteries of space with this comprehensive kit including a telescope, star charts, and interactive experiments.',
    features: ['30x telescope', 'LED star projector', 'Planet models', 'Activity guide'],
    ageRange: '8-14',
    difficulty: 'Beginner',
    educationalBenefits: ['Astronomy basics', 'Scientific observation', 'Critical thinking'],
    inStock: true,
    bestseller: true
  },
  {
    id: 'stem-2',
    name: 'Circuit Builder Pro',
    category: 'stem',
    subcategory: 'Electronics',
    price: 34.99,
    rating: 4.6,
    reviewCount: 89,
    image: '/api/placeholder/300/300',
    images: ['/api/placeholder/300/300', '/api/placeholder/300/300'],
    description: 'Build working circuits with snap-together components. Perfect introduction to electronics and programming.',
    features: ['50+ components', 'LED displays', 'Sound modules', 'Project booklet'],
    ageRange: '10-16',
    difficulty: 'Intermediate',
    educationalBenefits: ['Basic electronics', 'Problem solving', 'Engineering concepts'],
    inStock: true
  },
  {
    id: 'stem-3',
    name: 'Coding Robot Adventures',
    category: 'stem',
    subcategory: 'Robotics',
    price: 79.99,
    rating: 4.9,
    reviewCount: 203,
    image: '/api/placeholder/300/300',
    images: ['/api/placeholder/300/300', '/api/placeholder/300/300', '/api/placeholder/300/300'],
    description: 'Programmable robot that teaches coding fundamentals through interactive challenges and games.',
    features: ['Programmable robot', 'Visual coding app', 'Obstacle sensors', 'Challenge cards'],
    ageRange: '7-12',
    difficulty: 'Beginner',
    educationalBenefits: ['Programming logic', 'Sequential thinking', 'Debugging skills'],
    compatibility: 'iOS/Android app required',
    inStock: true,
    newProduct: true
  },
  {
    id: 'stem-4',
    name: 'Chemistry Lab Starter',
    category: 'stem',
    subcategory: 'Science Kits',
    price: 42.99,
    rating: 4.5,
    reviewCount: 67,
    image: '/api/placeholder/300/300',
    images: ['/api/placeholder/300/300', '/api/placeholder/300/300'],
    description: 'Safe chemistry experiments that demonstrate scientific principles with colorful reactions.',
    features: ['Safety equipment', '20 experiments', 'Chemical indicators', 'Lab notebook'],
    ageRange: '9-15',
    difficulty: 'Intermediate',
    educationalBenefits: ['Chemical reactions', 'Scientific method', 'Lab safety'],
    inStock: true
  },
  {
    id: 'stem-5',
    name: 'Geometry Explorer',
    category: 'stem',
    subcategory: 'Math',
    price: 24.99,
    rating: 4.4,
    reviewCount: 45,
    image: '/api/placeholder/300/300',
    images: ['/api/placeholder/300/300'],
    description: 'Hands-on geometry learning with 3D shapes, measuring tools, and interactive activities.',
    features: ['3D shape models', 'Measuring tools', 'Activity cards', 'Progress tracker'],
    ageRange: '6-12',
    difficulty: 'Beginner',
    educationalBenefits: ['Spatial reasoning', 'Mathematical concepts', 'Problem solving'],
    inStock: true
  },
  {
    id: 'stem-6',
    name: 'Weather Station Kit',
    category: 'stem',
    subcategory: 'Science Kits',
    price: 38.99,
    rating: 4.7,
    reviewCount: 92,
    image: '/api/placeholder/300/300',
    images: ['/api/placeholder/300/300', '/api/placeholder/300/300'],
    description: 'Build your own weather monitoring station and learn about meteorology.',
    features: ['Thermometer', 'Rain gauge', 'Wind vane', 'Data logging sheets'],
    ageRange: '8-14',
    difficulty: 'Intermediate',
    educationalBenefits: ['Weather patterns', 'Data collection', 'Scientific observation'],
    inStock: true
  },

  // Gaming Products
  {
    id: 'game-1',
    name: 'Dragon\'s Lair Terrain Set',
    category: 'gaming',
    subcategory: 'Terrain',
    price: 89.99,
    originalPrice: 109.99,
    rating: 4.9,
    reviewCount: 156,
    image: '/api/placeholder/300/300',
    images: ['/api/placeholder/300/300', '/api/placeholder/300/300', '/api/placeholder/300/300'],
    description: 'Handcrafted modular terrain pieces perfect for dungeon adventures and dragon encounters.',
    features: ['15 terrain pieces', 'Modular design', 'Hand-painted details', 'Compatible with 28mm'],
    ageRange: '12+',
    difficulty: 'Advanced',
    compatibility: 'D&D 5e, Pathfinder, most TTRPGs',
    inStock: true,
    bestseller: true
  },
  {
    id: 'game-2',
    name: 'Heroes of Valor Miniature Set',
    category: 'gaming',
    subcategory: 'Miniatures',
    price: 34.99,
    rating: 4.8,
    reviewCount: 234,
    image: '/api/placeholder/300/300',
    images: ['/api/placeholder/300/300', '/api/placeholder/300/300'],
    description: 'Detailed fantasy heroes perfect for any tabletop RPG campaign.',
    features: ['6 unique heroes', 'High detail resin', 'Unpainted', '28mm scale'],
    ageRange: '14+',
    difficulty: 'Intermediate',
    compatibility: 'Universal TTRPG scale',
    inStock: true
  },
  {
    id: 'game-3',
    name: 'Mystic Forest Battle Map',
    category: 'gaming',
    subcategory: 'Maps & Accessories',
    price: 19.99,
    rating: 4.6,
    reviewCount: 78,
    image: '/api/placeholder/300/300',
    images: ['/api/placeholder/300/300'],
    description: 'Double-sided vinyl battle map featuring enchanted forest environments.',
    features: ['24"x36" vinyl map', 'Wet-erase compatible', 'Double-sided', 'Folding design'],
    ageRange: '12+',
    difficulty: 'Beginner',
    compatibility: 'All grid-based TTRPGs',
    inStock: true
  },
  {
    id: 'game-4',
    name: 'Orc Warband Collection',
    category: 'gaming',
    subcategory: 'Miniatures',
    price: 54.99,
    rating: 4.7,
    reviewCount: 143,
    image: '/api/placeholder/300/300',
    images: ['/api/placeholder/300/300', '/api/placeholder/300/300', '/api/placeholder/300/300'],
    description: 'Complete orc army with warriors, shamans, and chieftain for epic battles.',
    features: ['12 miniatures', 'Various poses', 'Detailed weapons', 'Leader variants'],
    ageRange: '14+',
    difficulty: 'Advanced',
    compatibility: 'Fantasy wargames',
    inStock: true,
    newProduct: true
  },
  {
    id: 'game-5',
    name: 'Tavern Interior Set',
    category: 'gaming',
    subcategory: 'Terrain',
    price: 67.99,
    rating: 4.5,
    reviewCount: 89,
    image: '/api/placeholder/300/300',
    images: ['/api/placeholder/300/300', '/api/placeholder/300/300'],
    description: 'Complete tavern interior with tables, chairs, bar, and atmospheric details.',
    features: ['Tavern furniture', 'Modular pieces', 'Painted details', 'Story hooks included'],
    ageRange: '12+',
    difficulty: 'Intermediate',
    compatibility: 'Any fantasy TTRPG',
    inStock: false
  },
  {
    id: 'game-6',
    name: 'Custom Character Commission',
    category: 'gaming',
    subcategory: 'Custom Work',
    price: 129.99,
    rating: 5.0,
    reviewCount: 67,
    image: '/api/placeholder/300/300',
    images: ['/api/placeholder/300/300', '/api/placeholder/300/300'],
    description: 'Fully customized miniature based on your character description and artwork.',
    features: ['100% custom design', 'High detail sculpt', 'Professional painting', '4-week delivery'],
    ageRange: '14+',
    difficulty: 'Advanced',
    compatibility: 'Any TTRPG system',
    inStock: true,
    bestseller: true
  }
];

export const categories = {
  stem: [
    'Science Kits',
    'Robotics',
    'Electronics',
    'Math',
    'Engineering'
  ],
  gaming: [
    'Miniatures',
    'Terrain',
    'Maps & Accessories',
    'Custom Work',
    'Paint & Tools'
  ]
};

export const ageRanges = [
  '6-8',
  '8-12',
  '10-14',
  '12+',
  '14+',
  'All Ages'
];

export const difficulties = [
  'Beginner',
  'Intermediate',
  'Advanced'
];