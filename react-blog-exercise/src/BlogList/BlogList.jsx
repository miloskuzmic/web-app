import React from 'react';
import { blogList } from '../data/data-blog';
import './BlogList.css'

export const BlogList = () => {
   return( <div className='container'>
        { blogList.map((element) =>(
            <div className='post'><h2>{element.title}</h2>
            <p>{element.text}</p>
            </div>
        ))}
    </div>)
}