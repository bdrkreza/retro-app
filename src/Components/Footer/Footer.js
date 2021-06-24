import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="flex justify-center px-4 text-gray-200 bg-gray-500  dark:text-white dark:bg-gray-800">

                <section class="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">

                    <div class="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">

                        <div class="px-6 py-6 md:px-8 md:py-0">
                            <h2 class="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100">Sign Up For <span class="text-blue-600 dark:text-blue-400 md:text-blue-300">Updates</span> News</h2>

                            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
                        </div>

                    </div>

                    <div class="flex items-center justify-center bg-gray-800 pb-6 md:py-0 md:w-1/2">
                        <form>
                            <div class="flex flex-col overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row">
                                <div class="flex flex-wrap justify-between md:flex-row">
                                    <input type="email" class="p-2 m-1 text-sm text-gray-700 appearance-none focus:outline-none focus:placeholder-transparent" placeholder="Enter your email" aria-label="Enter your email" />
                                    <button class="w-full p-2 m-1 text-sm font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded-md lg:w-auto hover:bg-gray-700">subscribe</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </section>
            </footer>
        </div>
    );
};

export default Footer;