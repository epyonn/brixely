import React from 'react';
import { CiLock } from "react-icons/ci";
import { MdLockOutline } from "react-icons/md";



const Header: React.FC = () => {
    return (
        <header className='flex justify-between items-center h-[100px] px-20 py-8' >
            <div className='text-black text-3xl font-extrabold'>
                <h1> Brixely </h1>
            </div>
            <div className='flex items-center space-x-1 p-1.5 text-black text-xl border border-black p-1 rounded-lg font-extrabold'>
            
                <a href="https://app.brixely.com">
                Login
                </a>
                <MdLockOutline />

            </div>
        </header>
    );
}

export default Header;