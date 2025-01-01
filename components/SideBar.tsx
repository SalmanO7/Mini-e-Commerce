"use client";
import React, { useContext } from "react";
import { SidebarContext } from "@/contexts/SideBarContext";
import { CartContext } from "@/contexts/CartContext";
import CartItem from "./CartItem";
import { FiTrash2 } from "react-icons/fi";

const Sidebar = () => {
  const context = useContext(SidebarContext);
  const contextCart = useContext(CartContext);

  if (!context) {
    throw new Error("SidebarConsumer must be used within a SidebarProvider");
  } else if (!contextCart) {
    throw new Error("CartContext must be used within a CartProvider");
  }
  const { isOpen, HandleClose } = context;
  const { cart, clearFromCart, totalPrice } = contextCart;

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      }  bg-white fixed top-0 h-full shadow-2xl w-3/4 sm:w-2/3 md:w-2/3 lg:w-2/4 xl:w-2/5 transition-all duration-300 ease-in-out z-50 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
        <div
          className="cursor-pointer  w-8 h-8 flex justify-center items-center"
          onClick={HandleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M10.293 1.5a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L12.086 8H1a1 1 0 1 1 0-2h11.086L10.293 2.914a1 1 0 0 1 0-1.414z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-y-2  h-[75vh] overflow-y-auto overflow-x-hidden ">
        {cart.map((card) => (
          <CartItem key={card.id} card={card} />
        ))}
      </div>

      <div className="">
        <div className="flex justify-between pl-3 items-center w-full bg-black text-white  rounded-lg">
          <div className="uppercase text-sm md:text-base font-semibold">
            Total: <span className="pl-3">${totalPrice.toFixed(2)}</span>
          </div>
          <div
            onClick={() => {
              clearFromCart();
              HandleClose();
            }}
            className="bg-red-500 ml-1 p-2 rounded-e-lg cursor-pointer"
          >
            <FiTrash2 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
