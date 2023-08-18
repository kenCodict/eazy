export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center hover:scale-105 px-4 py-2 bg-[#072B24] dark:bg-gray-200 border border-transparent rounded-full font-semibold text-xl text-white dark:text-gray-800 uppercase tracking-widest hover:bg-[#072B24] dark:hover:bg-white focus:bg-gray-700 dark:focus:bg-white active:bg-[#072B24] dark:active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
