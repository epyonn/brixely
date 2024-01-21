import React from 'react';

const Header: React.FC = () => {
    return (
        <header className='flex justify-between items-center h-[50px] bg-blue-500 px-20 py-8'>
            <div className='text-white'>
                <p> Brixely </p>
            </div>
            <div className='text-white'>
                <p> other side </p>
            </div>
            
        </header>
    );
}


export default Header;