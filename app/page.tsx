import Image from "next/image";
import ProductGrid from "./components/ProductGrid";
import { products } from "./data/products";

export default function Home() {
  const sorted = [...products].sort((a, b) =>
    a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-10">
        <div className="max-w-[480px] mx-auto px-4 py-3 flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 ring-2 ring-pink-400">
            <Image
              src="/logo.png"
              alt="숏핑 로고"
              fill
              className="object-cover object-center scale-110"
              priority
            />
          </div>
          <div>
            <h1 className="text-xl font-black text-gray-900 tracking-tight leading-none">숏핑</h1>
            <p className="text-xs text-gray-500 mt-0.5">쇼츠에서 본 꿀템 모음</p>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-[480px] mx-auto px-4 py-5">
        <h2 className="text-base font-bold text-gray-800 mb-4">
          🔥 모든 제품 한눈에 보기
        </h2>
        <ProductGrid products={sorted} />
      </main>

      {/* Footer */}
      <footer className="max-w-[480px] mx-auto px-4 py-8 text-center">
        <p className="text-[11px] text-gray-400 leading-relaxed">
          이 페이지의 링크는 쿠팡 파트너스 활동의 일환으로,<br />
          일정액의 수수료를 제공받을 수 있습니다.
        </p>
      </footer>
    </div>
  );
}
