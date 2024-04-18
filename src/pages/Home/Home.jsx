import React from 'react'
import Topbar from '../../Component/topbar/Topbar'
import Sidebar from '../../Component/sidebar/Sidebar'
import Rightbar from '../../Component/rightbar/Rightbar'
import Feed from '../../Component/feed/Feed'
import './home.css'

const Home = () => {
  return (
    <>
    <Topbar/>
    <div className="homeContainer">
      <Sidebar/>
      <Feed/>
      <Rightbar/>
    </div>
    </>
  )
}

export default Home