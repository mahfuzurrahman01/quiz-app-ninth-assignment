import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-white bg-red-500 py-2 px-4 my-4 shadow-lg shadow-slate-500 rounded w-1/3 text-center mx-auto'>QUESTIONS</h1>
            <div className='bg-gray-700 rounded-md w-11/12 mx-auto grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:gap-7 md:gap-4 gap-2 lg:p-10 md:p-6 p-2'>

                <div>
                    <p className='bg-slate-400 text-md py-1 px-3 rounded  font-semibold mb-1'>Q: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, minus!</p>
                    <div className='bg-red-300 text-md  py-1 px-3 rounded bg-opacity-70 text-slate-100'>
                        <p><span className='font-bold text-md text-slate-600'>Answer:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis magnam debitis consequatur earum repellat recusandae esse est perspiciatis cum mollitia deleniti obcaecati voluptas asperiores libero exercitationem, quia nesciunt quibusdam molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum amet impedit eaque itaque expedita deserunt facere odit quos soluta dolor, vitae molestias, fugit at quibusdam sequi ratione officiis iusto in?</p>
                    </div>
                </div>
                <div>
                    <p className='bg-slate-400 text-md py-1 px-3 rounded mb-1 font-semibold'>Q: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, minus!</p>
                    <div className='bg-red-300 text-md  py-1 px-3 rounded bg-opacity-70 text-slate-100'>
                        <p><span className='font-bold text-md text-slate-600'>Answer:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis magnam debitis consequatur earum repellat recusandae esse est perspiciatis cum mollitia deleniti obcaecati voluptas asperiores libero exercitationem, quia nesciunt quibusdam molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum amet impedit eaque itaque expedita deserunt facere odit quos soluta dolor, vitae molestias, fugit at quibusdam sequi ratione officiis iusto in?</p>
                    </div>
                </div>
                <div>
                    <p className='bg-slate-400 text-md py-1 px-3 rounded mb-1 font-semibold'>Q: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt, minus!</p>
                    <div className='bg-red-300 text-md  py-1 px-3 rounded bg-opacity-70 text-slate-100'>
                        <p><span className='font-bold text-md text-slate-600'>Answer:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis magnam debitis consequatur earum repellat recusandae esse est perspiciatis cum mollitia deleniti obcaecati voluptas asperiores libero exercitationem, quia nesciunt quibusdam molestiae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum amet impedit eaque itaque expedita deserunt facere odit quos soluta dolor, vitae molestias, fugit at quibusdam sequi ratione officiis iusto in?</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;