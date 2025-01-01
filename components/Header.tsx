"use client";
import React, { useContext } from "react";
import { SidebarContext } from "@/contexts/SideBarContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from "@/contexts/CartContext";

const Header = () => {
  const context = useContext(SidebarContext);
  const contextCart = useContext(CartContext);

  if (!context) {
    throw new Error("SidebarConsumer must be used within a SidebarProvider");
  } else if (!contextCart) {
    throw new Error("CartContext must be used within a CartProvider");
  }

  const { isOpen, setIsOpen } = context;
  const { itemAmount } = contextCart;
  return (
    <header className="w-full flex justify-around items-center px-4 py-4 bg-black text-white">
      <div className="text-xl font-semibold">Best Sale</div>
      <div className="relative">
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <MdOutlineShoppingCart className="text-2xl lg:text-3xl" />
        </div>
        {itemAmount ? (
          <div className="absolute -right-1 md:-right-1 -top-[5px] px-1 bg-red-500 rounded-full text-white text-[10px]">
            {itemAmount}
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
