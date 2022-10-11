import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/24/solid';
const Quiz = () => {
    const items = useLoaderData();
    const itemsData = items.data;
    const questions = itemsData.questions;
    const answerHandler = (option,correctAnswer) =>{
        if(option === correctAnswer){
            
        }
    }
    return (
        <div className='bg-slate-300 mt-4 mx-20 p-10 rounded-md'>
            <p className='text-3xl shadow-lg shadow-slate-700 p-1 px-4 bg-red-500 w-1/2 font-normal mx-auto text-center rounded-md text-white mb-7'>{itemsData.name}</p>
            <div>
                {
                    questions.map(item =>
                        <div className='bg-gray-200 w-3/4 rounded-md p-5 my-4 mx-auto relative' key={item.id}>
                            <p className='bg-slate-500 p-3 rounded-md bg-opacity-70 border-b-2'>{item.question}</p>
                            <div className='grid grid-cols-2 gap-4 my-3'>
                                {
                                    item.options.map(option => <li key={option} onClick={()=>answerHandler(option,item.correctAnswer)} className='bg-slate-300 py-1 px-4 w-3/4 rounded hover:bg-red-500 hover:text-white ease-in duration-300'>{option}</li>)
                                }
                            </div>
                            <EyeIcon title='Click to know Answer' className='hover:text-slate-800 duration-300 text-slate-600 h-7 w-6 absolute top-8 right-9'/>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Quiz;