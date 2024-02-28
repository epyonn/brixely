
import React from 'react';

const Footer:React.FC = () => {
    return (
        <div className="flex flex-col w-full h-[150px] p-10">
            <div className="flex flex-row w-full h-[100px] items-center justify-center">
                <div>
                    <h1 className='text-black text-3xl font-extrabold'> Brixely </h1>
                </div>
                <div>
                    <h3>Privacy Policy</h3>
                    <h3> Security Policy </h3>
                    <h3> Terms of use </h3>
                </div>
            </div>
        </div>
    )
}

export default Footer;