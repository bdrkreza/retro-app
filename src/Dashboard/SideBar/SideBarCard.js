import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHome,
    faCog,
    faList,
    faInbox
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";


const SideBarCard = ({ url }) => {
    return (
        <>
            <h3 className="text-lg uppercase text-yellow-500 font-bold pl-3">Menu</h3>
            <div className="flex-1 mt-8">
                <div className="mt-6">
                    <Link
                        to="/home"
                        className="flex justify-between no-underline w-full px-8 py-3 border-l-4 text-sm transition-colors duration-200 ease-in-out hover:text-blue-400 bg-blue-900 border-blue-400"
                    >
                        <div>
                            <FontAwesomeIcon icon={faHome} className="mr-4" /> Home
                        </div>
                    </Link>
                    <Link
                        to={`${url}/overview`}
                        className="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-blue-400"
                    >
                        <div>
                            <FontAwesomeIcon icon={faList} className="mr-4" /> Overview
                        </div>
                        <button type="dark" text="3" />
                    </Link>
                    <Link
                        to={`${url}/blogPosts`}
                        className="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:border-l-2"
                    >
                        <div>
                            <FontAwesomeIcon icon={faList} className="mr-4" /> Posts
                        </div>
                    </Link>
                    <Link
                        to={`${url}/settings`}
                        className="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-blue-400"
                    >
                        <div>
                            <FontAwesomeIcon icon={faInbox} className="mr-4" />Inbox
                        </div>
                    </Link>

                    <Link
                        to={`${url}/settings`}
                        className="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-blue-400"
                    >
                        <div>
                            <FontAwesomeIcon icon={faCog} className="mr-4" /> Settings
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
};

export default SideBarCard;