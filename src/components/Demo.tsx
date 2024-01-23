import React from 'react';
import background from '../assets/purple_background.mp4';

const Demo: React.FC = () => {  
    return (
        <div className='flex justify-center items-center w-100 h-[800px] ' style={{overflow: 'hidden' }} >
            <video 
                className='w-[90%] h-[100%] object-cover '
                src={background} 
                autoPlay 
                loop 
                muted 
                style={{ borderRadius: '20px' }} // Add this line
            />
        </div>
    );
}

export default Demo;
