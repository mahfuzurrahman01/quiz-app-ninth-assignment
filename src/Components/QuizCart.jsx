import React from 'react';
import { Link } from 'react-router-dom';

const QuizCart = ({ item }) => {
    return (
        <div className='bg-slate-300 bg-opacity-80 relative rounded-md p-4 shadow-neutral-400 shadow-lg'>
            <div>
                <img src={item.logo} alt="" />
            </div>
            <div>
                <p className='bg-slate-700 inline text-gray-300 text-xs py-1 px-2 rounded-lg my-1 absolute top-1 right-2'>Total quiz: {item.total}</p>
            </div>
            <div className='flex justify-between items-center'>
                <p className='text-2xl bg-slate-200 rounded my-2 py-1 px-7 font-bold font-sans text-slate-700'>{item.name}</p>
                <Link to={`/quiz/${item.id}`}><button className='bg-red-500 py-1 px-7 text-lg hover:bg-red-700 duration-300 text-white rounded'>Start</button></Link>
            </div>
        </div>
    );
};

export default QuizCart;