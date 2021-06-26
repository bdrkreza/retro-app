import React from 'react';
import { Link } from 'react-router-dom';

const FuturePostCard = ({ post, BlogPost }) => {

    const postDelete = (postId) => {
        fetch(`https://blogs-hero-app.herokuapp.com/postsDelete/${postId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                BlogPost();
                if (data) {
                    alert('Post Delete successfully')
                }
            })
    }

    const { name, title, _id } = post;
    return (
        <>
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={`data:image/png;base64,${post.image?.img}`} alt="" />
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium">{name}</div>
                            <div className="text-sm text-gray-500">{title}</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">{title}</div>
                    {/* <div className="text-sm text-gray-500">{description}</div> */}
                </td>

                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300"></td>
                {/* action */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div class="flex item-center justify-center">
                        <div class="w-6 mr-3 transform hover:text-purple-500 hover:scale-110 text-blue-200 cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <Link to={`/editPost/${_id}`} >
                            <div class="w-6 mr-3 transform hover:text-purple-500 hover:scale-110 text-blue-500 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                                    <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </Link>
                        <div onClick={() => postDelete(_id)} class="w-6 transform hover:text-purple-500 hover:scale-110 cursor-pointer text-red-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default FuturePostCard;