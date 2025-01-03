import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div style={{
      backgroundImage: 'url("/assets/Home123.jpg")',
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
      className="w-full flex justify-start px-12 items-center ">
      <div className="w-full sm:w-2/3 md:w-1/2 h-[100vh] flex justify-center items-start flex-col">
        <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Welcome to ShopEase
        </h1>
        <p className="text-gray-100 mb-6 text-[12px] md:text-sm lg:text-base">
          Discover a hassle-free shopping experience tailored just for you. From top-quality products to seamless cart management, we’ve got everything covered!
        </p>
        <Link
          href="#products"
          className="text-sm sm:text-balance inline-block border border-[#1c1c34] text-[#1c1c34] font-semibold bg-white sm:py-2 py-1 px-3 sm:px-4 rounded-md shadow-md hover:border hover:border-white hover:bg-[#1c1c34] hover:text-white"
        >
          Shop Now
        </Link>
      </div>
    </div>
  )
}

export default Home