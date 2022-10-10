import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../src/images/navbar-logo.png'
const Header = () => {
    return (
        <div className='bg-slate-800 py-2 px-14 flex justify-between items-center'>
            <div className='flex items-center'>
                <img src={logo} className='w-20 h-20' alt="" />
                <p className='text-3xl font-normal text-white font-sans'>Delta Quiz</p>
            </div>
            <div className='flex justify-end items-center gap-8
            '>
                <NavLink className={({ isActive }) => isActive ? 'bg-slate-100 duration-300 text-black px-3 py-2 rounded text-sm font-semibold font-sans' : 'bg-red-500 duration-300 hover:bg-red-700 px-3 py-2 rounded text-white text-sm font-semibold font-sans'} to='/home'>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-slate-100 duration-300 text-black px-3 py-2 rounded text-sm font-semibold font-sans' : 'bg-red-500 duration-300 hover:bg-red-700 px-3 py-2 rounded text-white text-sm font-semibold font-sans'} to='/quiz'>Quiz</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-slate-100 duration-300 text-black px-3 py-2 rounded text-sm font-semibold font-sans' : 'bg-red-500 duration-300 hover:bg-red-700 px-3 py-2 rounded text-white text-sm font-semibold font-sans'} to='/statistics'>Statistics</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'bg-slate-100 duration-300 text-black px-3 py-2 rounded text-sm font-semibold font-sans' : 'bg-red-500 duration-300 hover:bg-red-700 px-3 py-2 rounded text-white text-sm font-semibold font-sans'} to='/blog'>Blog</NavLink>
            </div>
        </div>
    );
};

export default Header;