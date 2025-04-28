import React from 'react'
import { navigationMenu } from './SidebarNavigation'
import Divider from '@mui/material/Divider';
import { Avatar } from '@mui/material';
import BasicMenu from './BasicMenu';

function Sidebar() {
  return (
    <div className='card h-screen flex flex-col justify-between py-5 bg-white shadow-lg '>

      <div className=' space-y-8 pl-5'>

        <div className=''>
        <span className='logo font-[Times_New_Roman] font-bold text-xl'>M S Social</span>

        </div>
        
        <div className='space-y-4'>
          {navigationMenu.map((item)=> <div className='cursor-pointer flex space-x-3 items'>{item.icon} <p className='text-xl'>{item.title}</p></div>)}
        </div>

        <div>
          <Divider/>

          <div className=' flex items-center justify-between pt-5'>
            <div className='flex items-center space-x-3'>
              <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHUndSzxcF1UbSXX3bVILVaUbSIhoc_GEA8g&s'/>
              <div>
                <p className='font-bold'>M S Social</p>
                <p className=''>@Mohd Soyal</p>
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