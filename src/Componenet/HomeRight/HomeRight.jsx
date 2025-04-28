import React from 'react'
import SearchUser from './SearchUser'
import PopularUserCard from './PopularUserCard'
import { Card } from '@mui/material'

const user =[2,3,4,5,6,3,4,5]
function HomeRight() {
  return (
    <div className=''>

      <SearchUser/>

     <Card className='p-2'>
      <div className='flex justify-between py-5 items-center'>
        <p className='font-semibold opacity-70'>Suggestion For You</p>
        <p className='text-xs font-semibold opacity-95'>View All</p>

      </div>

      <div className=''>
        {user.map(()=><PopularUserCard/>)}
        

      </div>
      </Card>

    </div>
  )
}

export default HomeRight