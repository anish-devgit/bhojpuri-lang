import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-8 border-t border-gray-800 bg-bhoj-darker text-center">
            <p className="flex items-center justify-center gap-2 text-gray-400">
                Made with <Heart size={16} className="text-red-500 fill-red-500" /> for 
                <span className="text-white font-semibold">Bihar & UP</span>
            </p>
            <p className="text-xs text-gray-600 mt-2">© {new Date().getFullYear()} BhojpuriLang. Open Source.</p>
        </footer>
    );
};

export default Footer;
