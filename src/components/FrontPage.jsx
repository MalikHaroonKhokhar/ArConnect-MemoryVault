import React from 'react'
import {SiHomebridge,SiLivejournal} from 'react-icons/si'
import {TbMoodCheck} from 'react-icons/tb'
import {MdDisplaySettings} from 'react-icons/md'
import {HiDocumentText} from 'react-icons/hi'
import {FaUserAstronaut} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';





const FrontPage = () => {
  const navigate = useNavigate();

  return (
    <div>
               <h1>Hello Welcome to Memory Vault</h1>
              
              <div>
              <button onClick={() => navigate("/dashboard")} > <h2><SiHomebridge/> DashBoard</h2></button> 
            </div>
            <div>
               <button onClick={() => navigate("/moodtracker")}>  <h2><TbMoodCheck/>MoodTracker</h2></button>
               </div>
               <div>

              <button onClick={() => navigate("/settings")}>  <h2><MdDisplaySettings/>ReminderSettings</h2></button>
              </div>

              <div>

              <button onClick={() => navigate("/formentry")}>  <h2><SiLivejournal/>Journal</h2></button>
              </div>

              <div>

              <button onClick={() => navigate("/documentation")}>  <h2><HiDocumentText/>Documentation</h2></button>
              </div>

              <div>

              <button onClick={() => navigate("/aboutus")}>  <h2><FaUserAstronaut/>AboutUs</h2></button>
              </div>



       
    </div>
  )
}

export default FrontPage
