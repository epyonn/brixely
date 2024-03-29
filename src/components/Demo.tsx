"use client";
import React from 'react';
import background from '../assets/purple_background.mp4';
import Draggable from 'react-draggable';
import { BiPaperPlane } from "react-icons/bi";
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import '../App.css';

const Demo: React.FC = () => {  
    const words = [
        {
            text: 'Rethink',
            className: 'text-xl'

        },
        {
            text: 'Real',
            className: 'text-xl'

        },
        {
            text: 'Estate',
            className: 'text-xl'

        }
    ];

    return (
        <div className='relative flex justify-center items-center h-[800px]'>
            <div className='relative w-[90%] h-[100%] overflow-hidden' style={{ borderRadius: '20px' }}>
                <video 
                    className='absolute top-0 left-0 w-full h-full object-cover'
                    src={background} 
                    autoPlay 
                    loop 
                    muted 
                />
        <Draggable
            defaultPosition = {{ x: 100, y: 100}}
        >
            <div className='flex flex-col space-y-3 w-full h-full object-cover'>
                <div className='rounded-lg shadow-lg w-[800px] h-[70px] align-items justify-content' style={{ opacity: 0.8, backgroundColor: 'white' }}> 
                    <div className='flex flex-row justify-between items-center h-full p-3' >   
                        <TypewriterEffectSmooth words={words}  />

                    <div className='flex-end rounded-lg p-1.5 ' style={{ backgroundColor: '#DADADA', }}>
                        <div style={{ color: 'black', opacity: 1 }} >
                            <BiPaperPlane style={{ opacity: 1 }} />
                        </div>
                    </div>
                    </div>

                </div>
                <div className='p-4 rounded-lg shadow-lg w-[800px]' style={{ opacity: 0.8, backgroundColor: 'white' }}>
                    <span className='flex flex-row justify-between items-center'>
                        <p>Brixely's AI-powered real estate assistant delivers trustworthy answers by leveraging well-cited <br/> real estate sources and your private data</p>
                    </span>
                    <div>
                        <span className='flex flex-row justify-between items-center p-3 rounded-lg mt-1' style={{  backgroundColor: '#f9f9f9'}}>
                            <p className='text-black' style={{ opacity: 1}}> Book a demo</p>
                            <div className='flex-end rounded-lg p-1.5' style={{ backgroundColor: '#DADADA'}}>
                            <div style={{ color: 'black', opacity: 1 }} >
                                <BiPaperPlane style={{ opacity: 1 }} />
                            </div>
                        </div>
                        </span>
                        
                   </div>
                </div>
            </div>
        </Draggable>


            </div>
        </div>
    );
}

export default Demo;