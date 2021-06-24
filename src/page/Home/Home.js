import React from 'react';
import Header from '../../Components/Header/Header';
import RecentPost from '../../Components/RecentPost/RecentPost';
import Post from '../../Components/Post/Post';
import Footer from '../../Components/Footer/Footer';
import FuturePost from '../../Components/FuturePost/FuturePost';
import About from '../About/About';
import Navbar from '../../Components/Navbar/Navbar'
const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <RecentPost />
            <Post />
            <FuturePost />
            <About />
            <Footer />
        </div>
    );
};

export default Home;