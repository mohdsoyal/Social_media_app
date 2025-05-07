import { useEffect, useState } from 'react'
import './App.css'
import Authentication from './Pages/Authentication/Authentication'
import HomePage from './Home/HomePage'
import { Routes, Route } from 'react-router-dom';
import Message from './Message/Message'
import { useDispatch, useSelector } from 'react-redux';
import { getProfileAction } from './Auth/Auth.Action';


function App() {
  const [count, setCount] = useState(0)
  const {auth}=useSelector(store=>store);
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt");
    


  
  useEffect(()=>{
    dispatch(getProfileAction(jwt))
  },[jwt])

  return (
    <div>
      <Routes>
        <Route path="/*" element={auth.user?<HomePage />:<Authentication />} />
        <Route path="/message" element={<Message />} />
        <Route path="/*" element={<Authentication />} />
      </Routes>
    </div>
  )
}

export default App
