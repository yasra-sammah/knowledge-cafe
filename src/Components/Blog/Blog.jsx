import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import "./Blog.css"
import { CiBookmark } from "react-icons/ci";
import { BsListNested } from 'react-icons/bs';



const Blog = ({blog , handleBookmark ,handleReadingTime}) => {
    
    const {id,title , cover_img , author_img , author_name, reading_time , hashtag} = blog
    return (
        <div>
            <img className='img2' src={cover_img  } alt={`Cover image of the picture ${title}`}/>
            <div className='md:flex justify-between  items-center '>
                <div className='my-4 md:flex gap-3'>
                    <img src={author_img} className='authorImage' alt="" />
                    <div>
                        <p className='author'>{author_name}</p>
                        <p className='time '>Mar 14 (4 Days ago)</p>
                    </div>

                </div>
                <div className=' md:flex gap-2 time'>
                  <span>{reading_time} Min read</span>
                    <button onClick={()=>handleBookmark(blog)}
                     className='ml-2 text-2xl '><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className='title'>{title}</h2>
            <p className='mb-4'>
                {
                    hashtag.map((hash, indx) => <span key={indx} className='hashtag'><a href="">{hash}</a></span>)
                }
            </p>
            <button onClick={()=> handleReadingTime(id, reading_time)}
            
            className='mb-5 underline text-blue-400  '>
                Mark As Read
            </button>
            <hr className='mb-10 text-gray-300'/>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;