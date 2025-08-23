import { useState } from 'react'
import Home from './pages/home'
import Sidebar from './components/Sidebar'
import './App.css'

function App() {
  

  return (
  <div className='h-screen w-screen bg-[#F7F8FA] flex'>
     <Sidebar />
     <main className='flex-1'>
       <Home />
     </main>
    </div>
  )
}

export default App
