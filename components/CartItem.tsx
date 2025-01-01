import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { FaMinus, FaPlus } from "react-icons/fa";
import { CartContext } from "@/contexts/CartContext";

interface CardProps {
  id: string;
  image: string;
  category: string;
  title: string;
  price: number;
  amount: number;
}

const CartItem = ({ card }: { card: CardProps }) => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("RemoveCart is not supported");
  }

  const { removeFromCart, increaseAmount, decreaseAmount } = context;
  const { id, image, category, title, price, amount } = card;

  return (
    <div className="flex flex-col pt-7 ">
      <div className="w-full  flex items-center justify-start border-b pb-5">
        <Link href={`/product/${id}`}>
          <Image
            className="-mr-10 w-2/2 sm:w-2/3"
            src={image}
            alt={title}
            width={100}
            height={130}
          />
        </Link>

        <div className="flex flex-col w-full ">
          <div className=" flex items-center justify-between gap-6 mb-2">
            <Link
              href={`/product/${id}`}
              className="text-[12px] pl-4 sm:text-sm md:text-base lg:text-lg font-semibold text-black text-start"
            >
              {title}
            </Link>
            <div
              onClick={() => removeFromCart(parseInt(id))}
              className="flex justify-end"
            >
              <IoMdClose className="mr-3 text-gray-500 cursor-pointer hover:text-red-500 transition text-xl sm:text-2xl lg:text-3xl" />
            </div>
          </div>
          <div className="flex  justify-between items-center">
            <div className="flex justify-start items-center pl-4">
              <div onClick={()=> decreaseAmount(parseInt(id))} className="border px-1 sm:px-1 py-[6px] sm:py-2 hover:bg-gray-700 hover:text-white transition-transform">
                <FaMinus className="text-[10px] sm:text-sm" />
              </div>
              <div className="text-sm sm:text-base border px-1 sm:px-2 py-[1px] sm:py-[3px]">
                {amount}
              </div>
              <div
                onClick={() => increaseAmount(parseInt(id))}
                className="border px-1 sm:px-1 py-[6px] sm:py-2 hover:bg-gray-700 hover:text-white transition-transform"
              >
                <FaPlus className="text-[10px] sm:text-sm" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full justify-between px-2 items-end sm:items-center py-2 pl-1 sm:pl-2 md:pl-10">
              <div className="text-[12px] sm:text-sm md:text-base text-gray-500 italic">
                $ {price}
              </div>
              <div className="text-[12px] sm:text-sm md:text-base">{`$ ${(
                price * amount
              ).toFixed(2)}`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
