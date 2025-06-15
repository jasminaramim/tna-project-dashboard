import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  CartesianGrid  // Added this import
} from 'recharts';
import { 
  FiDollarSign, FiGlobe, FiTrendingUp, 
  FiMail, FiUsers, FiBarChart2, FiPieChart 
} from 'react-icons/fi';
import { 
  FaUsb, FaGlobeAmericas, FaRupeeSign, 
  FaMapMarkerAlt, FaFlag, FaShoppingCart 
} from 'react-icons/fa';

const DashboardLayout3 = () => {
  // Data for charts
  const countrySalesData = [
    { name: 'United States', value: 8567, percentage: '25.8%', icon: <FaUsb className="text-blue-500" />, color: '#3b82f6' },
    { name: 'Brazil', value: 2415, percentage: '6.2%', icon: <FaGlobeAmericas className="text-green-500" />, color: '#10b981' },
    { name: 'India', value: 865, percentage: '12.4%', icon: <FaRupeeSign className="text-orange-500" />, color: '#f59e0b' },
    { name: 'Australia', value: 745, percentage: '11.9%', icon: <FaMapMarkerAlt className="text-red-500" />, color: '#ef4444' },
    { name: 'France', value: 45, percentage: '16.2%', icon: <FaFlag className="text-purple-500" />, color: '#8b5cf6' },
    { name: 'China', value: 12, percentage: '14.8%', icon: <FaShoppingCart className="text-cyan-500" />, color: '#06b6d4' }
  ];

  const emailStatsData = [
    { name: 'Opened', value: 8734, percentage: '2.1%', color: '#3b82f6' },
    { name: 'Clicked', value: 967, percentage: '1.4%', color: '#10b981' },
    { name: 'Subscribe', value: 345, percentage: '8.5%', color: '#f59e0b' },
    { name: 'Complaints', value: 10, percentage: '1.5%', color: '#ef4444' }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
          <FiBarChart2 className="mr-2 text-blue-500" />
          Sales Dashboard
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sales by Countries Card */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                  <FiGlobe className="mr-2 text-blue-500" />
                  Sales by Countries
                </h2>
                <p className="text-sm text-gray-500 mt-1">Monthly Sales Overview</p>
              </div>
              <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                <FiTrendingUp className="mr-1" />
                +12.6% this month
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {countrySalesData.map((country, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4" style={{ borderLeftColor: country.color }}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="p-2 rounded-full bg-white shadow-sm mr-3">
                        {country.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{country.name}</p>
                        <p className="text-xl font-bold text-gray-800">${country.value}k</p>
                      </div>
                    </div>
                    <span className="bg-white text-xs font-medium px-2 py-1 rounded-full">
                      {country.percentage}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={countrySalesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="name" hide />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`$${value}k`, 'Sales']}
                    contentStyle={{
                      backgroundColor: '#fff',
                      borderColor: '#e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {countrySalesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Right Side Stats */}
          <div className="space-y-6">
            {/* Total Earning Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Total Earning</h3>
                  <p className="text-2xl font-bold text-gray-800 mt-1">87%</p>
                </div>
                <div className="text-sm font-medium text-blue-600">25.8%</div>
              </div>
              <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-blue-300 h-2 rounded-full" 
                  style={{ width: '87%' }}
                ></div>
              </div>
            </div>

            {/* Revenue & Sales Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Total Revenue</h3>
                  <p className="text-lg font-bold text-gray-800 mt-1">Client Payment</p>
                  <div className="flex items-center text-green-500 text-sm mt-2">
                    <FiTrendingUp className="mr-1" />
                    +$126
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Total Sales</h3>
                  <p className="text-lg font-bold text-gray-800 mt-1">Total Sales</p>
                  <div className="flex items-center text-blue-500 text-sm mt-2">
                    <FiPieChart className="mr-1" />
                    8.52k
                  </div>
                </div>
              </div>
            </div>

            {/* Email Campaign Card */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-800 flex items-center">
                    <FiMail className="mr-2 text-blue-500" />
                    Monthly Campaign State
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">12,346 Emails</p>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                  0.3%
                </span>
              </div>

              <div className="space-y-3">
                {emailStatsData.map((stat, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{stat.name}</span>
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-gray-800 mr-2">{stat.value.toLocaleString()}</span>
                      <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">
                        {stat.percentage}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 h-40">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={emailStatsData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={70}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {emailStatsData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [value, 'Emails']}
                      contentStyle={{
                        backgroundColor: '#fff',
                        borderColor: '#e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Legend 
                      layout="horizontal"
                      verticalAlign="bottom"
                      align="center"
                      wrapperStyle={{ paddingTop: '10px', fontSize: '12px' }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout3;