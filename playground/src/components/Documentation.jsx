import React from 'react';
import { motion } from 'framer-motion';

const KeywordCard = ({ keyword, meaning, example, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.4 }}
        className="glass-panel p-6 rounded-xl hover:bg-white/10 transition-colors group"
    >
        <div className="flex justify-between items-start mb-4">
            <h4 className="text-xl font-bold font-mono text-bhoj-saffron">{keyword}</h4>
            <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded text-gray-400">{meaning}</span>
        </div>
        <div className="bg-black/40 p-3 rounded-lg border border-white/5 font-mono text-xs text-gray-300">
            {example}
        </div>
    </motion.div>
);

const Documentation = () => {
    const keywords = [
        { keyword: "bhai", meaning: "variable", example: 'bhai x = 10' },
        { keyword: "bola", meaning: "print", example: 'bola "Hello"' },
        { keyword: "agar", meaning: "if", example: 'agar x > 5 tab' },
        { keyword: "nahi ta", meaning: "else", example: 'nahi ta\n  bola "No"' },
        { keyword: "jab tak", meaning: "while", example: 'jab tak x < 10 tab' },
        { keyword: "bas kar", meaning: "break/end", example: 'bas kar' },
        { keyword: "sahi", meaning: "true", example: 'bhai flag = sahi' },
        { keyword: "galat", meaning: "false", example: 'bhai flag = galat' },
    ];

    return (
        <section id="docs" className="py-24 relative">
             <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
                        Cheat <span className="text-bhoj-saffron">Sheet</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Everything you need to speak Bhojpuri with your computer.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {keywords.map((k, i) => (
                        <KeywordCard key={k.keyword} {...k} delay={i * 0.05} />
                    ))}
                    
                    <div className="md:col-span-2 lg:col-span-4 text-center mt-8">
                        <p className="text-gray-500 font-medium italic animate-pulse">
                            Auri Dher Saara Keywords Aawata... ✨
                            <br/>
                            <span className="text-xs not-italic text-gray-600">(More keywords coming soon)</span>
                        </p>
                    </div>
                </div>
             </div>
        </section>
    );
};

export default Documentation;
