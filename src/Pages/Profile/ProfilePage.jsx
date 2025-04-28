import { Avatar, Button } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

function ProfilePage() {
  const {id} = useParams()
  return (
    <div className='py-10  w-[70%]'>

      <div className='rounded-md '>

        <div className='h-[15rem]'>
          <img className='w-full h-full rounded-t-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HtrA_XO6WEGfO6R7hS2PKTQKYd5wDriNCQ&s" alt="" srcset="" />
        </div>
        <div className='px-5 flex justify-between items-start mt-5 h-[5rem]'>

          <Avatar  className='transform -translate-y-19' sx={{width:"8rem",height:"8rem"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2HtrA_XO6WEGfO6R7hS2PKTQKYd5wDriNCQ&s'/>
          {true?<Button sx={{borderRadius:"15px"}} variant='outlined'>Edit Profile</Button>: <Button variant='outlined'>Follow</Button>}
          
         
        </div>
      </div>
    </div>
  )
}




export default ProfilePage