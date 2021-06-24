import React from 'react';
import { recentPostData } from '../../assets/FakeData/FakeData';

import RecentPostCard from './RecentPostCard';
const RecentPost = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {
                            recentPostData.map((data) =>
                                <div class="p-4 md:w-1/3">
                                    <RecentPostCard post={data} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default RecentPost;