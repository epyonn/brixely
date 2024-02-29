import React from 'react';
import { ReactComponent as LogoSVG } from '../assets/images/x-social-media-logo-icon.svg';
import { CiLock } from "react-icons/ci";

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col w-full h-[150px] p-10">
            
            <div className="flex flex-row w-full h-[100px] items-center justify-between">
                <h1 className='text-black text-3xl font-extrabold '> Brixely </h1>
                
                <div className="flex justify-center items-center space-x-4">
                    <h3>Privacy Policy</h3>
                    <h3>Security Policy</h3>
                    <h3>Terms of use</h3>
                </div>
                
                <a href="https://example.com" target="_blank" rel="noopener noreferrer" >
                    <LogoSVG className="h-8 w-8"/>
                </a>

            </div>
        </div>
    );
}

export default Footer;
