import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';
import { PiLightning } from 'react-icons/pi';
import { CgFileDocument } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";



import '../App.css';

const Description: React.FC = () => {
    const steps = [
        {
            icon: <CgFileDocument />,
            title: 'Upload the docs',
            description: 'Provide the disclosure packet for any given property into your Brixely account.'
        },
        {
            icon: <PiLightning />,
            title: 'Analyze w/ Brixely AI',
            description: 'Receive a comprehensive report with pivotal details and chat assistant familiar with the property.'
        },
        {
            icon: <FiPhone />,
            title: 'Close the Deal',
            description: 'Built-in intelligent checklist evaluates for risks to help you make timely decisions for yourself or your clients.'
        }
    ]

    return (
        <div className='flex flex-row w-full mt-12 justify-center items-center mx-auto no-ligatures' style={{fontFamily: 'Liga-Sans'}}>
            {steps.map((step, i) => (
                <div className='m-10'>
                    <BackgroundGradient className="rounded-[22px] w-[350px] min-w-[100px] min-h-[200px] sm:p-0">
                        <div className="bg-white dark:bg-zinc-900 p-4 rounded-[20px] min-w-[100px] min-h-[200px]">
                            {/* Use text size utilities directly for the title. Adjust the size as needed */}
                            {step.icon}
                            <p className="text-2xl sm:text-3xl lg:text-3xl text-black mt-4 mb-2 dark:text-neutral-200">
                               {step.title}
                            </p>
                            {/* Keep the description text smaller for readability */}
                            <p className="text-sm lg:text-base text-neutral-600 dark:text-neutral-400">
                                {step.description}
                            </p>
                        </div>
                    </BackgroundGradient>
                </div>
            ))}
        </div>
    )
}

export default Description;