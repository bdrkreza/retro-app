import React from 'react';
import PostCard from './PostCard';
import MostReadPost from '../MostReadPost/MostReadPost';
import { recentPostData } from '../../assets/FakeData/FakeData';
const Post = () => {
    return (
        <>
            <div class="grid grid-cols-3 gap-1 mb-5">
                <div class="col-span-2">
                    <PostCard />
                </div>

                <div class="w-full">
                    <h1 className="text-2xl uppercase mb-3">Most Read Post</h1>
                    {
                        recentPostData.map((data) => <MostReadPost data={data} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Post;