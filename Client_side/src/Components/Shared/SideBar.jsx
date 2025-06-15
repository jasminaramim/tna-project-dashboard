import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  FiHome, FiPieChart, FiUsers, FiShoppingCart, FiBookOpen, FiTruck, 
  FiFileText, FiChevronDown, FiChevronRight, FiLayers, FiFile,
  FiUser, FiLock, FiLayout, FiLogIn, FiSliders, FiMessageSquare,
  FiCheckSquare, FiTable, FiBarChart, FiShield
} from 'react-icons/fi';

const SideBar = () => {
    const [expandedItems, setExpandedItems] = useState({
        dashboards: true, // Expanded by default
        frontPages: false,
        ecommerce: false,
        academy: false,
        logistics: false,
        pages: false,
        uiElements: false,
        formsTables: false,
        charts: false,
        others: false
    });

    const toggleSubMenu = (item) => {
        setExpandedItems(prev => ({ ...prev, [item]: !prev[item] }));
    };

    return (
        <div className="flex flex-col h-full bg-white shadow-lg w-64 overflow-y-auto">
            {/* Sticky Header with Company Name */}
            <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
                <div className="flex items-center p-4">
                    <div className="text-sky-600 text-xl font-bold">TNA</div>
                </div>
            </div>

            {/* Scrollable Navigation Area */}
            <div className="flex-1">
                <nav className="pb-4">
                    <ul className="p-2 space-y-1">
                        {/* Dashboards Dropdown - Expanded by Default */}
                        <li>
                            <button 
                                onClick={() => toggleSubMenu('dashboards')} 
                                className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <FiHome className="mr-3 text-lg" />
                                <span className="font-medium">Dashboards</span>
                                <span className="ml-auto bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">5</span>
                                {expandedItems.dashboards ? (
                                    <FiChevronDown className="ml-2 text-gray-400" />
                                ) : (
                                    <FiChevronRight className="ml-2 text-gray-400" />
                                )}
                            </button>
                            {expandedItems.dashboards && (
                                <ul className="pl-11 mt-1 space-y-1">
                                    <li>
                                        <NavLink to="/dashboard/analytics" className={({ isActive }) => 
                                            `flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                                        }>
                                            <FiPieChart className="mr-3 text-sm" />
                                            Analytics
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/crm" className={({ isActive }) => 
                                            `flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                                        }>
                                            <FiUsers className="mr-3 text-sm" />
                                            CRM
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/ecommerce" className={({ isActive }) => 
                                            `flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                                        }>
                                            <FiShoppingCart className="mr-3 text-sm" />
                                            Ecommerce
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/academy" className={({ isActive }) => 
                                            `flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                                        }>
                                            <FiBookOpen className="mr-3 text-sm" />
                                            Academy
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/logistics" className={({ isActive }) => 
                                            `flex items-center p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                                        }>
                                            <FiTruck className="mr-3 text-sm" />
                                            Logistics
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Front Pages */}
                        <li>
                            <NavLink to="/front-pages" className={({ isActive }) => 
                                `flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                            }>
                                <FiFileText className="mr-3 text-lg" />
                                <span className="font-medium">Front Pages</span>
                            </NavLink>
                        </li>

                        {/* Apps & Pages Section */}
                        <li className="mt-4 mb-2 px-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Apps & Pages</span>
                        </li>

                        <li>
                            <NavLink to="/kanban" className={({ isActive }) => 
                                `flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                            }>
                                <FiLayers className="mr-3 text-lg" />
                                <span>Kanban</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/invoice" className={({ isActive }) => 
                                `flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                            }>
                                <FiFile className="mr-3 text-lg" />
                                <span>Invoice</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/user" className={({ isActive }) => 
                                `flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                            }>
                                <FiUser className="mr-3 text-lg" />
                                <span>User</span>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/roles-permissions" className={({ isActive }) => 
                                `flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                            }>
                                <FiLock className="mr-3 text-lg" />
                                <span>Roles & Permissions</span>
                            </NavLink>
                        </li>

                        {/* Pages Dropdown */}
                        <li>
                            <button 
                                onClick={() => toggleSubMenu('pages')} 
                                className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <FiFileText className="mr-3 text-lg" />
                                <span>Pages</span>
                                {expandedItems.pages ? (
                                    <FiChevronDown className="ml-auto text-gray-400" />
                                ) : (
                                    <FiChevronRight className="ml-auto text-gray-400" />
                                )}
                            </button>
                            {expandedItems.pages && (
                                <ul className="pl-11 mt-1 space-y-1">
                                    <li>
                                        <NavLink to="/pages/authentication" className={({ isActive }) => 
                                            `block p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                                        }>
                                            Authentication
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/pages/wizard-examples" className={({ isActive }) => 
                                            `block p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                                        }>
                                            Wizard Examples
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/pages/dialog-examples" className={({ isActive }) => 
                                            `block p-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                                        }>
                                            Dialog Examples
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* UI Elements Section */}
                        <li className="mt-4 mb-2 px-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">UI Elements</span>
                        </li>

                        <li>
                            <NavLink to="/ui/typography" className={({ isActive }) => 
                                `flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                            }>
                                <FiLayout className="mr-3 text-lg" />
                                <span>Typography</span>
                            </NavLink>
                        </li>

                        {/* Forms & Tables Section */}
                        <li className="mt-4 mb-2 px-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Forms & Tables</span>
                        </li>
                        <li>
                            <button 
                                onClick={() => toggleSubMenu('formsTables')} 
                                className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <FiCheckSquare className="mr-3 text-lg" />
                                <span>Form Elements</span>
                                <FiChevronRight className="ml-auto text-gray-400" />
                            </button>
                        </li>
                        <li>
                            <NavLink to="/form-layouts" className={({ isActive }) => 
                                `flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                            }>
                                <FiSliders className="mr-3 text-lg" />
                                <span>Form Layouts</span>
                            </NavLink>
                        </li>
                        <li>
                            <button 
                                onClick={() => toggleSubMenu('formWizard')} 
                                className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <FiMessageSquare className="mr-3 text-lg" />
                                <span>Form Wizard</span>
                                <FiChevronRight className="ml-auto text-gray-400" />
                            </button>
                        </li>
                        <li>
                            <NavLink to="/form-validation" className={({ isActive }) => 
                                `flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                            }>
                                <FiCheckSquare className="mr-3 text-lg" />
                                <span>Form Validation</span>
                            </NavLink>
                        </li>
                        <li>
                            <button 
                                onClick={() => toggleSubMenu('tables')} 
                                className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <FiTable className="mr-3 text-lg" />
                                <span>Tables</span>
                                <FiChevronRight className="ml-auto text-gray-400" />
                            </button>
                        </li>

                        {/* Charts Section */}
                        <li className="mt-4 mb-2 px-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Charts</span>
                        </li>
                        <li>
                            <button 
                                onClick={() => toggleSubMenu('charts')} 
                                className="flex items-center w-full p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <FiBarChart className="mr-3 text-lg" />
                                <span>Charts</span>
                                <FiChevronRight className="ml-auto text-gray-400" />
                            </button>
                        </li>

                        {/* Others Section */}
                        <li className="mt-4 mb-2 px-2">
                            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Others</span>
                        </li>
                        <li>
                            <NavLink to="/access-control" className={({ isActive }) => 
                                `flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors ${isActive ? 'text-sky-600 bg-sky-50' : ''}`
                            }>
                                <FiShield className="mr-3 text-lg" />
                                <span>Access Control</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideBar;