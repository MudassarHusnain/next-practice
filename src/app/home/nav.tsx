'use client';
import { useState, useEffect, useRef } from 'react';

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Handler to close the menu
    const handleMenuItemClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="bg-sky-900 top-10 z-50 md:top-10">
            <nav className="w-full max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8">
                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
                    aria-controls="mobile-menu"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg
                        className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Logo and Desktop Menu */}
                <div className="hidden sm:flex sm:items-center sm:space-x-4">
                    <img
                        className="h-8 w-auto"
                        src="https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fteampassword-logo-icon.24bcd80d.png&w=128&q=75"
                        alt="Your Company"
                       
                    />
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-300" aria-current="page">Plans & Pricing</a>
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-300">Product Tour</a>
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-300">Blog</a>
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-300">Security</a>
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-300">Password Generator</a>
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-300">Customers</a>
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-300">Help</a>
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-300">+1 (979)-255-2456</a>
                    <a href="#" className="text-sm font-medium text-white hover:text-gray-300">Sign In</a>
                    <a href="#">
                        <button className="bg-green-400 text-white h-11 w-28 rounded hover:bg-green-500">Get Started</button>
                    </a>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`sm:hidden ${isOpen ? 'block' : 'hidden'} absolute inset-x-0 top-16 bg-gray-800 w-full`}
                ref={menuRef}
            >
                <div className="relative w-full">
                    {/* Close Button */}
                    <button
                        type="button"
                        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="space-y-1 px-2 pb-3 pt-10">
                        <a href="#" className="block rounded-md bg-gray-900 px-4 py-2 text-base font-medium text-white hover:bg-gray-700" aria-current="page" onClick={handleMenuItemClick}>Plans & Pricing</a>
                        <a href="#" className="block rounded-md px-4 py-2 text-base font-medium text-white hover:bg-gray-700" onClick={handleMenuItemClick}>Product Tour</a>
                        <a href="#" className="block rounded-md px-4 py-2 text-base font-medium text-white hover:bg-gray-700" onClick={handleMenuItemClick}>Blog</a>
                        <a href="#" className="block rounded-md px-4 py-2 text-base font-medium text-white hover:bg-gray-700" onClick={handleMenuItemClick}>Security</a>
                        <a href="#" className="block rounded-md px-4 py-2 text-base font-medium text-white hover:bg-gray-700" onClick={handleMenuItemClick}>Password Generator</a>
                        <a href="#" className="block rounded-md px-4 py-2 text-base font-medium text-white hover:bg-gray-700" onClick={handleMenuItemClick}>Customers</a>
                        <a href="#" className="block rounded-md px-4 py-2 text-base font-medium text-white hover:bg-gray-700" onClick={handleMenuItemClick}>Help</a>
                        <a href="#" className="block rounded-md px-4 py-2 text-base font-medium text-white hover:bg-gray-700" onClick={handleMenuItemClick}>+1 (979)-255-2456</a>
                        <a href="#" className="block rounded-md px-4 py-2 text-base font-medium text-white hover:bg-gray-700" onClick={handleMenuItemClick}>Sign In</a>
                        <a href="#">
                            <button className="bg-green-400 text-white w-full rounded hover:bg-green-500" onClick={handleMenuItemClick}>Get Started</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
