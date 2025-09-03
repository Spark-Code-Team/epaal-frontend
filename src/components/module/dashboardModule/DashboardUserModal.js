const UserModal = ({ onClose }) => {
    return (
       
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            
            <div className="
                relative
                w-96
                h-80
                bg-white
                rounded-xl
                shadow-lg
                p-6
                flex
                flex-col
                items-center
                justify-center
                text-center
            ">
               
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 text-gray-500 hover:text-gray-800"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <p className="text-xl font-bold mb-4">
                    ⚠️ احراز هویت الزامی است
                </p>
                <p className="text-gray-700">
                    لطفاً برای ادامه فرآیند و دسترسی به امکانات سامانه، ابتدا احراز هویت خود را انجام دهید.
                </p>
            </div>
        </div>
    );
};

export default UserModal;