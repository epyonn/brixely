import React from 'react';
import '../App.css';

const AnimatedText: React.FC = () => {
    return (
        <div className='flex mt-12 pt-8 w-4/5 justify-center no-ligatures' style={{fontFamily: 'Liga-Sans'}}>
            <h1 className='prose prose-2xl text-7xl'>
                Transforming the real estate sector with AI. <br /> 
                Brixely empowers firms and legal <br /> 
                professionals by aggregating knowledge and <br/> 
                simplifying real estate workflows.
            </h1>
        </div>
    )
}

export default AnimatedText;