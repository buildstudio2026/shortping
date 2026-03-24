"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";
import type { Product } from "../data/products";

export default function ProductGrid({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Search bar */}
      <div className="relative mb-4">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
        <input
          type="search"
          placeholder="제품 검색"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-gray-800 placeholder-gray-400 outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 transition"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs"
          >
            ✕
          </button>
        )}
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-gray-400 text-sm">
          <p className="text-3xl mb-3">🔎</p>
          <p>"{query}"에 대한 결과가 없어요</p>
        </div>
      )}
    </>
  );
}
