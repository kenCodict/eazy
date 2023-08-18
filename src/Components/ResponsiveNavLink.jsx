import { Link } from "react-router-dom";


export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`flex items-start px-10 w-[150px] py-2 border-2 border-indigo-700 ${
                active
                    ? 'w-[200px] py-3 border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 w-[200px] py-3 '
            } font-medium focus:outline-none transition duration-150 mx-5 px-5 rounded-full  w-[200px] py-3 text-center text-lg flex items-center justify-center ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
