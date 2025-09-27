'use client';

import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FeaturedProducts() {
  const stemProducts = products.filter(p => p.category === 'stem' && (p.bestseller || p.newProduct)).slice(0, 3);
  const gamingProducts = products.filter(p => p.category === 'gaming' && (p.bestseller || p.newProduct)).slice(0, 3);
  const customProducts = products.filter(p => p.category === 'custom' && (p.bestseller || p.newProduct)).slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* STEM Learning Adventures */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">STEM Learning Adventures</h2>
              <p className="text-lg text-gray-600">Hands-on exploration that sparks curiosity and builds knowledge</p>
            </div>
            <Link href="/stem">
              <Button
                className="hidden md:inline-flex bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
              >
                View All STEM
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stemProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="md:hidden mt-6 text-center">
            <Link href="/stem">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
                View All STEM Products
              </Button>
            </Link>
          </div>
        </div>

        {/* RPG Gaming Expeditions */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">RPG Gaming Expeditions</h2>
              <p className="text-lg text-gray-600">Premium miniatures and terrain for legendary adventures</p>
            </div>
            <Link href="/gaming">
              <Button
                className="hidden md:inline-flex bg-green-600 hover:bg-green-700 text-white px-6 py-2"
              >
                View All Gaming
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gamingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="md:hidden mt-6 text-center">
            <Link href="/gaming">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2">
                View All Gaming Products
              </Button>
            </Link>
          </div>
        </div>

        {/* Custom Projects Showcase */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Custom Projects Showcase</h2>
              <p className="text-lg text-gray-600">Bespoke solutions tailored to your unique vision and needs</p>
            </div>
            <Link href="/custom">
              <Button
                className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white px-6 py-2"
              >
                View All Custom
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customProducts.map((product) => (
              <ProductCard key={product.id} product={product} categoryColor="purple" />
            ))}
          </div>

          <div className="md:hidden mt-6 text-center">
            <Link href="/custom">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2">
                View All Custom Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}