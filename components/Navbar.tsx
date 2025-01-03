import Link from 'next/link'
import React from 'react'
import { BiHomeAlt } from 'react-icons/bi'
import { TbShoppingCart } from 'react-icons/tb'

const Navbar = () => {


    return (
        <nav className="w-full flex justify-around items-center px-4 py-4 bg-[#1c1c34] text-white">
            <Link href={"/"} className="text-base sm:text-xl font-semibold">ShopEase</Link>
            <div className="flex justify-center items-center gap-2 md:gap-3 lg:gap-3">
                <Link href={"/"} >
                    <BiHomeAlt className="text-2xl xl:text-3xl" />
                </Link>
                <Link href={"/cart"}>
                    <TbShoppingCart className="text-2xl xl:text-3xl" />
                </Link>

            </div>
        </nav >
    )
}

export default Navbar