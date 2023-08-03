import React from 'react'
import {SiHomebridge,SiLivejournal} from 'react-icons/si'
import {TbMoodCheck} from 'react-icons/tb'
import {MdDisplaySettings} from 'react-icons/md'


const FrontPage = () => {
  return (
    <div>
  
            <span>  <p><SiHomebridge/> DashBoard</p></span>
            <span>  <p><TbMoodCheck/>MoodTracker</p></span>
            <span>  <p><MdDisplaySettings/>ReminderSettings</p></span>
            <span>  <p><SiLivejournal/>Journal</p></span>
       
    </div>
  )
}

export default FrontPage
