'use client';

import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import ProductFilters from '@/components/ProductFilters';
import { products } from '@/data/products';

export default function STEMPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedAgeRanges, setSelectedAgeRanges] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const [sortBy, setSortBy] = useState<string>('name');

  const stemProducts = products.filter(p => p.category === 'stem');

  const filteredProducts = useMemo(() => {
    const filtered = stemProducts.filter(product => {
      const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.subcategory);
      const ageMatch = selectedAgeRanges.length === 0 || selectedAgeRanges.some(range =>
        product.ageRange.includes(range.split('-')[0]) || product.ageRange === range
      );
      const difficultyMatch = selectedDifficulties.length === 0 || selectedDifficulties.includes(product.difficulty);
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

      return categoryMatch && ageMatch && difficultyMatch && priceMatch;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [stemProducts, selectedCategories, selectedAgeRanges, selectedDifficulties, priceRange, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">STEM Learning Adventures</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-2xl">
              Discover hands-on science, technology, engineering, and math products that inspire young minds to explore, create, and learn.
            </p>
          </div>
        </div>

        {/* Product Catalog */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="lg:w-1/4">
              <ProductFilters
                category="stem"
                selectedCategories={selectedCategories}
                selectedAgeRanges={selectedAgeRanges}
                selectedDifficulties={selectedDifficulties}
                priceRange={priceRange}
                sortBy={sortBy}
                onCategoriesChange={setSelectedCategories}
                onAgeRangesChange={setSelectedAgeRanges}
                onDifficultiesChange={setSelectedDifficulties}
                onPriceRangeChange={setPriceRange}
                onSortChange={setSortBy}
              />
            </aside>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredProducts.length} Products Found
                </h2>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products match your current filters.</p>
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedAgeRanges([]);
                      setSelectedDifficulties([]);
                      setPriceRange([0, 100]);
                    }}
                    className="mt-4 text-blue-600 hover:text-blue-800"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}