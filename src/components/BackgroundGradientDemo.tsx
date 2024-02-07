"use client"
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from '@tabler/icons-react';


export function BackgroundGradientDemo() {
  return (
    <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 overflow-hidden relative">
      {/* Wrapper to simulate the border effect with padding */}
      <div className="relative bg-white dark:bg-zinc-900 rounded-[22px]">
        {/* Your actual content */}
        <div className='p-4 sm:p-10'> {/* Adjust padding as necessary */}
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
      </div>
    </BackgroundGradient>
  );
}