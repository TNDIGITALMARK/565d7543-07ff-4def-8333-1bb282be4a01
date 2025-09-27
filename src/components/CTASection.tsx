'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Join the Adventure - Shop Now!
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Whether you're unlocking potential through STEM learning or forging epic worlds in tabletop gaming,
          Kilted Creative has everything you need to start your next adventure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/stem">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Shop STEM
            </Button>
          </Link>
          <Link href="/gaming">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              Shop Gaming
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">S</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Educational Excellence</h3>
            <p className="text-gray-400 text-sm">
              Carefully curated STEM products that make learning engaging and effective for young minds.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">G</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Gaming Craftsmanship</h3>
            <p className="text-gray-400 text-sm">
              Premium miniatures and terrain pieces crafted for immersive tabletop RPG experiences.
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">C</span>
            </div>
            <h3 className="font-semibold text-white mb-2">Creative Community</h3>
            <p className="text-gray-400 text-sm">
              Join a community that celebrates both scientific discovery and imaginative storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}