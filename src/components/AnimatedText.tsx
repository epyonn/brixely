import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import '../App.css';

const AnimatedText: React.FC = () => {
    const { scrollYProgress } = useViewportScroll();
    const [opacities, setOpacities] = useState<number[]>([]);

    const text = `Transforming the real estate sector with AI. Brixely empowers firms and legal professionals by aggregating knowledge and simplifying real estate workflows.`;
    const words = text.split(' ');

    useEffect(() => {
        const updateOpacities = () => {
            const scrollY = scrollYProgress.get();
            // Calculate opacity for each word based on scroll position
            const newOpacities = words.map((_, index) => {
                // Divide the scroll range based on the number of words
                const segmentLength = 1 / words.length;
                const startOfSegment = segmentLength * index;
                
                if (scrollY >= startOfSegment && scrollY < startOfSegment + segmentLength) {
                    // Calculate opacity based on position within the current segment
                    const progressInSegment = (scrollY - startOfSegment) / segmentLength;
                    return Math.min(1, Math.max(0, progressInSegment));
                } else if (scrollY >= startOfSegment + segmentLength) {
                    return 1; // Word is fully opaque if we've scrolled past its segment
                }
                return 0; // Word is transparent if we haven't reached its segment
            });

            setOpacities(newOpacities);
        };

        const unsubscribe = scrollYProgress.onChange(updateOpacities);
        updateOpacities(); // Initial update

        return () => unsubscribe();
    }, [scrollYProgress, words.length]);

    return (
        <div className='flex mt-12 pt-8 w-4/5 justify-center no-ligatures' style={{ fontFamily: 'Liga-Sans' }}>
            <h1 className='prose prose-2xl text-7xl'>
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        style={{ opacity: opacities[index] ?? 0, display: 'inline-block', marginRight: '8px' }}
                    >
                        {word}
                    </motion.span>
                ))}
            </h1>
        </div>
    );
}

export default AnimatedText;

