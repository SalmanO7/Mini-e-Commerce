import Image from "next/image";
import Link from "next/link";
import React from "react";



async function getProduct({ id }: { id: string }) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }
  const data = await res.json();
  return data
}

const ProductDetail = async ({ params }: any) => {
  const product = await getProduct({ id: params.id });


  return (

    <>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:px-8 lg:px-10 h-[100vh]">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={200}
          className="w-1/3 md:w-1/5"
        />
        <div className="px-7 md:w-1/2 flex flex-col justify-center items-start">
          <h2 className="text-xl font-semibold">{product.title}</h2>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-[11px] sm:text-sm md:text-base pt-4 pb-2">
            {product.description.length > 200
              ? `${product.description.slice(0, 200)}...`
              : product.description}
          </p>
          <div className="w-full flex justify-center md:justify-start items-center gap-3">
            <p className="text-base md:text-xl font-semibold">$ {product.price}</p>
            <Link
              className="py-1 px-5 border bg-black text-white rounded-lg"
              href="/"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

