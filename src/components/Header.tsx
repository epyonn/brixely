import React from 'react';

const Header: React.FC = () => {
    return (
        <header className='flex justify-between items-center h-[100px] px-20 py-8' style={{ fontFamily: 'Space Grotesk' }}>
            <div className='text-black text-2xl'>
                <h1> Brixely </h1>
            </div>
            <div className='text-black text-2xl border p-1 rounded-lg'>
                <span> Log In </span>
            </div>
            
        </header>
    );
}


export default Header;