import React from 'react';
import { FiTrendingUp, FiUsers, FiBarChart2, FiLock, FiMail, FiCheck, FiArrowRight } from 'react-icons/fi';
import { FaGoogle, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className="flex flex-col md:flex-row w-full max-w-7xl bg-white shadow-xl overflow-hidden">
        {/* Left Section - Animated Image */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center ">
        
          <img 
            src="https://i.ibb.co/gZLSjprm/7140739-3515462-removebg-preview.png"
            alt="Analytics Dashboard"
            className="w-full h-auto object-contain animate-float"
            style={{ 
              animation: 'float 3s ease-in-out infinite',
              
            }}
          />
          
     
          <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-[#7edad9]-200 opacity-30 animate-float-delay-1"></div>
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 rounded-full bg-indigo-200 opacity-30 animate-float-delay-2"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-blue-200 opacity-30 animate-float-delay-3"></div>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
            <p className="text-gray-600">Sign in to access your analytics dashboard</p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FiMail className="mr-2" />
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
              
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7edad9]-500 focus:border-transparent transition pl-10"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                <FiLock className="mr-2" />
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
             
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#7edad9]-500 focus:border-transparent transition pl-10"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#7edad9] focus:ring-[#7edad9] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-[#7edad9] hover:text-[#7edad9]">
                Forgot password?
              </a>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#7edad9] to-sky-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              Sign In <FiArrowRight className="ml-2" />
            </button>
          </form>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <FaGoogle className="w-5 h-5 text-green-600" />
              </button>
              <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <FaTwitter className="w-5 h-5 text-gray-800" />
              </button>
              <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                <FaLinkedinIn className="w-5 h-5 text-blue-600" />
              </button>
            </div>
          </div>
          
          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="font-medium text-[#3f7b7a] hover:text-[#7edad9]">
              Sign up
            </a>
          </p>
        </div>
      </div>

      {/* Css Style */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay-1 {
          animation: float 4s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-float-delay-2 {
          animation: float 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-delay-3 {
          animation: float 3.5s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default Login;