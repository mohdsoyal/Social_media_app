import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useLocation } from 'react-router-dom' 
import { Routes, Route } from 'react-router-dom'
import MiddlePart from '../Componenet/Middle/MiddlePart' 
import CreateReels from '../Componenet/Reels/CreateReels'
import Reels from '../Componenet/Reels/Reels'
import ProfilePage from '../Pages/Profile/ProfilePage'
import HomeRight from '../Componenet/HomeRight/HomeRight'
import Sidebar from '../Componenet/Sidebar/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { getProfileAction } from '../Auth/Auth.Action'


function HomePage() {
    
    const dispatch=useDispatch()
    const jwt=localStorage.getItem("jwt");
    const location = useLocation()
    const {auth}=useSelector(store=>store);

    console.log("Auth....",auth);



    return (
        <div className='px-20'>
            <Grid container spacing={0}>
                <Grid item xs={0} lg={3}>
                    <div className='sticky top-0'> 
                        <Sidebar/>
                    </div>
                </Grid>

                <Grid item xs={12} lg={location.pathname === "/" ? 6 : 9} className='px-5 flex justify-center'>
                    
                <Routes>
                  <Route path="/" element={<MiddlePart />} />
                  <Route path="/reels" element={<Reels/>} />
                  <Route path="/create-reels" element={<CreateReels />} />
                  <Route path="/profile/:id" element={<ProfilePage />} />
                  

                 </Routes>
                </Grid>

                { location.pathname==="/" && <Grid item lg={3} className='relative'>

                    <div className='sticky top-0 w-full'>
                        <HomeRight/>
                    </div>

                </Grid>}
            </Grid>
        </div>
    )
}

export default HomePage
