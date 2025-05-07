import React, { useEffect, useState } from 'react';
import { Avatar, Card, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ImageIcon from '@mui/icons-material/Image';
import StoryCircle from './StoryCircle';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import PostCard from '../Post/PostCard';
import CreatePostModal from '../CreatePost/CreatePostModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPostAction } from '../Post/Post.Action';

const story = [2, 3, 7, 1];

function MiddlePart() {
  const dispatch = useDispatch();
  const { post } = useSelector(store => store);

  console.log("post store",post)
  const [openCreatePostModal, setOpenCreatePostModal] = useState(false);

  const handleCloseCreatePostModal = () => setOpenCreatePostModal(false);
  const handleOpenCreatePostModal = () => {
    setOpenCreatePostModal(true);
    console.log('Open Post Form', openCreatePostModal);
  };

  useEffect(() => {
    dispatch(getAllPostAction());
  }, []); // ✅ Fixed missing dependency array

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
        {story.map((item, index) => (
          <StoryCircle key={index} />
        ))}
      </section>

      {/* Create Post Section */}
      <Card className="p-5 mt-5">
        <div className="flex items-center justify-between gap-4">
          <Avatar />
          <input
            onClick={handleOpenCreatePostModal}
            className="outline-none w-full rounded-full px-5 py-2 bg-transparent border border-[#3b4054]"
            type="text"
            placeholder="What's on your mind?"
          />
        </div>

        <div className="flex justify-center space-x-9 mt-5">
          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ImageIcon />
            </IconButton>
            <span>Media</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <VideocamIcon />
            </IconButton>
            <span>Video</span>
          </div>

          <div className="flex items-center">
            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
              <ArticleIcon />
            </IconButton>
            <span>Article</span>
          </div>
        </div>
      </Card>

      {/* Post Feed */}
      <div className="mt-5 space-y-5">
        {post.posts.map((item)=><PostCard item={item}/> 
        )}
      </div>

      {/* Create Post Modal */}
      <CreatePostModal
        handleClose={handleCloseCreatePostModal}
        open={openCreatePostModal}
      />
    </div>
  );
}

export default MiddlePart;








// import React, { useEffect, useState } from 'react';
// import { Avatar, Card, IconButton } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
// import ImageIcon from '@mui/icons-material/Image';
// import StoryCircle from './StoryCircle';
// import VideocamIcon from '@mui/icons-material/Videocam';
// import ArticleIcon from '@mui/icons-material/Article';
// import PostCard from '../Post/PostCard';
// import CreatePostModal from '../CreatePost/CreatePostModal';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllPostAction } from '../Post/Post.Action';

// const story = [2, 3, 7, 1];

// function MiddlePart() {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector(store => store.post); // Ensure correct state shape

//   console.log("Posts from store:", posts); // Check if posts are coming in

//   const [openCreatePostModal, setOpenCreatePostModal] = useState(false);

//   const handleCloseCreatePostModal = () => setOpenCreatePostModal(false);
//   const handleOpenCreatePostModal = () => {
//     setOpenCreatePostModal(true);
//     console.log('Open Post Form', openCreatePostModal);
//   };

//   useEffect(() => {
//     dispatch(getAllPostAction());
//   }, [dispatch]); // ✅ Fixed missing dependency array

//   return (
//     <div className="px-20">
//       {/* Story Section */}
//       <section className="flex items-center gap-6 p-5 rounded-b-md">
//         {/* Add New Story */}
//         <div className="flex flex-col items-center rounded-full cursor-pointer">
//           <Avatar sx={{ width: '4rem', height: '4rem' }}>
//             <AddIcon sx={{ fontSize: '3rem' }} />
//           </Avatar>
//           <p className="text-center mt-2">New</p>
//         </div>

//         {/* Other Stories */}
//         {story.map((item, index) => (
//           <StoryCircle key={index} />
//         ))}
//       </section>

//       {/* Create Post Section */}
//       <Card className="p-5 mt-5">
//         <div className="flex items-center justify-between gap-4">
//           <Avatar />
//           <input
//             onClick={handleOpenCreatePostModal}
//             className="outline-none w-full rounded-full px-5 py-2 bg-transparent border border-[#3b4054]"
//             type="text"
//             placeholder="What's on your mind?"
//           />
//         </div>

//         <div className="flex justify-center space-x-9 mt-5">
//           <div className="flex items-center">
//             <IconButton color="primary" onClick={handleOpenCreatePostModal}>
//               <ImageIcon />
//             </IconButton>
//             <span>Media</span>
//           </div>

//           <div className="flex items-center">
//             <IconButton color="primary" onClick={handleOpenCreatePostModal}>
//               <VideocamIcon />
//             </IconButton>
//             <span>Video</span>
//           </div>

//           <div className="flex items-center">
//             <IconButton color="primary" onClick={handleOpenCreatePostModal}>
//               <ArticleIcon />
//             </IconButton>
//             <span>Article</span>
//           </div>
//         </div>
//       </Card>

//       {/* Post Feed */}
//       <div className="mt-5 space-y-5">
//         {/* Display loading state */}
//         {loading && <p>Loading posts...</p>}

//         {/* Handle error if any */}
//         {error && <p>Error: {error}</p>}

//         {/* Render posts */}
//         {!loading && !error && posts && posts.length > 0 ? (
//           posts.map((item) => <PostCard key={item._id} item={item} />)
//         ) : (
//           <p>No posts available.</p>
//         )}
//       </div>

//       {/* Create Post Modal */}
//       <CreatePostModal
//         handleClose={handleCloseCreatePostModal}
//         open={openCreatePostModal}
//       />
//     </div>
//   );
// }

// export default MiddlePart;
