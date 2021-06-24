import React from 'react';
import img from '../../assets/image/img.jpeg'

const HeroSection = () => {
    return (
        <>
            <header class="bg-white dark:bg-gray-800 px-10">
                <div class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-128 lg:py-16 lg:flex-row lg:items-center lg:space-x-6">
                    <div class="w-full lg:w-1/2">
                        <div class="lg:max-w-lg">
                            <h1 class="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">Must-Read Blogs for Web Developers</h1>
                            <p class="mt-2 text-gray-600 dark:text-gray-300">Web developers around the world share the desire to write, debug, and ship code day in and day out. It’s not an easy job since most of the time you’re constantly learning on the fly. But with great study and work habits, becoming an experienced web developer is attainable (especially if you’re considering a Thinkful Engineering Immersion or Engineering Flex course).</p>
                            <div class="grid gap-6 mt-8 sm:grid-cols-2">
                                <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span>Web Design</span>
                                </div>

                                <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span>JavaScript</span>
                                </div>

                                <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span>React js</span>
                                </div>

                                <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span>node js</span>
                                </div>

                                <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span>Bootstrap</span>
                                </div>

                                <div class="flex items-center space-x-6 text-gray-800 dark:text-gray-200">
                                    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                    </svg>

                                    <span>redux</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img class="object-cover w-full h-full max-w-2xl rounded-md" src={img} />
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeroSection;