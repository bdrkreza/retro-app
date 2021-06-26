import { useState } from "react";
import "../../../App.css";
import FuturePosts from "../FuturePost/FuturePosts";
import RecentPost from "../RecentPost/RecentPost";



function BlogPosts() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div className="mt-5 ">
            <div className="bloc-tabs ">
                <button
                    className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(1)}
                >
                    RecentPosts
                </button>
                <button
                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => toggleTab(2)}
                >
                    FuturePosts
                </button>
            </div>

            <div className="">
                <div
                    className={toggleState === 1 ? "tabs_content  active-content" : "tabs_content"}
                >

                    <RecentPost />
                </div>

                <div
                    className={toggleState === 2 ? "tabs_content active-content" : "tabs_content"}
                >
                    <FuturePosts />
                </div>
            </div>
        </div>
    );
}

export default BlogPosts;
