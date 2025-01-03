"use client";
import React, { useContext } from "react";
import { CartContext } from "@/context/Context";
import Link from "next/link";
import Image from "next/image";
import { AiTwotoneMinusSquare, AiTwotonePlusSquare } from "react-icons/ai";

const ShoppingCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("Cart Context is not provided.");
    }

    const { cartData, setCartData } = context;

    if (!cartData || !setCartData) {
        throw new Error("useContext must be used within a CartProvider");
    }

    console.log("Cart Data:", cartData);

    const handleIncrement = (id: number) => {
        setCartData(
            cartData.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const handleDecrement = (id: number) => {
        setCartData(
            cartData.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    return (
        <div className="w-full px-7 flex justify-center items-center">
            {cartData.length === 0 ? (
                <div className="flex justify-center items-center flex-col h-[80vh]">
                    <h2 className="text-3xl font-semibold">
                        Your Shopping Cart is empty
                    </h2>
                    <Link href="/" className="text-white bg-black py-2 px-5 rounded-xl my-5">
                        Shop Now
                    </Link>
                </div>
            ) : (
                <div
                    className="flex justify-start items-start flex-col w-full"
                >
                    <h4 className="text-xl sm:text-2xl md:text-3xl  font-semibold py-8">Shopping Cart</h4>
                    <table
                        className="w-full mx-auto bg-white shadow-md rounded-lg "
                    >

                        <thead
                            className="bg-gray-400 text-white"
                        >
                            <tr className="grid grid-cols-6 items-center text-center py-3 px-4">
                                <th className="text-[12px] sm:text-sm font-semibold uppercase">Image</th>
                                <th className="text-[12px] sm:text-sm font-semibold uppercase">Name</th>
                                <th className="text-[12px] sm:text-sm font-semibold uppercase">Quantity</th>
                                <th className="text-[12px] sm:text-sm font-semibold uppercase">Price</th>
                                <th className="text-[12px] sm:text-sm font-semibold uppercase">Total</th>
                                <th className="text-[12px] sm:text-sm font-semibold uppercase">Action</th>
                            </tr>
                        </thead>

                        <tbody
                            className="divide-y divide-gray-200"
                        >
                            {cartData.map((item) => (
                                <tr
                                    key={item.id}
                                    className="w-full grid grid-cols-6 place-items-center items-center text-center py-4 px-4"
                                >
                                    <td className="flex justify-center">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={80}
                                            height={80}
                                            className="rounded-lg object-cover"
                                        />
                                    </td>

                                    <td className="text-gray-700 font-medium">
                                        <Link href={`/product/${item.id}`} className="text-[10px] xs:text-[12px] sm:text-sm md:text-base hover:text-gray-900">
                                            {item.category}
                                        </Link>
                                    </td>

                                    <td className="flex items-center justify-center gap-2">
                                        <AiTwotonePlusSquare
                                            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                                            onClick={() => handleIncrement(item.id)}
                                        />
                                        <span className="w-8 text-[11px] sm:text-sm md:text-base lg:text-xl text-center font-semibold text-gray-700">
                                            {item.quantity}
                                        </span>
                                        <AiTwotoneMinusSquare
                                            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 text-gray-800 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                                            onClick={() => handleDecrement(item.id)}
                                        />
                                    </td>

                                    <td className="text-gray-700 text-[10px] xs:text-sm  md:text-base"> $ {item.price.toFixed(2)}</td>

                                    <td className="text-gray-700 text-[10px] xs:text-sm md:text-base">
                                        $ {(item.quantity * item.price).toFixed(2)}
                                    </td>

                                    <td>
                                        <button
                                            className="px-[3px] py-1 sm:px-3 xs:px-1 sm:py-1 bg-black text-white rounded hover:bg-red-600 text-[10px] xs:text-[12px] sm:text-sm md:text-base"
                                            onClick={() => setCartData(cartData.filter((i) => i.id !== item.id))}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>


    );
};

export default ShoppingCart;
