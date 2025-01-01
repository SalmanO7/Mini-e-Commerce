"use client";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface CartContextType {
  cart: any[];
  AddToCart: (product: any, id: number) => void;
  removeFromCart: (id: number) => void;
  clearFromCart: () => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  itemAmount: number;
  totalPrice: number;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<any[]>([]);
  const [itemAmount, setItemAmount] = useState<number>(0);
  const [totalPrice, SetTotalPrice] = useState<number>(0);
  useEffect(() => {
    const TotalPrice = () => {
      return cart.reduce((acc, curr) => {
        return (acc += curr.price * curr.amount);
      }, 0);
    };
    SetTotalPrice(TotalPrice);
  });

  useEffect(() => {
    if (cart) {
      const total = cart.reduce((total, cartItem) => {
        return (total += cartItem.amount);
      }, 0);
      setItemAmount(total);
    }
  }, [cart]);

  const AddToCart = (product: any, id: number) => {
    const newItem = { ...product, amount: 1 };
    console.log(`add to ${newItem} `);

    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    console.log(cartItem);
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
    console.log(cart);
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((item) => item.id !== id);
    return setCart(newCart);
  };

  const clearFromCart = () => {
    setCart([]);
  };

  const increaseAmount = (id: number) => {
    const newCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  const decreaseAmount = (id: number) => {
    const newCart = cart.map((item) => {
      if (item.id === id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        AddToCart,
        removeFromCart,
        clearFromCart,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
