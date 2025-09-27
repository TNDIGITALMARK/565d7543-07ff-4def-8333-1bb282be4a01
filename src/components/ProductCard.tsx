'use client';

import { Product } from '@/data/products';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  categoryColor?: 'blue' | 'green' | 'purple';
}

export default function ProductCard({ product, categoryColor }: ProductCardProps) {
  const getBadgeColor = () => {
    if (categoryColor === 'purple' || product.category === 'custom') {
      return 'bg-purple-100 text-purple-800';
    }
    return product.category === 'stem' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800';
  };

  const getPriceColor = () => {
    if (categoryColor === 'purple' || product.category === 'custom') {
      return 'text-purple-600';
    }
    return product.category === 'stem' ? 'text-blue-600' : 'text-green-600';
  };

  const getCategoryLabel = () => {
    if (product.category === 'custom') return 'Custom';
    return product.category === 'stem' ? 'STEM' : 'Gaming';
  };

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-0">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Product Image</span>
          </div>

          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.bestseller && (
              <Badge className="bg-orange-500 text-white text-xs">
                Bestseller
              </Badge>
            )}
            {product.newProduct && (
              <Badge className="bg-purple-500 text-white text-xs">
                New
              </Badge>
            )}
            {!product.inStock && (
              <Badge variant="destructive" className="text-xs">
                Out of Stock
              </Badge>
            )}
          </div>

          {/* Category Badge */}
          <div className="absolute top-2 right-2">
            <Badge className={getBadgeColor()}>
              {getCategoryLabel()}
            </Badge>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <p className="text-sm text-gray-600 mb-1">{product.subcategory}</p>
            <Link href={`/products/${product.id}`}>
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>
          </div>

          {/* Age and Difficulty */}
          <div className="flex items-center gap-2 mb-3 text-sm text-gray-600">
            <span>Ages {product.ageRange}</span>
            <span>•</span>
            <span>{product.difficulty}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {product.rating} ({product.reviewCount})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className={`font-bold text-lg ${getPriceColor()}`}>
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart Button */}
          <Button
            className="w-full flex items-center gap-2"
            disabled={!product.inStock}
            variant={product.inStock ? 'default' : 'secondary'}
          >
            <ShoppingCart className="h-4 w-4" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}