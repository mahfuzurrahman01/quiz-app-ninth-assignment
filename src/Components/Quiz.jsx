import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';
const Quiz = () => {
    const items = useLoaderData();
    const itemsData = items.data;
    const questions = itemsData.questions;
    const answerHandler = (option,correctAnswer) =>{
        if(option === correctAnswer){
           toast.success('Correct!',{autoClose: 500})
        }
        else{
            toast.error('Wrong answer!',{autoClose: 500})
        }
    }
    const hintsHandler = (correctAnswer)=>{
        toast.info(correctAnswer,{autoClose: 1000})
    }
    return (
        <div className='bg-slate-300 mt-4 lg:mx-20 md:mx-16 sm:mx-8 mx-4 lg:p-10 md:p-6 sm:p-3 p-2  rounded-md'>
            <p className='text-3xl shadow-lg shadow-slate-700 p-1 px-4 bg-red-500 w-1/2 font-normal mx-auto text-center rounded-md text-white mb-7'>{itemsData.name}</p>
            <div>
                {
                    questions.map(item =>
                        <div className='bg-gray-200 md:w-3/4 sm:w-full rounded-md lg:p-5 md:p-3 sm:p-2 p-2 my-4 mx-auto relative' key={item.id}>
                            <p className='bg-slate-500 py-3 rounded-md bg-opacity-70 border-b-2 px-6'>{item.question.replace('<p>','').replace('</p>','')}</p>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-4 my-3'>
                                {
                                    item.options.map(option => <li key={option} onClick={()=>answerHandler(option,item.correctAnswer)} className='bg-slate-300 py-1 px-4 w-3/4 rounded hover:bg-red-500 hover:text-white ease-in duration-300 cursor-pointer'>{option}</li>)
                                }
                                <div>
                                </div>
                            </div>
                            <EyeIcon onClick={()=>hintsHandler(item.correctAnswer)} title='Click to know Answer' className='hover:text-slate-800 duration-300 text-slate-600 h-7 w-6 absolute lg:top-8 lg:right-9 bottom-0 right-2 cursor-pointer'/>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Quiz;