import React from 'react';
import FeatureCard from './FeatureCard';

const Features = () => {
    const features = [
        {
            title: "Variables",
            code: `bhai naam = "Pandey"
bola naam`,
            description: "Declare variables using 'bhai'. Everything starts with brotherhood here."
        },
        {
            title: "Conditionals",
            code: `agar marks > 33 tab
  bola "Pass ho gayil"
nahi ta
  bola "Fail"
bas kar`,
            description: "Logic is simple. 'agar' (if), 'nahi ta' (else), and close it with 'bas kar'."
        },
        {
            title: "Loops",
            code: `bhai i = 0
jab tak i < 5 tab
  bola i
  bhai i = i + 1
bas kar`,
            description: "Keep going 'jab tak' (while) the condition is true."
        },
        {
            title: "Printing",
            code: `bola "Namaste World"`,
            description: "Just say 'bola' to speak to the world."
        }
    ];

    return (
        <section id="features" className="py-20 relative z-10">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-heading text-center mb-16 text-white">
                    Language <span className="text-bhoj-saffron">Specifications</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
