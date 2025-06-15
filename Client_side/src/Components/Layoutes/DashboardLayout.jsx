import React, { useState } from 'react';
import SideBar from '../Shared/SideBar';
import MainContent from './MainContent';

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
            {/* Hamburger Menu for Mobile */}
         

            {/* Sidebar */}
            <div className={`
                lg:w-64 w-64 bg-white shadow-lg fixed lg:static top-0 left-0 z-40
                transform transition-transform duration-300 ease-in-out
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
                h-full lg:h-[800px] overflow-y-auto
            `}>
                <SideBar />
            </div>

            

            {/* Main Content */}
            <div className="flex-1 h-[800px] overflow-y-auto">
                <MainContent />
            </div>
        </div>
    );
};

export default DashboardLayout;