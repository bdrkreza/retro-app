import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faHome,
    faDog,
    faBone,
    faCog
} from "@fortawesome/free-solid-svg-icons"


const SideBarCard = () => {
    return (
        <>
            <a href="#" className="no-underline block mt-6">
                <img
                    src="https://gustui.s3.amazonaws.com/Gust+Logo+White.png"
                    className="w-40 mx-auto"
                />
            </a>
            <div className="flex-1 mt-8">
                <div className="mt-6">
                    <a
                        href="#"
                        className="flex justify-between no-underline w-full px-8 py-3 border-l-4 text-sm transition-colors duration-200 ease-in-out hover:text-blue-400 bg-blue-900 border-blue-400"
                    >
                        <div>
                            <FontAwesomeIcon icon={faHome} className="mr-4" /> Home
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-blue-400"
                    >
                        <div>
                            <FontAwesomeIcon icon={faDog} className="mr-4" /> Dogs
                        </div>
                        <button type="dark" text="3" />
                    </a>
                    <a
                        href="#"
                        className="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-blue-400"
                    >
                        <div>
                            <FontAwesomeIcon icon={faBone} className="mr-4" /> Bones
                        </div>
                    </a>
                    <a
                        href="#"
                        className="flex justify-between no-underline w-full px-8 py-3 border-l-2 border-transparent text-sm transition-colors duration-200 ease-in-out hover:text-blue-400"
                    >
                        <div>
                            <FontAwesomeIcon icon={faCog} className="mr-4" /> Settings
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
};

export default SideBarCard;