import { Link, NavLink, Outlet } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
const UserDashboard = ({ isSideMenuOpen, toggleSideMenu }) => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <div
            className={`flex h-screen bg-white ${isSideMenuOpen ? "overflow-hidden" : ""
                }`}
        >
            <aside className="z-20 flex-shrink-0 hidden w-60 pl-2 overflow-y-auto bg-white md:block">
                <div>
                    <div className="text-blue-950 flex flex-col justify-between">
                        <div className="">
                            <div className="flex p-2  bg-white">
                                <div className="flex py-3 px-2 items-center">
                                    <NavLink to={"/"}>
                                        <h2 className="hidden md:block md:text-3xl text-xl font-semibold">
                                            CSq<span className="text-[#409bd4]">Task Manager</span>
                                        </h2>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className="flex  flex-col justify-center items-center">
                                    <img
                                        className="hidden h-12 w-12 rounded-full sm:block object-cover mr-2 border-2 border-blue-400"
                                        src={user?.photoURL}
                                        alt=""
                                    />
                                    <p className="font-semibold text-base  text-gray-700 pt-2 text-center w-full">
                                        {user?.displayName}
                                    </p>
                                    <Link to="userMyProfile">
                                        <button className="btn btn-sm">View Profile</button>
                                    </Link>
                                </div>
                            </div>
                            <div className=" flex flex-col justify-between">
                                <ul className="mt-6 leading-10">
                                    <li className="relative px-2 py-1 ">
                                        <NavLink
                                            className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                                            to={"home"}
                                        >
                                            <AiOutlineHome className="text-lg" />
                                            <span className="ml-4">Home</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative px-2 py-1 ">
                                        <NavLink
                                            className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600 py-2 px-4"
                                            to={"addTask"}
                                        >
                                            <IoMdAdd className="text-lg" />
                                            <span className="ml-4">Add Task</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative px-2 py-1 ">
                                        <NavLink
                                            className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                                            to={"allTask"}
                                        >
                                            <BiTask className="text-lg" />
                                            <span className="ml-4">All Task</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="fixed bottom-0 mb-5 bg-white">
                            <button
                                className="btn btn-sm bg-transparent border-none bg-slate-300  text-start text-blue-700"
                                onClick={logOut}
                            >
                                <div className="flex justify-between gap-2">
                                    <span>
                                    <MdLogout />
                                    </span>
                                    <span>Log out</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
            <div className="fixed inset-0 -z-10 flex items-end bg-slate-300 bg-opacity-50 sm:items-center sm:justify-center"></div>
             <aside
                className={`fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16  ease-in-out duration-300 overflow-y-auto bg-white
        ${!isSideMenuOpen ? "-translate-x-full " : "translate-x-0"}
        
        md:hidden`}
            >
                <div className="text-blue-950">
                    <div className="flex flex-col justify-between p-2 bg-white">
                        <div>
                            <div className="flex py-3 px-2 items-center">
                                <h2 className="hidden md:block md:text-3xl text-xl font-semibold">
                                    Chikitsha<span className="text-[#409bd4]">Hub</span>
                                </h2>
                            </div>
                            <div className="flex flex-col justify-between">
                                <ul className="mt-6 leading-10">
                                    <li className="relative px-2 py-1 ">
                                        <NavLink
                                            className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                                            to={"home"}
                                        >
                                            <AiOutlineHome className="text-lg" />
                                            <span className="ml-4">Home</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative px-2 py-1 ">
                                        <NavLink
                                            className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                                            to={"addTask"}
                                        >
                                            <IoMdAdd className="text-lg" />
                                            <span className="ml-4">Add Task</span>
                                        </NavLink>
                                    </li>
                                    <li className="relative px-2 py-1 ">
                                        <NavLink
                                            className="inline-flex items-center w-full text-sm font-semibold text-blue-950 transition-colors duration-150 cursor-pointer hover:text-blue-600py-2 px-4"
                                            to="allTask"
                                        >
                                            <BiTask className="text-lg" />
                                            <span className="ml-4">All Task</span>
                                        </NavLink>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                        <div className="fixed bottom-0 mb-5">
                            <button
                                className="btn btn-sm bg-transparent border-none bg-slate-300  text-start text-blue-700"
                                onClick={logOut}
                            >
                                <div className="flex justify-between gap-2">
                                    <span>
                                        <MdLogout />
                                    </span>
                                    <span>Log out</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
            <div className="flex flex-col flex-1 w-full overflow-y-auto ">
                 <header className="z-40 py-5 bg-white fixed top-0 w-[1030px]">
                    <div className="flex justify-between">
                        <div className="flex items-center justify-between h-8 px-6">
                            <button
                                className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"
                                onClick={toggleSideMenu}
                                aria-label="Menu"
                            >
                                {isSideMenuOpen ? (
                                    <FaXmark className="w-6 h-6" />
                                ) : (
                                    <FaBarsStaggered className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                        <div className="mt-2 mr-4 w-fit mx-auto">
                            <h1 className="text-xl text-[#409bd4] fixed left-1/3 md:left-1/2"></h1>
                        </div>
                    </div>
                </header>
                <main className="scroll-smooth bg-slate-50 h-auto">
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default UserDashboard;