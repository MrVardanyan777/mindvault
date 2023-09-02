import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ViewCard = ( { data } ) => {
  return (
    <section className='w-full bg-[#f1f2f6] h-auto p-9 rounded-lg drop-shadow-md flex flex-col'>
        <div className='flex justify-center items-center border-b-2 pb-4'>
            <h1 className='text-[20px] font-raleway font-semibold'>{data.heading}</h1>
        </div>
        <div className='flex items-start flex-col pt-5 font-popins leading-[1.7]'>
            {ReactHtmlParser(data.note)}
        </div>
    </section>
  )
}

export default ViewCard