"use client";

import React from "react";
import { useProducts } from "@/contexts/ProductContext";
import Product from "@/components/Product";
import Hero from "@/components/Hero";

const Home: React.FC = () => {
  const { products, error } = useProducts();

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-16">
          {products?.length ? (
            products.map((product) => <Product key={product.id} product={product} />)
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
