import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import img from '../../../assets/image/img.jpeg'


const AddPosts = () => {
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const formData = new FormData()
        formData.append('file', picture);
        formData.append('name', data.name);
        formData.append('title', data.title);
        formData.append('description', data.description);
        setLoading(true);

        fetch('https://blogs-hero-app.herokuapp.com/addBlogs', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Create service successfully')
                }
                setLoading(false);
            })
    }

    const onChangePicture = e => {
        if (e.target.files[0]) {
            console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };


    return (
        <div>
            <div class="container mx-auto">
                <div class="flex justify-center px-6 my-12">

                    <div class="w-full xl:w-3/4 lg:w-11/12 flex">

                        <div
                            class="w-full h-auto bg-gray-400  lg:block lg:w-1/2 bg-cover rounded-l-lg"
                            style={{ backgroundImage: `url(${img})` }}

                        >
                            <img src={imgData} alt="" />
                        </div>

                        <div class="w-full lg:w-1/2 bg-white p-2 rounded-lg lg:rounded-l-none">
                            <div class="px-8 text-center">
                                <h3 class="pt-4 text-2xl">Create Posts!</h3>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} class="px-8 pt-6 pb-8 mb-4 bg-white rounded">

                                <div class="grid grid-cols-1 space-y-2">
                                    <label class="text-sm font-bold text-gray-500 tracking-wide">Name</label>
                                    <input {...register("name", { required: true })} class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="" placeholder="mail@gmail.com" />
                                    {errors.name && <span className="text-red-500">Name is required</span>}
                                </div>

                                <div class="grid grid-cols-1 space-y-2 mt-2">
                                    <label class="text-sm font-bold text-gray-500 tracking-wide">Title</label>
                                    <input {...register("title", { required: true })} class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500" type="" placeholder="mail@gmail.com" />
                                    {errors.title && <span className="text-red-500">Title is required</span>}
                                </div>


                                <div>
                                    <label htmlFor="about" className="block text-sm font-medium text-gray-700 mt-2">
                                        Description
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            {...register("description", { required: true })}
                                            id="about"
                                            rows={3}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            placeholder=" Description"
                                            defaultValue={''}
                                        />
                                        {errors.description && <span className="text-red-500">Description is required</span>}
                                    </div>
                                </div>

                                <div class="mt-5">
                                    <label class="w-64 flex flex-col items-center px-1 py-1 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-red-800">
                                        <svg class="w-10 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                                        </svg>
                                        <span class="mt-2 text-base leading-normal">Select a Image</span>
                                        <input onChange={onChangePicture} type="file" id="file-ip-1" accept="image" required className="hidden" />
                                        {errors.file && <span className="text-red-500">Image is required</span>}
                                    </label>
                                </div>

                                <hr class="mb-6 mt-5 border-t" />
                                <div class="mb-6 text-center">
                                    <button
                                        disabled={loading}
                                        class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Upload Post
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPosts;