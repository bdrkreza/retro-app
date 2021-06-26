import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import DashHeader from '../DashHeader/DashHeader';
import Overview from '../SideMenu/Overview/Overview';
import BlogPosts from '../SideMenu/blogPosts/BlogPosts';
import Settings from '../SideMenu/Settings/Settings';
import DashboardAvatar from '../DashboardAvatar/DashboardAvater';
import AddPosts from '../SideMenu/AddPosts/AddPosts';
import RecentPost from '../SideMenu/RecentPost/RecentPost';
import ReadPosts from '../SideMenu/ReadPost/ReadPosts';
import PostEdit from '../SideMenu/PostEdit/PostEdit';

// const myStyle = {
//     background: '#191919'
// }

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}
            <SideBar url={url} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {/* Content area */}
            <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-gray-900">

                {/*  Site header */}
                <DashHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <DashboardAvatar url={url} />
                <Switch >
                    <Route path={`${path}/overview`} component={Overview} />
                    <Route path={`${path}/blogPosts`} component={BlogPosts} />
                    <Route path={`${path}/settings`} component={Settings} />
                    <Route path={`${path}/addPosts`} component={AddPosts} />
                    <Route path={`${path}/editPost`} component={PostEdit} />
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;