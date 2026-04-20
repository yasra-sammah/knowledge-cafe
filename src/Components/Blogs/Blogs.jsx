import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({handleBookmark, handleReadingTime}) => {
    const[blogs , setBlogs] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-4xl mx-auto ">
            <h3 className="text-4xl">
               Blog {blogs.length}
            </h3>
            {
               blogs.map(blog => <Blog 
                handleBookmark= {handleBookmark}
                handleReadingTime = {handleReadingTime}
                
                 key = {blog.id} blog = {blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;