// import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
// import React from 'react'
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import { ExpandMore } from '@mui/icons-material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
// import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
// import BookmarkIcon from '@mui/icons-material/Bookmark';

// function PostCard({item}) {
//   return (
//     <Card className=''>
//          <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             S
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title={item.user.firstName+" " +item.user.lastName}
//         subheader="September 14, 2016"
//       />

//        <CardMedia
//         component="img"
//         height="194"
//         image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HtrA_XO6WEGfO6R7hS2PKTQKYd5wDriNCQ&s"
//       />

//       <CardContent>
//         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>




//       <CardActions className='flex justify-between' disableSpacing>

//         <div>

//         <IconButton>

//           {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}

//         </IconButton>

//         <IconButton>
         
//           {<ShareIcon/>}
//         </IconButton>

      
//         <IconButton>
         
//          {<ChatBubbleIcon/>}

//        </IconButton>

//         </div>

//         <div>
//         <IconButton  >
         
//          {true?<BookmarkIcon/>:<BookmarkBorderIcon/>}

//        </IconButton>
//         </div>

       
//       </CardActions>
//     </Card>
//   )
// }

// export default PostCard
















import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { useDispatch } from 'react-redux';
import { createCommentAction } from './Post.Action';

function PostCard({ item }) {
  if (!item || !item.user) return null; // Prevent runtime errors
  const [showComments ,setShowComments]=useState(false)

  const handleShowComment=()=>setShowComments(!showComments);
  const dispatch=useDispatch();

  const handleCreateComment = (content) => {
    const reqData = {
      postId: item.id,
      content: content // send content directly instead of wrapping in `data`
    };
  
    dispatch(createCommentAction(reqData));
  };
  

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user-avatar">
            {item.user.firstName?.[0] || 'U'}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.user.firstName+" "+item.user.lastName}
        subheader={"@"+item.user.firstName.toLowerCase()+"_"+item.user.lastName.toLowerCase()}
      />

      <CardMedia
        component="img"
        height="194"
        image={item.image}
        alt="Post image"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {item.caption}
        </Typography>
      </CardContent>

      <CardActions className="flex justify-between" disableSpacing>
        <div>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>

          <IconButton onClick={handleShowComment}>
            <ChatBubbleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <BookmarkIcon />
          </IconButton>
        </div>
      </CardActions>

     {showComments &&  <section>
       <div className='flex items-center space-x-5 mx-3 my-5'>
        <Avatar sx={{}}/>
        <input onKeyPress={(e)=>{
          if(e.key=="Enter"){
            handleCreateComment(e.target.value)
            console.log("enter press.....",e.target.value);
          }
        }} className='w-full outline-none bg-transparent border border-[#3b4054] rounded-full px-5 py-2' placeholder='Write Your Comment...' type="text" />
       </div>
       <Divider/>

       {item.comments.map((comment)=> <div className='mx-3 space-y-2 my-5 text-xs'>
      
          <div className='flex items-center space-x-5 '>
            <Avatar sx={{height:"2rem",width:"2rem",fontSize:".8rem"}}>{comment.user.firstName[0]}</Avatar>
            <p>{comment.content}</p>
          </div>
          
        
       </div>)}

      </section>}
    </Card>
  );
}

export default PostCard;
