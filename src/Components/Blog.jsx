import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-white bg-red-500 py-2 px-4 my-4 shadow-lg shadow-slate-500 rounded w-1/3 text-center mx-auto'>QUESTIONS</h1>
            <div>
                <div className='bg-gray-700'>
                    <p className='bg-slate-400 py-1 px-3 rounded mx-4 font-semibold'>Q: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, minus!</p>
                    <small className='bg-red-300 text-md'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis magnam debitis consequatur earum repellat recusandae esse est perspiciatis cum mollitia deleniti obcaecati voluptas asperiores libero exercitationem, quia nesciunt quibusdam molestiae.</small>
                </div>
            </div>
        </div>
    );
};

export default Blog;