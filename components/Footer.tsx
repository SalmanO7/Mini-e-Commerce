import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 mt-24">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
                {/* Left Section */}
                <div className="text-center md:text-left">
                    <h2 className="text-xl font-semibold mb-2">Happy Shopping!</h2>
                    <p className="text-sm">Explore products and manage your cart seamlessly.</p>
                </div>

                {/* Right Section */}
                <div className="mt-4 md:mt-0 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Created by Muhammad Salman</p>
                    <p className="text-sm">All Rights Reserved</p>
                </div>
            </div>
        </footer>

    )
}

export default Footer