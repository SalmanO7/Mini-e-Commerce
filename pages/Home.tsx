"use client";

import React, { useContext } from "react";
import { ProductContext } from "@/contexts/ProductContext";
import Product from "@/components/Product";
import Hero from "@/components/Hero";

interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
}

const Home: React.FC = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("ProductContext is not provided. Wrap the component with ProductContext.Provider.");
  }

  const { products } = context;

  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 ">
        <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-16">
          {products?.length ? (
            products.map((product: Products) => (
              <Product key={product.id} product={product} />
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
