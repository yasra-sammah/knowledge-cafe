import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmark from './Components/Bookmark/Bookmark'

function App() {
 const [bookmarks, setBookMarks] = useState([])

 const [readingTime, setReadingTime] = useState(0)

 const handleReadingTime = (id , time)  =>{
  const newTime = readingTime + time;
  setReadingTime(newTime)

  // remove mark as read 
  const remaingBook = bookmarks.filter(bookmark => bookmark.id !== id);
  setBookMarks(remaingBook)

 }


 const handleBookmark = blog =>{
  const newBookmarks = [...bookmarks , blog]
  setBookMarks(newBookmarks)
 }

  return (
    <>
    <Header></Header>
    <div className='md:flex  '>
      <Blogs 
      handleBookmark= {handleBookmark}
      handleReadingTime = {handleReadingTime}
     
      ></Blogs>
      <Bookmark
       bookmarks= {bookmarks}
       readingTime ={readingTime}
       
       >
        

       </Bookmark>
    </div>
         

    

      
    </>
  )
}

export default App
