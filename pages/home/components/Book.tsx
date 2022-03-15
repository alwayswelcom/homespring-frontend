/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BookInfo } from 'pages/types';
import Star from './Star';
import Divider from 'components/divider';

const Book = ({item}: {item: BookInfo}) => {
    return (
        <div className="flex flex-col w-full overflow-hidden mt-6">
            <div className='flex flex-row items-center mb-4'>
                <img className='book-thumbnail mr-4' src={item.volumeInfo.imageLinks.smallThumbnail} alt="Book Img" />
                <div className='flex flex-col'>
                    <div className='text-zinc-700 text-sm'>{item.volumeInfo.authors?.join(',')}</div>
                    <div className='text-zinc-400 text-xs'>{item.volumeInfo.categories?.join(',')}</div>
                </div>
            </div>
            <h2 className='truncate font-bold text-zinc-900 text-2xl'>{item.volumeInfo.title}</h2>
            <div className='flex flex-row my-2'>
                <Star checked={true} />
                <Star checked={true} />
                <Star checked={true} />
                <Star checked={true} />
                <Star checked={false} />
            </div>
            <div className='text-zinc-500 text-sm flex flex-row space-x-3'>
                <span> {item.volumeInfo.publishedDate} </span>
                <span>•</span>
                <span> {item.volumeInfo.printType} </span>
            </div>
            <div className='flex w-full flex-wrap text-zinc-500 mt-4 h-11 mb-8 overflow-hidden'  dangerouslySetInnerHTML={{ __html: item.searchInfo?.textSnippet}}>
            </div>
            <Divider />
        </div>
    );
}



export default Book;