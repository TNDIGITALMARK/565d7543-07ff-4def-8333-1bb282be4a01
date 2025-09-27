'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories, ageRanges, difficulties } from '@/data/products';

interface ProductFiltersProps {
  category: 'stem' | 'gaming' | 'custom';
  selectedCategories: string[];
  selectedAgeRanges: string[];
  selectedDifficulties: string[];
  priceRange: [number, number];
  sortBy: string;
  onCategoriesChange: (categories: string[]) => void;
  onAgeRangesChange: (ranges: string[]) => void;
  onDifficultiesChange: (difficulties: string[]) => void;
  onPriceRangeChange: (range: [number, number]) => void;
  onSortChange: (sort: string) => void;
}

export default function ProductFilters({
  category,
  selectedCategories,
  selectedAgeRanges,
  selectedDifficulties,
  priceRange,
  sortBy,
  onCategoriesChange,
  onAgeRangesChange,
  onDifficultiesChange,
  onPriceRangeChange,
  onSortChange,
}: ProductFiltersProps) {
  const categoryList = categories[category];

  const handleCategoryChange = (categoryName: string, checked: boolean) => {
    if (checked) {
      onCategoriesChange([...selectedCategories, categoryName]);
    } else {
      onCategoriesChange(selectedCategories.filter(c => c !== categoryName));
    }
  };

  const handleAgeRangeChange = (range: string, checked: boolean) => {
    if (checked) {
      onAgeRangesChange([...selectedAgeRanges, range]);
    } else {
      onAgeRangesChange(selectedAgeRanges.filter(r => r !== range));
    }
  };

  const handleDifficultyChange = (difficulty: string, checked: boolean) => {
    if (checked) {
      onDifficultiesChange([...selectedDifficulties, difficulty]);
    } else {
      onDifficultiesChange(selectedDifficulties.filter(d => d !== difficulty));
    }
  };

  return (
    <div className="space-y-6">
      {/* Sort */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sort By</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Name A-Z</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categoryList.map((cat) => (
              <div key={cat} className="flex items-center space-x-2">
                <Checkbox
                  id={cat}
                  checked={selectedCategories.includes(cat)}
                  onCheckedChange={(checked) => handleCategoryChange(cat, !!checked)}
                />
                <label
                  htmlFor={cat}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {cat}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Age Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Age Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {ageRanges.map((range) => (
              <div key={range} className="flex items-center space-x-2">
                <Checkbox
                  id={range}
                  checked={selectedAgeRanges.includes(range)}
                  onCheckedChange={(checked) => handleAgeRangeChange(range, !!checked)}
                />
                <label
                  htmlFor={range}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {range}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Difficulty */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Difficulty Level</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {difficulties.map((difficulty) => (
              <div key={difficulty} className="flex items-center space-x-2">
                <Checkbox
                  id={difficulty}
                  checked={selectedDifficulties.includes(difficulty)}
                  onCheckedChange={(checked) => handleDifficultyChange(difficulty, !!checked)}
                />
                <label
                  htmlFor={difficulty}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {difficulty}
                </label>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Price Range</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={priceRange}
              onValueChange={(value) => onPriceRangeChange([value[0], value[1]])}
              max={category === 'custom' ? 1500 : 150}
              min={0}
              step={category === 'custom' ? 25 : 5}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}