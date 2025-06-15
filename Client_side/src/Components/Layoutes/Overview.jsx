import React from 'react';
import DashboardLayout1 from './DashboardLayout1';
import DashboardLayout2 from './DashboardLayout2';
import DashboardLayout3 from './DashboardLayout3';

const Overview = () => {
    return (
        <div className="bg-gray-100 min-h-screen overflow-y-auto">
            <DashboardLayout1 />
            <DashboardLayout2 />
            <DashboardLayout3 />
        </div>
    );
};

export default Overview;