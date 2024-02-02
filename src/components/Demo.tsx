import React from 'react';
import background from '../assets/purple_background.mp4';
import Draggable from 'react-draggable';
import { BiPaperPlane } from "react-icons/bi";

const Demo: React.FC = () => {  
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
<Draggable>
    <div className='flex flex-col space-y-4 w-full h-full object-cover'>
        <div className='p-4 rounded-lg shadow-lg w-[400px]' style={{ opacity: 0.8, backgroundColor: 'white' }}>
            <span className='flex flex-row justify-between items-center'>
                <p>Rethink Real Estate</p>
                <div className='flex-end'>
                    <BiPaperPlane />
                </div>
            </span>
        </div>
        <div className='p-4 rounded-lg shadow-lg w-[400px]' style={{ opacity: 0.8, backgroundColor: 'white' }}>
            <span className='flex flex-row justify-between items-center'>
                <p>Rethink Real Estate</p>
                <div className='flex-end'>
                    <BiPaperPlane />
                </div>
            </span>
        </div>
    </div>
</Draggable>


            </div>
        </div>
    );
}

export default Demo;
