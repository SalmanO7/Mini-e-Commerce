import Products from '@/components/Products';
import Home from '@/pages/Home';
import React from 'react'

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const getData = async () => {
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
};




const page = async () => {

  const productData = await getData()

  return (
    <>
      <Home />
      <div className='flex justify-center items-center flex-col mt-20 mb-10'>
        <h2 className='text-center text-2xl md:text-3xl xl:text-4xl uppercase font-semibold '>Top Products</h2>
        <p className='text-gray-500 italic'>Limited Offer</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 gap-y-16 px-5 sm:px-8 md:px-10 lg:px-14">
        {Array.isArray(productData) ? (
          productData.map((data: IProduct) => (
            <Products cardData={data} key={data.id} />
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  )
}

export default page