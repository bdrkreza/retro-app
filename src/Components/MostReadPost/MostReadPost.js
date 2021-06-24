import React from 'react';

const MostReadPost = ({ data }) => {
    return (
        <>
            <div class="mb-3 mr-10">
                <div class="h-full flex items-center border-gray-200 border p-5 rounded-lg">
                    <img alt="team" class="w-50 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4" src={data.img} />
                    <div class="flex-grow" >
                        <h2 class="text-gray-900 title-font font-medium">{data.name}</h2>
                        <p class="text-gray-500">{data.title}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MostReadPost;