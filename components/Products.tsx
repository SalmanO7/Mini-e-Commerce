"use client"
import { CartContext } from '@/context/Context';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react'


interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}


interface CartItem {
  cart: IProduct;
  quantity: number;
  id: number
}

const Products = ({ cardData }: { cardData: any }) => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Cart Context is not provided.");
  }
  const { cartData, setCartData } = context;


  if (!cartData || !setCartData) {
    throw new Error("useContext must be used within a CartProvider");
  }

  const AddToCart = (cart: IProduct) => {
    const ExistProduct = cartData.find((cartItem: CartItem) => cartItem.id === cart.id);

    if (ExistProduct) {
      console.log(ExistProduct)
    } else {
      const newCartItem = { ...cart, quantity: 1 }; 
      setCartData([...cartData, newCartItem]);
      
    }

  };

  return (
    <div className="" id='products'>
      <div className=" border border-[#e4e4e4] h-[220px] p-6  mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-2/3 sm:w-full h-full flex justify-center items-center p-3">
            <Image
              className="max-w-2/4 sm:w-2/4 lg:w-2/3 group-hover:scale-110"
              src={cardData.image}
              alt={cardData.title}
              width={150}
              height={100}
            />
          </div>
          <div className="absolute top-2 -right-8 group-hover:right-2  bg-red-500 p-[1px] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={() => AddToCart(cardData)}
            >
              <div className="flex justify-center items-center text-white bg-red-500 w-7 h-7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
            </button>
            <Link
              href={`/${cardData.id}`}
              className="w-7 h-7 bg-white flex justify-center items-center text-primary drop-shadow-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM8 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-start">
        <div className="text-sm capitalize text-gray-500 mb-2">{cardData.category}</div>
        <div>
          <Link href={`/product/${cardData.id}`}>
            <h2 className="font-semibold mb-1">
              {cardData.title.length > 20 ? cardData.title.slice(0, 20) + "..." : cardData.title}
            </h2>
          </Link>
        </div>
        <span className="font-semibold ">$ {cardData.price}</span>
      </div>
    </div>
  )
}

export default Products
