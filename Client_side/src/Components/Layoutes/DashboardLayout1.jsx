import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend 
} from 'recharts';

const DashboardLayout1 = () => {
  // Data for charts
  const revenueData = [
    { name: 'Direct', value: 268, color: '#0ea5e9' },
    { name: 'Organic', value: 890, color: '#38bdf8' },
    { name: 'Referral', value: 622, color: '#7dd3fc' },
    { name: 'Campaign', value: 1200, color: '#bae6fd' }
  ];

  const salesTrendData = [
    { name: 'Week 1', sales: 4000 },
    { name: 'Week 2', sales: 6000 },
    { name: 'Week 3', sales: 8000 },
    { name: 'Week 4', sales: 10450 }
  ];

  const orderVisitData = [
    { name: 'Order', value: 62.2, fill: '#0ea5e9' },
    { name: 'Visits', value: 25.5, fill: '#7dd3fc' },
    { name: 'Other', value: 12.3, fill: '#e0f2fe' }
  ];

  return (
    <div className="p-6 bg-sky-50 ">
      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto">
        {/* Website Analytics Card */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-sky-500 to-sky-600 text-white p-6 rounded-xl  relative overflow-hidden">
          <div className="flex justify-between items-start z-10 relative">
            <div>
              <h2 className="text-xl font-semibold">Website Analytics</h2>
              <p className="text-sky-100 mt-1">Total 28.5% Conversion Rate</p>
            </div>
            <div className="flex space-x-1">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
              <span className="w-2 h-2 bg-white rounded-full opacity-25"></span>
            </div>
          </div>
          
          <div className="mt-6 z-10 relative">
            <p className="text-sm font-medium text-sky-100 mb-3">Revenue Sources</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
                <XAxis dataKey="name" stroke="#f0f9ff" />
                <YAxis stroke="#f0f9ff" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0369a1',
                    borderColor: '#0284c7',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="value">
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} radius={[4, 4, 0, 0]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-sky-400/20"></div>
          <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-sky-400/20"></div>
        </div>

        {/* Average Daily Sales Card */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-xl  border-2 border-sky-100">
          <div className="text-sky-600 text-sm font-medium">Average Daily Sales</div>
          <div className="text-gray-500 text-sm mt-1">Total Sales This Month</div>
          <div className="text-3xl font-bold text-sky-700 mt-2">$28,450</div>
          <div className="mt-6 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesTrendData}>
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#0ea5e9" 
                  strokeWidth={2}
                  dot={{ fill: '#0ea5e9', r: 4 }}
                  activeDot={{ r: 6 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff',
                    borderColor: '#e0f2fe',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 text-xs text-sky-600 text-center">+12% from last month</div>
        </div>

        {/* Sales Overview Card */}
        <div className="w-full md:w-1/4 bg-white p-6 rounded-xl  border-2 border-sky-100">
          <div className="flex justify-between items-start">
            <div>
              <div className="text-sky-600 text-sm font-medium">Sales Overview</div>
              <div className="text-3xl font-bold text-sky-700 mt-1">$42.5k</div>
            </div>
            <span className="bg-sky-100 text-sky-700 text-xs font-semibold px-2.5 py-1 rounded-full flex items-center">
              +18.2% ↑
            </span>
          </div>
          
          <div className="mt-6 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={orderVisitData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {orderVisitData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff',
                    borderColor: '#e0f2fe',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend 
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{ paddingTop: '10px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-2 flex justify-between text-xs text-gray-500">
            <div className="text-center">
              <div className="font-medium">6,440 Orders</div>
            </div>
            <div className="text-center">
              <div className="font-medium">12,749 Visits</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout1;