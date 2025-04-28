import { useState } from 'react'
import './App.css'
import Authentication from './Pages/Authentication/Authentication'
import HomePage from './Home/HomePage'
import { Routes, Route } from 'react-router-dom';
import Message from './Message/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/message" element={<Message />} />
        <Route path="/auth" element={<Authentication />} />
      </Routes>
    </div>
  )
}

export default App
