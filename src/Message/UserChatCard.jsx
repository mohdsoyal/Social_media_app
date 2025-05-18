import React from 'react'
import { Avatar, Card, CardHeader, IconButton } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useSelector } from 'react-redux';

function UserChatCard({ chat }) {
  const { auth } = useSelector(store => store);

  const otherUser = chat?.users?.find(user => user.id !== auth.user.id);

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar
            sx={{
              width: "3.5rem",
              height: "3.5rem",
              fontSize: "1.5rem",
              bgcolor: "#191c29",
              color: "rgb(88,199,250)"
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&s"
          />
        }
        action={
          <IconButton>
            <MoreHorizIcon />
          </IconButton>
        }
        title={
          otherUser
            ? `${otherUser.firstName ?? ''} ${otherUser.lastName ?? ''}`.trim()
            : "Unknown User"
        }
        subheader={"@new Message"}
      />
    </Card>
  );
}

export default UserChatCard;
