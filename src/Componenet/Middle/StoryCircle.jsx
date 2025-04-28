import React from 'react';
import { Avatar } from '@mui/material';

function StoryCircle() {
  return (
    <div className="flex flex-col items-center rounded-full cursor-pointer">
      <Avatar
        sx={{ width: '5rem', height: '5rem' }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCUTe0G9p0yhk8iL7Ji9en6vPqzSyaijLcTQ&s"
      />
      <p className="mt-1 text-center">CodeSoyal</p>
    </div>
  );
}

export default StoryCircle;
