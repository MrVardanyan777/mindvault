"use client"

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { formatTimeAgo } from '@utils/timeconvert';

const NoteCard = ( { post, handleEdit, handleDelete } ) => {

  const router = useRouter();
  const pathName = usePathname();

  return (
    <div className='note_card'>
      <div className='flex justify-between items-start gap-5'>
          <div className='flex flex-1 justify-start items-center gap-6 cursor-pointer'>
              <Image 
                src={post.creator.image}
                alt="user_image"
                width={40}
                height={40}
                className='rounded-full object-contain'
              />
              <p className='capitalize'>{post.creator.username}</p>
          </div>
      </div>
      <p className='my-4 font-popins text-sm text-gray-700'>{post.heading}</p>
      <div className='flex justify-center gap-4 my-3 '>
      {pathName === '/' ? ( 
        <p className='font-raleway text-[16px] cursor-pointer text-[#151515] hover:underline' onClick={() => router.push(`/view-note?id=${post._id}`)}>
        View
        </p>
      )
        : (
        <>
          <p className='font-raleway text-[16px] cursor-pointer text-[#8ccecc]' onClick={handleEdit}>Edit</p>
          <p className='font-raleway text-[16px] cursor-pointer text-[#3c5252]' onClick={handleDelete}>Delete</p>
        </> )
      }
      </div>
      <p className='text-right font-popins text-sm text-gray-400'>{formatTimeAgo(post.createdAt)}</p>
      
    </div>
  )
}

export default NoteCard;