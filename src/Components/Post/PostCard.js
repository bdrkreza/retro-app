import React from 'react';
import { Link } from 'react-router-dom';
import { recentPostData } from '../../assets/FakeData/FakeData';
import imgCover from '../../assets/image/img5.webp'

const PostCard = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-10 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/1">
                            <div class="md:p-2 p-1 w-full">
                                <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                                    <img alt="gallery" class="w-full object-cover h-full object-center block opacity-70 absolute inset-0" src={imgCover} />
                                    <div class="text-center relative z-10 w-full">
                                        <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                        <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                        <Link class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            {
                                recentPostData.map((data) =>
                                    <div class="px-2 mb-2  w-1/2">
                                        <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                            <img alt="gallery" class="w-full object-cover h-full object-center block opacity-70 absolute inset-0" src={data.img} />
                                            <div class="text-center relative z-10 w-full">
                                                <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                                                <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
                                                <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PostCard;