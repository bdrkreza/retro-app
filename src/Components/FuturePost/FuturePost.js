import React, { useEffect, useState } from 'react';
import { recentPostData } from '../../assets/FakeData/FakeData';


const FuturePost = () => {

    const [loading, setLoading] = useState(null)
    const [blogs, setBlogs] = useState([]);
    console.log(blogs)
    useEffect(() => {
        fetch('https://blogs-hero-app.herokuapp.com/blogs')
            .then(res => res.json())
            .then((data) => {
                setBlogs(data);
                setLoading(data);
            })

    }, [])

    return (
        <div>
            <section class="blog text-gray-700 body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Future Post</h1>
                        <p class="lg:w-1/2 w-full leading-relaxed text-base">
                            J'aime bien partager mes connaissances et des recherche intéressantes, pour le faire j'ai mis en place un blog personnel.
                            Nous abordons plusieurs sujets intéressants et je donne quelques astuces et conseils aux jeunes développeurs pour mieux s'en sortir.          </p>
                    </div>

                    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        {
                            blogs.map((data) =>
                                <>
                                    <div class="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                                        <div class="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center" style={{ backgroundImage: `url(${`data:image/png;base64,${data.image?.img}`})` }}></div>

                                        <div class=" w-80 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">

                                            <div class="header-content inline-flex ">
                                                <div class="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                                                    <div class="h-2 w-2 rounded-full m-1 bg-purple-500 " ></div>
                                                </div>
                                                <div class="category-title flex-1 text-sm">
                                                    {data.name}
                                                </div>
                                            </div>
                                            <div class="title-post font-medium">{data.title}</div>

                                            <div class="summary-post text-base text-justify">{data.description}
                                                <button class="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "><span class="">Lire plus</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>

                </div>
            </section>
        </div>
    );
};

export default FuturePost;