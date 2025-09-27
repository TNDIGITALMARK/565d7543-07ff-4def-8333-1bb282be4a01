'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Split Hero Section */}
      <div className="grid md:grid-cols-2 min-h-[70vh]">
        {/* STEM Section */}
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-12 text-white">
            <div className="max-w-lg">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Unlock Potential
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Inspire young minds with hands-on STEM learning adventures that make science, technology, engineering, and math come alive.
              </p>
              <Link href="/stem">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 text-lg">
                  Explore STEM Products
                </Button>
              </Link>
            </div>
          </div>

          {/* STEM Product Images Overlay */}
          <div className="absolute bottom-0 right-0 opacity-20">
            <div className="grid grid-cols-3 gap-2 p-4">
              <div className="w-16 h-16 bg-white/30 rounded-lg"></div>
              <div className="w-16 h-16 bg-white/30 rounded-lg"></div>
              <div className="w-16 h-16 bg-white/30 rounded-lg"></div>
              <div className="w-16 h-16 bg-white/30 rounded-lg"></div>
              <div className="w-16 h-16 bg-white/30 rounded-lg"></div>
              <div className="w-16 h-16 bg-white/30 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Gaming Section */}
        <div className="bg-gradient-to-br from-green-400 to-green-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-12 text-white">
            <div className="max-w-lg">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Forge Worlds
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-green-100">
                Craft epic adventures with premium miniatures, detailed terrain, and custom creations for your tabletop RPG campaigns.
              </p>
              <Link href="/gaming">
                <Button className="bg-white text-green-600 hover:bg-green-50 font-semibold py-3 px-8 text-lg">
                  Explore Gaming Products
                </Button>
              </Link>
            </div>
          </div>

          {/* Gaming Product Images Overlay */}
          <div className="absolute bottom-0 right-0 opacity-20">
            <div className="grid grid-cols-2 gap-2 p-4">
              <div className="w-20 h-20 bg-white/30 rounded-lg"></div>
              <div className="w-20 h-20 bg-white/30 rounded-lg"></div>
              <div className="w-20 h-20 bg-white/30 rounded-lg"></div>
              <div className="w-20 h-20 bg-white/30 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal Divider */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden md:block">
        <div className="relative">
          <div className="w-1 h-32 bg-orange-400 transform rotate-12"></div>
          <div className="w-1 h-32 bg-green-400 transform -rotate-12 absolute top-0 left-2"></div>
          <div className="w-1 h-32 bg-purple-400 transform rotate-45 absolute top-0 left-4"></div>
        </div>
      </div>

      {/* Bridge Text */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 text-center">
        <p className="text-white font-semibold text-lg bg-gray-900/70 px-6 py-2 rounded-full backdrop-blur-sm">
          Bridging STEM Learning & Gaming Adventures
        </p>
      </div>
    </section>
  );
}