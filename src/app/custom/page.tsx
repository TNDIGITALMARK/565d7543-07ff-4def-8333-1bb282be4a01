'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import { products, categories } from '@/data/products';
import type { Product } from '@/data/products';

export const dynamic = 'force-dynamic';

export default function CustomProjectsPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(
    products.filter(product => product.category === 'custom')
  );

  const customProducts = products.filter(product => product.category === 'custom');

  const handleFilter = (filters: {
    category: string;
    subcategory: string;
    priceRange: [number, number];
    ageRange: string;
    difficulty: string;
    inStock: boolean;
  }) => {
    let filtered = customProducts;

    if (filters.subcategory && filters.subcategory !== 'All') {
      filtered = filtered.filter(product => product.subcategory === filters.subcategory);
    }

    if (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000) {
      filtered = filtered.filter(product =>
        product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }

    if (filters.ageRange && filters.ageRange !== 'All') {
      filtered = filtered.filter(product => product.ageRange === filters.ageRange);
    }

    if (filters.difficulty && filters.difficulty !== 'All') {
      filtered = filtered.filter(product => product.difficulty === filters.difficulty);
    }

    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    setFilteredProducts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-6">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Custom Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional custom design and development solutions tailored to your specific needs.
            From web design to software development, we bring your unique vision to life.
          </p>

          {/* Stats */}
          <div className="flex justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{customProducts.length}</div>
              <div className="text-sm text-gray-500">Custom Services</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">
                {categories.custom.length}
              </div>
              <div className="text-sm text-gray-500">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-gray-500">Custom Made</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            <ProductFilters
              category="custom"
              subcategories={categories.custom}
              onFilter={handleFilter}
            />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">
                All Custom Projects
              </h2>
              <div className="text-sm text-gray-500">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'project' : 'projects'} found
              </div>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    categoryColor="purple"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
                <p className="text-gray-500">Try adjusting your filters to see more results.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}