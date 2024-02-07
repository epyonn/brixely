import React from 'react';

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
                    <div key={i} className='prose prose-base w-[300px] h-[500px] m-10'>
                        <h1>{step.title}</h1>
                        <p>{step.description}</p>
                    </div>
                )
            })}

        </div>
    )
}

export default Description;