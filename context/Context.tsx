"use client";
import { createContext, useState } from "react";

// Define the types for cart data and the context
type CartItemType = any; // Replace 'any' with the specific type for your cart items
type CartContextType = {
  cartData: CartItemType[];
  setCartData: React.Dispatch<React.SetStateAction<CartItemType[]>>;
  
};

// Create context with a type
const CartContext = createContext<CartContextType | undefined>(undefined);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartData, setCartData] = useState<CartItemType[]>([]);

  return (
    <CartContext.Provider value={{ cartData, setCartData }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export { CartContext };
