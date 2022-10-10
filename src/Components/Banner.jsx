import React from 'react';
import bannerImg from '../images/banner-img.png'
const Banner = () => {
    return (
        <div className='flex justify-around items-center w-11/12 mx-auto my-5 lg:flex-row md:flex-row sm:flex-col flex-col-reverse'>
            <div className='bg-slate-600 bg-opacity-10 p-10 rounded lg:w-[700px]'>
                <p className='text-4xl font-extrabold text-center font-sans text-slate-700 mb-3'>Judge yourself!</p>
                <small className='font-sans text-center text-zinc-800 lg:block md:block sm:hidden hidden'>“By the time the average person finishes college, he or she will have taken over 2,600 tests, quizzes, and exams. The right answer approach becomes deeply ingrained in our thinking. This may be fine for some mathematical problems where there is in fact only one right answer. The difficulty is that most of life isn’t this way. Life is ambiguous; there are many right answers- all depending on what you’re looking for. But if you think there is only one right answer, then you’ll stop looking as soon as you find one.” ~ Roger von Oech</small>
                <button className='bg-red-500 hover:bg-red-700 text-white py-1 px-4 font-semibold mt-3 mx-auto block rounded'>Get Started</button>
            </div>
            <div>
                <img src={bannerImg} alt="" className='w-full lg:block md:hidden'/>
            </div>
        </div>
    );
};

export default Banner;