import React, { useState } from 'react';
import { Avatar, Box, Button, Tab, Tabs } from '@mui/material';
import { useParams } from 'react-router-dom';
import PostCard from '../../Componenet/Post/PostCard';
import UserReelsCard from '../../Componenet/Reels/UserReelsCard';
import { useSelector } from 'react-redux';

const tabs = [
  { value: "post", name: "post" },
  { value: "reels", name: "reels" },
  { value: "saved", name: "saved" },
  { value: "repost", name: "repost" },
];

const posts = [1, 2, 3, 4, 5];
const reels = [1, 2, 3, 4, 5];
const saved = [1, 2, 3, 4, 5];

function ProfilePage() {
  const { id } = useParams();
  const [value, setValue] = useState('post');
  const {auth}=useSelector(store=>store);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="py-10 w-[70%]">
      <div className="rounded-md">
        <div className="h-[15rem]">
          <img
            className="w-full h-full rounded-t-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HtrA_XO6WEGfO6R7hS2PKTQKYd5wDriNCQ&s"
            alt="Profile Cover"
          />
        </div>

        <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-19"
            sx={{ width: "8rem", height: "8rem" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HtrA_XO6WEGfO6R7hS2PKTQKYd5wDriNCQ&s"
          />
          <Button sx={{ borderRadius: "15px" }} variant="outlined">
            Edit Profile
          </Button>
        </div>

        <div className="p-5">
          <div>
            <h1 className="py-1 font-bold text-xl">
              {auth.user?.firstName + " " + auth.user?.lastName}
            </h1>
            <p>@{auth.user?.firstName + "_" + auth.user?.lastName}</p>
          </div>

          <div className="flex gap-5 items-center py-3">
            <span>41 Posts</span>
            <span>35 Followers</span>
            <span>36 Following</span>
          </div>

          <div>
            <p>odit officia est. Quia sed nostrum corrupti nesciunt.</p>
          </div>
        </div>

        <section className="px-5">
          <Box sx={{ width: "100%", borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="profile page tabs"
            >
              {tabs.map((item) => (
                <Tab key={item.value} value={item.value} label={item.name} wrapped />
              ))}
            </Tabs>
          </Box>

          <div className="flex justify-center">
            {value === "post" ? (
              <div className="space-y-5 w-[70%] my-10">
                {posts.map((item) => (
                  <div key={item} className="border border-slate-200 rounded-md">
                    <PostCard />
                  </div>
                ))}
              </div>
            ) : value === "reels" ? (
              <div className="flex justify-center flex-wrap gap-2 my-10">
                {reels.map((item, index) => <UserReelsCard key={index} />)}
              </div>
            ) : value === "saved" ? (
              <div className="flex justify-center flex-wrap gap-2 my-10">
                {saved.map((item, index) => <PostCard key={index} />)}
              </div>
            ) : (
              <div>Repost</div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProfilePage;
