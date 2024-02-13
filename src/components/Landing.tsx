import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import '../App.css';

const Landing: React.FC = () => {
    const [text, setText] = useState("inspections");

    useEffect(() => {
        const interval = setInterval(() => {
            setText(prevText => prevText === "inspections" ? "disclosures" : "inspections");
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className='flex flex-col justify-center items-center h-[300px]' >
                <div className='prose-2xl w-150 text-center '>
                <h1 > 
                    Analyzing hundreds of pages <br />
                    of a home disclosure packet, <span className='text-gradient font-bold'>fast</span>.
                </h1>
                </div>

                <div className='flex justify-center '>
                    <p className='text-center text-gray-700 text-3xl mr-1'>
                        Your AI assistant trained on property's
                    </p>
                    <p className='text-center text-3xl'>
                        <AnimatePresence mode='wait'>
                            <motion.span
                                key={text}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -50, opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className='text-gradient font-bold'
                                style={{ width: '500px', fontWeight: 'bold' }} // Set a fixed width for consistent spacing and make the text bold
                                >
                                {text}
                            </motion.span>
                        </AnimatePresence>
                    </p>
                    <p className='text-center text-gray-700 text-3xl mr-1'>
                      .
                    </p>
                </div>
                <div className='flex flex-row justify-center items-center mt-10 '>
                    <button className='flex flex-row justify-center items-center p-2 border rounded-lg w-[140px] h-[40x]' style={{backgroundColor: 'black'}}>
                        <span style={{ color: 'white' }}>
                            Join Waitlist
                        </span>
                        <div className='flex-end'>
                            <FaEnvelope className="ml-2 justify-center items-center flex"  style={{ color: 'white' }}/> 

                        </div>
                        
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Landing;