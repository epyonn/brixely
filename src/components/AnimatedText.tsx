import React, { useEffect, useState, useRef } from 'react';
import { motion, useViewportScroll } from 'framer-motion';
import '../App.css';

const AnimatedText: React.FC = () => {
    const ref = useRef<HTMLHeadingElement>(null);
    const { scrollY } = useViewportScroll();
    const [opacities, setOpacities] = useState<number[]>([]);

    const text = `Transforming the real estate sector with AI. Brixely empowers firms and legal professionals by aggregating knowledge and simplifying real estate workflows.`;
    const words = text.split(' ');

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const elementTop = ref.current.offsetTop;
            const elementHeight = ref.current.offsetHeight;
            const viewportHeight = window.innerHeight;
            const currentScroll = window.scrollY;

            // Extend the endTransition further to ensure more scrolling is required to make all text fully opaque
            const offset = -800; // Increase or adjust this value based on your layout
            const startTransition = elementTop - viewportHeight;
            const endTransition = elementTop + elementHeight + offset;

            // Determine how much of the scroll progress should affect each word, including the additional range for smoother transitions
            const scrollRangePerWord = (endTransition - startTransition) / words.length;

            const newOpacities = words.map((_, index) => {
                // Calculate start and end scroll positions for each word, adjusting for a more gradual transition
                const wordStart = startTransition + scrollRangePerWord * index;
                const wordEnd = wordStart + scrollRangePerWord; // Adjust this range if needed for smoother transitions

                // Adjust opacity based on the word's current scroll position
                if (currentScroll < wordStart) {
                    return 0.2; // Before the word starts appearing, it's less opaque
                } else if (currentScroll >= wordStart && currentScroll <= wordEnd) {
                    // Calculate opacity based on scroll position within the word's range
                    const opacityIncrement = (currentScroll - wordStart) / (wordEnd - wordStart);
                    return 0.2 + (0.8 * opacityIncrement); // Gradually increase opacity
                } else {
                    return 1; // Once the scroll is past the word's range, it's fully opaque
                }
            });

            setOpacities(newOpacities);
        };

        // Initialize opacity
        handleScroll();

        // Add and remove scroll event listener
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [words.length]); // Dependency on words.length ensures recalculation if the text changes

    return (
<div className='flex justify-center'>
    <div className='flex mt-12 pt-8 w-[90%] no-ligatures' style={{ fontFamily: 'Liga-Sans' }}>
        <h1 ref={ref} className='prose prose-2xl text-7xl'>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    style={{ opacity: opacities[index] ?? 0.2, display: 'inline-block', marginRight: '8px' }} // Start with initial opacity
                >
                    {word}
                </motion.span>
            ))}
        </h1>
    </div>
</div>
    );
};

export default AnimatedText;
