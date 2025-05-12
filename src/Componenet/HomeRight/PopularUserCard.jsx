import React, { useState } from 'react';
import { Avatar, Button, CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';

function PopularUserCard({ userId, firstName, lastName }) {
  const [followed, setFollowed] = useState(false);

  const handleFollow = async () => {
    const token = localStorage.getItem('token');
    console.log("Retrieved token:", token); // This will help you see if the token is available in localStorage
  
    if (!token) {
      console.error('Token not found!');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:6393/api/user/follow/${userId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      setFollowed(true);
    } catch (error) {
      console.error('Error following user:', error);
    }
  };
  
  

  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {firstName?.[0] || 'U'}
          </Avatar>
        }
        action={
          <Button size="small" onClick={handleFollow} disabled={followed}>
            {followed ? "Following" : "Follow"}
          </Button>
        }
        title={`${firstName} ${lastName}`}
        subheader={`@${firstName.toLowerCase()}${lastName.toLowerCase()}`} // Corrected for username formatting
      />
    </div>
  );
}

export default PopularUserCard;
