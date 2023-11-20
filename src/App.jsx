import Navbar from "./navbar/navbar" 
import { Routes, Route } from "react-router-dom"
import sidebar from "./component/sidebar"

import Home from "./pages/index"
import Friend from "./pages/friend"
import Video from "./pages/video"
import Group from "./pages/group"
import Market from "./pages/marketplace"
import { useContext, createContext } from "react"

const SidebarContex = createContext(null);

function App() {
  return (
    <SidebarContex.Provider value={sidebar}>

    <div className='bg-neutral-300'>
     <Navbar/>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path="friend" element={<Friend/>}/>
      <Route path="video" element={<Video/>}/>
      <Route path="group" element={<Group/>}/>
      <Route path="market" element={<Market/>}/>
     </Routes>
    </div>
    </SidebarContex.Provider>
  )
}

export default App
