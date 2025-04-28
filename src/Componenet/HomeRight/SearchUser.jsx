import { Card, Avatar } from '@mui/material'
import React from 'react'


function SearchUser() {
  return (
    
       
        <div className="flex items-center justify-between gap-4 mt-7">
        
          <input
            className="outline-none w-full rounded-full px-5 py-2 bg-transparent border border-[#3b4054]"
            type="text"
            placeholder='Search User'
            
          />
        </div>
        

    
  )
}

export default SearchUser