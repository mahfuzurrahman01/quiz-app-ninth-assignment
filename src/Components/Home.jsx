import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import QuizCart from './QuizCart';

const Home = () => {
    const quiz = useLoaderData();
    const quizItems = quiz.data;
    
    return (
        <div>
           <Banner></Banner> 
           <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 lg:mx-20 md:mx-10 sm:mx-5 mx-2 bg-slate-300 bg-opacity-30 p-9 rounded-md'>
            {
                quizItems.map(item => <QuizCart key={item.id} item = {item}></QuizCart>)
            }
           </div>
        </div>
    );
};

export default Home;