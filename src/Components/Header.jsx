import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon,XMarkIcon} from '@heroicons/react/24/solid'
import logo from '../../src/images/navbar-logo.png'
const Header = () => {
    const [open,setOpen] = useState(false)
    return (
        <div className='bg-slate-800 md:py-2 py-1 md:px-14 sm:px-10 px-3 flex justify-between items-center'>
            <div className='flex items-center'>
                <img src={logo} className='md:w-20 sm:w-16 w-9 md:h-20 sm:h-16 h-9' alt="" />
                <p className='md:text-3xl sm:text-2xl text-light font-normal text-white font-sans'>Delta-Q</p>
            </div>
            <div className={`flex justify-end items-center md:gap-8 sm:gap-5 gap-2 absolute duration-500 md:static ${open ? 'left-32':'left-[-200px]'}`}>
                <NavLink className={({ isActive }) => isActive ? 'bg-slate-100 duration-300 text-black md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-sm md:font-semibold sm:font-normal font-light font-sans' : 'bg-red-500 duration-300 hover:bg-red-700 md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-white text-sm md:font-semibold sm:font-normal font-light font-sans'} to='/home'>Home</NavLink>

                <NavLink className={({ isActive }) => isActive ? 'bg-slate-100 duration-300 text-black md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-sm md:font-semibold sm:font-normal font-light font-sans' : 'bg-red-500 duration-300 hover:bg-red-700 md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-white text-sm md:font-semibold sm:font-normal font-light font-sans'} to='/quiz'>Quiz</NavLink>

                <NavLink className={({ isActive }) => isActive ? 'bg-slate-100 duration-300 text-black md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-sm md:font-semibold sm:font-normal font-light font-sans' : 'bg-red-500 duration-300 hover:bg-red-700 md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-white text-sm md:font-semibold sm:font-normal font-light font-sans'} to='/statistics'>Statistics</NavLink>

                <NavLink className={({ isActive }) => isActive ? 'bg-slate-100 duration-300 text-black md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-sm md:font-semibold sm:font-normal font-light font-sans' : 'bg-red-500 duration-300 hover:bg-red-700 md:px-3 sm:px-2 px-1 md:py-2 py-0 rounded text-white text-sm md:font-semibold sm:font-normal font-light font-sans'} to='/blog'>Blog</NavLink>

            </div>
            <div onClick={()=>setOpen(!open)} className='md:hidden sm:block block'>
                {
                    open ? <XMarkIcon className='w-9 h-8 text-red-500 font-bold'></XMarkIcon> : <Bars3Icon className='w-9 h-8 text-red-500 font-bold'></Bars3Icon>
                }
                  
            </div>
        </div>
    );
};

export default Header;