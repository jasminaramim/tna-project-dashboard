import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, 
  BarChart, Bar, XAxis, YAxis, Tooltip 
} from 'recharts';
import { 
  FiDollarSign, FiTrendingUp, FiPieChart, 
  FiAlertCircle, FiInbox, FiClock, FiCheckCircle 
} from 'react-icons/fi';

const DashboardLayout2 = () => {
  // Data for charts
  const earningData = [
    { name: 'Profit', value: 256.34, color: '#10b981' },
    { name: 'Expense', value: 74.19, color: '#ef4444' },
    { name: 'Balance', value: 215.16, color: '#3b82f6' }
  ];

  const supportData = [
    { name: 'New Tickets', value: 142, fill: '#3b82f6' },
    { name: 'Open Tickets', value: 28, fill: '#f59e0b' },
    { name: 'Other', value: 6, fill: '#e5e7eb' }
  ];

  return (
    <div className="p-6 bg-gray-50 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {/* Earning Reports Card */}
        <div className="b p-6 rounded-xl  border border-gray-300">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <FiDollarSign className="mr-2 text-blue-500" />
                Earning Reports
              </h2>
              <p className="text-sm text-gray-500 mt-1">Weekly Earnings Overview</p>
            </div>
            <div className="flex items-center bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
              <FiTrendingUp className="mr-1" />
              +4.2%
            </div>
          </div>

          <div className="mt-4">
            <div className="text-3xl font-bold text-gray-800">$468</div>
            <p className="text-sm text-gray-500 mt-1">You informed of this week compared to last week</p>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Earnings</p>
              <p className="text-lg font-semibold text-gray-800">$545.69</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Profit</p>
              <p className="text-lg font-semibold text-green-600">$256.34</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">Expense</p>
              <p className="text-lg font-semibold text-red-500">$74.19</p>
            </div>
          </div>

          <div className="mt-6 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={earningData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {earningData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`$${value.toFixed(2)}`, '']}
                  contentStyle={{
                    backgroundColor: '#fff',
                    borderColor: '#e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Support Tracker Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 flex items-center">
                <FiAlertCircle className="mr-2 text-orange-500" />
                Support Tracker
              </h2>
              <p className="text-sm text-gray-500 mt-1">Last 7 Days</p>
            </div>
            <div className="text-2xl font-bold text-gray-800">164</div>
          </div>
          <p className="text-sm text-gray-500 mt-2">Total Tickets</p>

          <div className="mt-6 grid grid-cols-3 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="flex items-center text-sm text-gray-500">
                <FiInbox className="mr-1 text-blue-500" />
                New Tickets
              </div>
              <p className="text-lg font-semibold text-gray-800 mt-1">142</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <div className="flex items-center text-sm text-gray-500">
                <FiClock className="mr-1 text-amber-500" />
                Open Tickets
              </div>
              <p className="text-lg font-semibold text-gray-800 mt-1">28</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <div className="flex items-center text-sm text-gray-500">
                <FiCheckCircle className="mr-1 text-gray-500" />
                Response Time
              </div>
              <p className="text-lg font-semibold text-gray-800 mt-1">1 Day</p>
            </div>
          </div>

          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm text-gray-500">Completed Task</p>
              <p className="text-sm font-semibold text-gray-800">85%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full" 
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>

          <div className="mt-6 h-40">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={supportData}>
                <XAxis dataKey="name" hide />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#fff',
                    borderColor: '#e5e7eb',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                  }}
                />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {supportData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout2;