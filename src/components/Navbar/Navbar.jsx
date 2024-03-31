
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const menus = <>
        <li><NavLink to='/' className="hover:text-sky-600 focus:border-b-2 focus:text-sky-600 focus:border-sky-600 pr-2">Home</NavLink></li>
        <li><NavLink to='/dashboard' className="hover:text-sky-600 focus:border-b-2 focus:text-sky-600 focus:border-sky-600 pr-2">Dashboard</NavLink></li>
        <li><NavLink to='/fqa' className="hover:text-sky-600 focus:border-b-2 focus:text-sky-600 focus:border-sky-600 pr-2">F</NavLink></li>
        <li><NavLink to='/allTask' className="hover:text-sky-600 focus:border-b-2 focus:text-sky-600 focus:border-sky-600 pr-2">Task List</NavLink></li>
        {/* <li><NavLink to='/login' className='border-orange-500 rounded-lg'>Log In</NavLink></li> */}
    </>

const [scrolling, setScrolling] = useState(false);

useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);
    return (
        <div className={`navbar fixed top-0 left-0 right-0 z-50 ${scrolling ? 'bg-base-100' : ''}`}>
            <div className="navbar-start">
                <div className="dropdown mr-10 md:mr-40 lg:mr-0">
                    <label tabIndex={0} className=" lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 bg-base-100 w-52">
                        {menus}
                    </ul>
                </div>
                {/* <img className="w-14" src={logo} alt="" /> */}
                <Link to='/' className="ml-20 lg:ml-0 font-semibold normal-case text-xl"><span className="text-sky-600">CSq </span>Task Manager</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 gap-2">
                    {menus}
                </ul>
            </div>
            <div className="navbar-end">
                {/* {
                    user ? 
                    <>
                         <div className="dropdown dropdown-end">
                            <label   tabIndex ={0} className="btn btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt="" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="p-2 shadow menu menu-sm dropdown-content z-[1] bg-base-100 rounded-box w-36 text-orange-500">
                                <li className="font-semibold text-center mb-2">{user?.displayName}</li>
                                <Link to='/dashboard'>Dashboard</Link>
                                <div className="divider"></div>
                                <li><a onClick={handleLogOut} className="font-semibold btn border-0 bg-orange-500 text-white">Sign Out</a></li>
                            </ul>
                        </div>                       
                    </> : 
                    <Link to='/login' className= "font-semibold btn border-0 bg-orang-500 text-white">Log In</Link>
            } */}
                <Link to='/login' className="font-semibold border-0 p-2 rounded text-sky-600 bg-white">Log In</Link>
            </div>
        </div>
    );
};

export default Navbar;