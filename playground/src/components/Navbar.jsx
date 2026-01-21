import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show navbar if at top or scrolling up
            if (currentScrollY < 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling DOWN and past threshold -> Hide
                setIsVisible(false);
            } else if (currentScrollY < lastScrollY) {
                // Scrolling UP -> Show
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
            {/* Desktop & Mobile Floating Pill */}
            <motion.nav
                initial={{ y: -100, opacity: 0, x: "-50%" }}
                animate={{ 
                    y: isVisible ? 0 : -150, // Hide by moving up
                    opacity: isVisible ? 1 : 0,
                    x: "-50%" 
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`fixed top-8 left-1/2 w-[90%] md:w-auto z-50 transition-all duration-300 transform -translate-x-1/2`}
            >
                <div 
                    className={`
                        flex items-center justify-between md:justify-center md:gap-12 px-6 py-3 rounded-full 
                        border border-white/10 backdrop-blur-xl transition-all duration-300
                        ${lastScrollY > 20 ? 'bg-black/60 shadow-[0_8px_32px_rgb(0_0_0/0.4)]' : 'bg-white/5 shadow-lg'}
                    `}
                >
                    {/* Logo - Icon Only */}
                    <a href="#" className="flex items-center gap-3 group relative z-10">
                        <div className="w-8 h-8 md:w-9 md:h-9 hover:scale-110 transition-transform duration-300">
                            <img 
                                src="/logo.png" 
                                alt="BhojpuriLang Logo" 
                                className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,153,51,0.5)] mix-blend-screen" 
                            />
                        </div>
                    </a>

                    {/* Centered Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {['Playground', 'Docs', 'Features'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white group"
                            >
                                <span className="relative z-10">{item}</span>
                                {/* Hover Pill Effect */}
                                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </a>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4 relative z-10">
                            <a
                            href="https://github.com/anish-devgit/bhojpuri-lang"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/5 text-white text-xs font-bold uppercase tracking-wider transition-all hover:scale-105"
                        >
                            <FaGithub size={14} />
                            <span>Star</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-lg text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Full Screen Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-[#0b0b0b]/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center pt-24"
                    >
                        <div className="flex flex-col gap-6 text-center w-full px-8">
                                {['Playground', 'Docs', 'Features'].map((item, i) => (
                                <motion.a
                                    key={item}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-2xl font-light text-gray-300 hover:text-[#ff9933] transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </motion.a>
                            ))}
                                <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                href="https://github.com/anish-devgit/bhojpuri-lang"
                                className="mt-8 flex items-center gap-2 justify-center px-6 py-3 rounded-xl bg-[#646cff] text-white font-medium"
                            >
                                <FaGithub size={20} /> Star on GitHub
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
