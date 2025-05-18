import React, { useState } from 'react';
import { Avatar, Card, CardHeader } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../Auth/Auth.Action';
import { createChat } from '../Redux/Message/message.action';

function SearchUser() {

    const [username ,setUsername]=useState("");
    const dispatch=useDispatch();
    const {message, auth}=useSelector(store => store);



  const handleSearchUser = (e) => {
    setUsername(e.target.value)
    console.log("handle search user...........");
    dispatch(searchUser(username))
  };

  const handleClick = (id) => {
    dispatch(createChat({userId:id}))
  };

  return (
    <div>
      {/* Search Input */}
      <div className="py-5 relative">
        <input
          className="bg-transparent border border-[#3b4054] outline-none w-full text-black px-5 py-3 rounded-full"
          placeholder="Search User"
          onChange={handleSearchUser}
          type="text"
        />

         {
        username && (
          auth.searchUser.map((item)=> <Card className="cursor-pointer absolute w-full z-10 top-[4.5rem]" onClick={() =>{ handleClick(item.id); setUsername("")}}>
            <CardHeader
              avatar={
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&s" />
              }
              title={item.firstName +" " +item.lastName}
              subheader={"@"+item.firstName.toLowerCase() +"_" +item.lastName.toLowerCase()}
            />
          </Card>)
        )
      }
      </div>

  
     
    </div>
  );
}

export default SearchUser;
