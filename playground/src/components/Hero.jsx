import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';

const Hero = ({ onRunCode }) => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0b0b0b]">
             
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                 <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-900/40 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob"></div>
                 <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/40 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-blob animation-delay-2000"></div>
                 <div className="absolute top-[40%] left-[40%] w-[500px] h-[500px] bg-pink-900/30 rounded-full blur-[100px] mix-blend-screen opacity-40 animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-4 z-10 text-center relative">
                
                {/* Badge */}
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-pointer group"
                >
                    <span className="px-2 py-0.5 rounded bg-[#646cff] text-[10px] font-bold uppercase tracking-wider text-white">New</span>
                    <span className="text-gray-300 text-sm group-hover:text-white transition-colors">Bhojpurilang v1.0 Released</span>
                    <span className="text-gray-500 group-hover:text-white transition-colors">→</span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white tracking-tight leading-[1.1] mb-8"
                >
                    Programming ab <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Bhojpuri mein!
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed font-sans"
                >
                    The most flavorful coding language for the world.
                    Highly customizable, purely logic-based, and built for fun.
                </motion.p>

                {/* Buttons */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <button 
                        onClick={onRunCode}
                        className="px-8 py-4 rounded-full bg-[#646cff] hover:bg-[#747bff] text-white text-lg font-medium transition-all shadow-[0_0_20px_rgba(100,108,255,0.4)] hover:shadow-[0_0_40px_rgba(100,108,255,0.6)] hover:-translate-y-1"
                    >
                        Try Playground
                    </button>
                    {/* Copy Command */}
                    <div className="group relative flex items-center px-6 py-4 rounded-full bg-white/5 border border-white/10 hover:border-white/20 transition-all cursor-pointer">
                        <span className="font-mono text-gray-300 mr-4">npm i -g bhojpurilang</span>
                         <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                    </div>
                </motion.div>

                {/* Creator Credit */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6"
                >
                    <p className="text-gray-500 text-[10px] mb-2 tracking-wider uppercase font-medium">Crafted with ❤️ by</p>
                    <a 
                        href="https://github.com/anish-devgit" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-bhoj-saffron/50 transition-all duration-300"
                    >
                        {/* Glowing Dot */}
                        <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        
                        <span className="text-gray-300 group-hover:text-white font-mono font-medium tracking-wide">
                            @anish-devgit
                        </span>

                        <FaGithub className="text-gray-500 group-hover:text-white transition-colors" />
                        
                        {/* Gradient Glow Effect on Hover */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bhoj-saffron to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-full"></div>
                    </a>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
