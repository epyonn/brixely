import React from 'react';
import background from '../assets/purple_background.mp4';
import Draggable from 'react-draggable';

const Demo: React.FC = () => {  
    return (
        <div className='relative flex justify-center items-center h-screen'>
            {/* Container for the video and the draggable div */}
            <div className='relative w-[90%] h-[90%] overflow-hidden' style={{ borderRadius: '20px' }}>
                <video 
                    className='absolute top-0 left-0 w-full h-full object-cover'
                    src={background} 
                    autoPlay 
                    loop 
                    muted 
                />

                <Draggable bounds="parent">
                    <div className='absolute p-4 bg-white rounded-lg shadow-lg' style={{ top: '10%', left: '10%' }}>
                        <p>Drag me around!</p>
                    </div>
                </Draggable>
            </div>
        </div>
    );
}

export default Demo;
