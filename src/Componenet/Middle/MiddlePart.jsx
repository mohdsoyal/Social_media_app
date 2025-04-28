import React from 'react';
import { Avatar, Card, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image'; // You missed this import
import StoryCircle from './StoryCircle';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import PostCard from '../Post/PostCard';
const story = [2, 3, 7, 1];
const post=[1,2,4,5,6,3]

function MiddlePart() {
  const handleOpenCreatePost = () => {
    console.log("Open Post Form");
  };

  return (
    <div className="px-20">

      {/* Story Section */}
      <section className="flex items-center gap-6 p-5 rounded-b-md">

        {/* Add New Story */}
        <div className="flex flex-col items-center rounded-full cursor-pointer">
          <Avatar sx={{ width: '4rem', height: '4rem' }}>
            <AddIcon sx={{ fontSize: '3rem' }} />
          </Avatar>
          <p className="text-center mt-2">New</p>
        </div>

        {/* Other Stories */}
        {story.map((item)=><StoryCircle/>)}
      </section>

      {/* Create Post Section */}
      <Card className=" p-5 mt-5">
        <div className="flex items-center justify-between gap-4">
          <Avatar />
          <input
            className="outline-none w-full rounded-full px-5 py-2 bg-transparent border border-[#3b4054]"
            type="text"
            placeholder="What's on your mind?"
          />
        </div>

       <div className='flex justify-center space-x-9 mt-5'>
     
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePost}>
              <ImageIcon />
            </IconButton>
            <span>Media</span>
          </div>
       

       
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePost}>
              <VideocamIcon />
            </IconButton>
            <span>Video</span>
          </div>
       

       
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePost}>
              <ArticleIcon />
            </IconButton>
            <span>Artical</span>
          </div>
       
        </div>
      </Card>

      <div className='mt-5 space-y-5'>
        {post.map((item)=><PostCard/>)}
      
       

      </div>

    </div>
  );
}

export default MiddlePart;
