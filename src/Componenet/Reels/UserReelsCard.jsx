// import React from 'react'

// function UserReelsCard() {
//   return (
//     <div className='w-[15rem] px-2'>
//         <video controls className='w-full h-full' src="https://videos.pexels.com/video-files/8041860/8041860-sd_506_960_25fps.mp4"/>
//     </div>
//   )
// }

// export default UserReelsCard


import React from 'react';

function UserReelsCard({ reel }) {
  return (
    <div className="w-[15rem] px-2">
      <h3 className="font-semibold text-xl">{reel.title}</h3>
      <p>{reel.description}</p>
      <video controls className="w-full h-[10rem]" src={reel.videoUrl} />
    </div>
  );
}

export default UserReelsCard;
