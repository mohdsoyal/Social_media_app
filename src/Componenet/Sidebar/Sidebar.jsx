import React from 'react'
import { navigationMenu } from './SidebarNavigation'
import Divider from '@mui/material/Divider';
import { Avatar } from '@mui/material';
import BasicMenu from './BasicMenu';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
  const {auth}=useSelector(store=>store);
  const navigate=useNavigate();

  const handleNavigate = (item) => {
    if (item.title === "Profile") {
      navigate(`/profile/${auth.user.id}`);
    } else {
      navigate(item.path);
    }
  };
  
  return (
    <div className='card h-screen flex flex-col justify-between py-5 bg-white shadow-lg '>

      <div className=' space-y-8 pl-5'>

        <div className=''>
        <span className='logo font-[Times_New_Roman] font-bold text-xl'>M S Social</span>

        </div>
        
        <div className='space-y-4'>
          {navigationMenu.map((item)=>(
          <div onClick={(()=>handleNavigate(item))} className='cursor-pointer flex space-x-3 items'>{item.icon} <p className='text-xl'>{item.title}</p></div>))}
        </div>

        <div>
          <Divider/>

          <div className=' flex items-center justify-between pt-5'>
            <div className='flex items-center space-x-3'>
              <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&s'/>
              <div>
                <p className='font-bold'>{auth.user?.firstName +" "+ auth.user?.lastName}</p>
                <p className='opacity-70'>@{auth.user?.firstName +"_"+ auth.user?.lastName}</p>
              </div>
            </div>

            <div>
              <BasicMenu/>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar