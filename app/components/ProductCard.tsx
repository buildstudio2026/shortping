"use client";

import Image from "next/image";
import type { Product } from "../data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <a
      href={product.link}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="flex flex-col rounded-2xl overflow-hidden shadow-md bg-white active:scale-95 transition-transform duration-100"
    >
      <div className="relative w-full aspect-square bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 480px) 50vw, 240px"
          className="object-cover"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/300x300/f3f4f6/9ca3af?text=🛒";
          }}
        />
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            NEW
          </span>
        )}
      </div>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">
          {product.title}
        </p>
        <button className="w-full bg-black text-white text-sm font-bold py-2.5 rounded-xl mt-auto">
          👉 구매하기
        </button>
      </div>
    </a>
  );
}
