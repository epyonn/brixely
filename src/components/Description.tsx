import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';
import '../App.css';

const Description: React.FC = () => {
    const steps = [
        {
            title: 'Upload the docs',
            description: 'Provide the disclosure packet for any given property into your Brixely account.'
        },
        {
            title: 'Analyze w/ Brixely AI',
            description: 'Receive a comprehensive report with pivotal details and chat assistant familiar with the property.'
        },
        {
            title: 'Close the Deal',
            description: 'Built-in intelligent checklist evaluates for risks to help you make timely decisions for yourself or your clients.'
        }
    ]

    return (
        <div className='flex flex-row w-[100%] mt-12 justify-center items-center mx-auto no-ligatures' style ={{fontFamily: 'Liga-Sans'}}>
            {steps.map((step, i) => {
                return (

                    <div className='gradient-border-wrapper m-5'>
                        <BackgroundGradient className="rounded-[22px] max-w-sm p-1 sm:p-1">
                            <div className="bg-white dark:bg-zinc-900 p-4 rounded-[20px]"> {/* Adjust padding and rounded corners as needed */}
                            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                                Air Jordan 4 Retro Reimagined
                            </p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
                                February 17, 2024. Your best opportunity to get these right now is by
                                entering raffles and waiting for the official releases.
                            </p>
                            <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                <span>Buy now </span>
                                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                $100
                                </span>
                            </button>
                            </div>
                        </BackgroundGradient>
                    </div>
                )
            })}

        </div>
    )
}

export default Description;