import React, { useEffect, useState } from 'react';
import FuturePostCard from './FuturePostCard';


function FuturePosts() {

    const [loading, setLoading] = useState(null)
    const [blogs, setBlogs] = useState([]);

    const BlogPost = () => {
        fetch('https://blogs-hero-app.herokuapp.com/blogs')
            .then(res => res.json())
            .then((data) => {
                setBlogs(data);
                setLoading(data);
            })
    }

    useEffect(() => {
        BlogPost()
    }, [])



    return (
        <div className="flex flex-col">
            <h1 className="text-2xl text-center mt-5 uppercase text-gray-400">Future Post</h1>
            <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-4">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Title
                                    </th>

                                    <th
                                        scope="col"
                                        className="px-6 py-3 whitespace-nowrap text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Role
                                    </th>
                                    <th scope="col" className="relative px-6 py-3 whitespace-nowrap">
                                        <span className="">Action</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="backgroundColor divide-y divide-gray-200 text-gray-300">
                                {blogs.map((postData) => <FuturePostCard BlogPost={BlogPost} post={postData} />)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FuturePosts;
