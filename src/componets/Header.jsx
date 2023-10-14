import React from "react";
import 'tailwindcss/tailwind.css';

export const Header = () => {
  return (
    <header className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="py-6">
                <p className="text-white text-xl">Todoアプリ</p>
            </div>
        </div>
    </header>
  );
}

// export default Header;
