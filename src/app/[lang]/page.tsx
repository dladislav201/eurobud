"use client";

import { useTranslation } from "@/hooks";
import { products } from "@/data";
import { HomeProducts, Installation } from "@/components";

export default function HomePage() {
  const t = useTranslation();

  return (
    <main className="main">
      <div className="home-page-colection grey-bg">
        {products.map((product) => (
          <HomeProducts key={product.id} product={product} />
        ))}
      </div>

      <Installation />
    </main>
  );
}
