import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, code, description, delay }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="glass-panel p-8 rounded-2xl hover:scale-105 hover:bg-white/10 transition-all duration-300 group cursor-default"
        >
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-bhoj-saffron transition-colors">{title}</h3>
            <div className="bg-black/60 rounded-xl p-4 mb-4 font-mono text-sm text-green-400 overflow-x-auto border border-white/5 shadow-inner">
                <pre>{code}</pre>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

export default FeatureCard;
