import React from 'react';

const TwoCards = () => {
    return (
        <div className="flex flex-wrap justify-between gap-6 p-6 bg-gray-50">
            {/* Main Analytics Card */}
            <div className="flex-1 min-w-[300px] bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Website Analytics</h2>
                        <p className="text-sm text-gray-500">Total 28.5% Conversion Rate</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                        +12.4% this month
                    </span>
                </div>

                <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-500 mb-3">Revenue Sources</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex items-center">
                            <div className="bg-blue-100 p-2 rounded-lg mr-3">
                                <span className="text-blue-600">268</span>
                            </div>
                            <span className="text-sm">Direct</span>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-green-100 p-2 rounded-lg mr-3">
                                <span className="text-green-600">890</span>
                            </div>
                            <span className="text-sm">Organic</span>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-purple-100 p-2 rounded-lg mr-3">
                                <span className="text-purple-600">622</span>
                            </div>
                            <span className="text-sm">Referral</span>
                        </div>
                        <div className="flex items-center">
                            <div className="bg-orange-100 p-2 rounded-lg mr-3">
                                <span className="text-orange-600">1.2k</span>
                            </div>
                            <span className="text-sm">Campaign</span>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm text-gray-500">Average Daily Sales</p>
                        <p className="text-lg font-semibold text-gray-800">Total Sales This Month</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">$28,450</p>
                    </div>
                    <div className="w-24 h-24">
                        <svg viewBox="0 0 36 36" className="circular-chart">
                            <path
                                className="circle-bg"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#eee"
                                strokeWidth="3"
                            />
                            <path
                                className="circle"
                                strokeDasharray="75, 100"
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#4CAF50"
                                strokeWidth="3"
                                strokeLinecap="round"
                            />
                            <text x="18" y="20" className="percentage" textAnchor="middle" dy=".3em" fill="#4CAF50" fontSize="8">75%</text>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Sales Overview Card */}
            <div className="flex-1 min-w-[300px] bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">Sales Overview</h2>
                        <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                            +18.2% <span className="ml-1">↑</span>
                        </span>
                    </div>
                    <div className="text-2xl font-bold text-gray-800">$42.5k</div>
                </div>

                <div className="flex justify-between mb-4">
                    <div className="text-center">
                        <div className="text-sm text-gray-500">Order</div>
                        <div className="text-lg font-semibold text-blue-600">62.2%</div>
                        <div className="text-xs text-gray-400">VS 6,440</div>
                    </div>
                    <div className="text-center">
                        <div className="text-sm text-gray-500">Visits</div>
                        <div className="text-lg font-semibold text-purple-600">25.5%</div>
                        <div className="text-xs text-gray-400">VS 12,749</div>
                    </div>
                </div>

                <div className="relative w-full bg-gray-200 rounded-full h-3 mb-6">
                    <div 
                        className="absolute bg-blue-600 h-3 rounded-full" 
                        style={{ width: '62.2%' }}
                    ></div>
                    <div 
                        className="absolute bg-purple-600 h-3 rounded-full" 
                        style={{ width: '25.5%', left: '62.2%' }}
                    ></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Conversion</span>
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">+12%</span>
                        </div>
                        <div className="text-xl font-bold text-gray-800 mt-1">28.5%</div>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-600">Avg. Order</span>
                            <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">+8%</span>
                        </div>
                        <div className="text-xl font-bold text-gray-800 mt-1">$89.42</div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .circular-chart {
                    display: block;
                    margin: 10px auto;
                    max-width: 80%;
                    max-height: 80%;
                }
                .circle {
                    animation: circle-fill 1.5s ease-in-out;
                }
                @keyframes circle-fill {
                    0% { stroke-dasharray: 0, 100; }
                }
            `}</style>
        </div>
    );
};

export default TwoCards;