'use client';

import { FavItem } from '@/app/config/types';
import { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import ProductCard from '../../components/ProductCard';

export default function FavItems() {
  const [favorites, setFavorites] = useState<FavItem[]>([]);

  const [loadingFavorites, setLoadingFavorites] = useState(true);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('Favorites') || '[]');
    setFavorites(storedFavorites);
    setLoadingFavorites(false);
  }, []);

  return (
    <div className="w-full">
      <h1 className="font-semibold text-2xl mb-4">Mis Favoritos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full h-fit">
        {favorites.map((item: FavItem) => (
          <ProductCard
            key={item.code}
            shortTitle={item.shortTitle}
            description={item.description}
            category={item.category}
            price={item.price}
            code={item.code}
            setFavorites={setFavorites}
          />
        ))}
      </div>
      {
            loadingFavorites ? (
              <div className="w-full flex flex-col justify-center items-center h-96">
                <AiOutlineLoading3Quarters className="w-6 h-6 text-primary animate-spin" />
              </div>
            )
              : favorites.length === 0 && (
                <div className="w-full flex flex-col justify-center items-center h-96">
                  <h2 className="text-xl font-semibold w-full text-center mb-2">Aun no hay productos!</h2>
                  <h3 className="text-xs md:text-sm w-full text-center mb-6">Aqui se mostraran los productos que agregues a lista de favoritos</h3>
                </div>
              )

        }
    </div>
  );
}
