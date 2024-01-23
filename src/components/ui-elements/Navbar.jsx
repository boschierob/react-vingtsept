import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex items-center justify-between">
                <div className="text-white font-bold">Logo</div>
                {isMobile ? (
                    <>
                        <div
                            className={`sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 hidden'}`}
                        >
                            <a href="/" className="text-white mx-2">Account</a>
                            <a href="/free" className="text-white mx-2">Free</a>
                            <a href="/login" className="text-white mx-2">Login</a>
                        </div>
                        <button
                            onClick={() => setMenuOpen(!isMenuOpen)}
                            className={`text-white sm:hidden transition-opacity duration-300`}
                        >
                            {isMenuOpen ? (
                                // Icône de croix lorsque le menu est ouvert
                                <svg className="w-6 h-6 transition-opacity duration-300 opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            ) : (
                                // Icône hamburger lorsque le menu est fermé
                                <svg className="w-6 h-6 transition-opacity duration-300 opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            )}
                        </button>
                    </>
                ) : (
                    <div
                        className={`flex-col  space-y-2`}
                    >
                        <a href="/" className="text-white mx-4">Account</a>
                        <a href="/free" className="text-white mx-4">Free</a>
                        <a href="/login" className="text-white mx-4">Login</a>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default Navbar;