import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import SideBar from '../Shared/SideBar';

const DashboardNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="relative">
            <div className="sticky top-0 z-50 backdrop-blur-sm">
                <div className="bg-white rounded-xl border border-gray-200 p-4 mx-2 mt-2 flex items-center justify-between shadow-sm">
                    {/* Dynamic Toggle Button for Sidebar */}
                    <button
                        className="lg:hidden p-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:from-sky-600 hover:to-blue-700 transition-colors"
                        onClick={toggleSidebar}
                        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                    >
                        {isSidebarOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
                    </button>

                    {/* Search Bar - moved to center */}
                    <div className="flex-1 max-w-lg mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search dashboard..."
                                className="w-full pl-10 pr-16 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all duration-200"
                            />
                            <span className="absolute left-3 top-2.5 text-gray-400">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                            <button className="absolute right-2 top-1 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-medium hover:opacity-90 transition-opacity shadow-sm flex items-center">
                                <span className="mr-1">⌘</span>K
                            </button>
                        </div>
                    </div>

                    {/* Right Side Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Add Button */}
                        <button className="p-1.5 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-200 transition-colors relative group">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </button>

                        {/* Notifications */}
                        <button className="p-1.5 rounded-full relative group">
                            <div className="relative">
                                <svg className="w-5 h-5 text-gray-500 group-hover:text-gray-700 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" />
                                </svg>
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                            </div>
                        </button>

                        {/* User Profile */}
                        <div className="flex items-center space-x-2 cursor-pointer">
                            <div className="relative">
                                <img
                                    src="https://randomuser.me/api/portraits/men/32.jpg"
                                    alt="User"
                                    className="w-8 h-8 rounded-full border-2 border-sky-600 object-cover"
                                />
                                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border border-white"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar */}
            <div className={`
                lg:w-64 w-64 bg-white shadow-lg fixed top-0 left-0 h-full z-40
                transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
            `}>
                <SideBar />
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {isSidebarOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={toggleSidebar}
                />
            )}
        </div>
    );
};

export default DashboardNavbar;