import React, { useState } from 'react';
import { Avatar, Button, CardHeader } from '@mui/material';
import { red } from '@mui/material/colors';

function PopularUserCard({ userId, firstName, lastName }) {
  const [isFollowing, setIsFollowing] = useState(false);

  console.log("UserId passed to card:", userId); // Debug

  const handleFollow = async () => {
    const token = localStorage.getItem('jwt');
    console.log("Retrieved token:", token);

    if (!token) {
      alert('You must be logged in to follow users.');
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
        throw new Error('Failed to follow user');
      }

      setIsFollowing(true);
      alert(`You are now following ${firstName} ${lastName}`);
    } catch (error) {
      console.error('Error following user:', error);
      alert('Error following user');
    }
  };

  return (
    <div>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="user-avatar">
            {firstName?.[0]?.toUpperCase() || 'U'}
          </Avatar>
        }
        action={
          <Button size="small" onClick={handleFollow} disabled={isFollowing}>
            {isFollowing ? 'Following' : 'Follow'}
          </Button>
        }
        title={`${firstName} ${lastName}`}
        subheader={`@${firstName?.toLowerCase() || ''}${lastName?.toLowerCase() || ''}`}
      />
    </div>
  );
}

export default PopularUserCard;
