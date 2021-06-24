import React, { useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SideBar from '../SideBar/SideBar';
import DashHeader from '../DashHeader/DashHeader';

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
                <Switch >
                    {/* <Route path={`${path}/dashboard`} component={Dashboard} /> */}
                    {/* <Route path={`${path}/orders`} component={Orders} />
                    <Route path={`${path}/stores`} component={Stores} />
                    <Route path={`${path}/blogs`} component={Blogs} />
                    <Route path={`${path}/settings`} component={Settings} />
                    <Route path={`${path}/shipment`} component={Shipment} />
                    <Route path={`${path}/employee`} component={Employee} /> */}
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;