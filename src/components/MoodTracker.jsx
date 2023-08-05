//A graph displaying the user's mood over time.
// This page displays a graph showing the user's mood over time. 
//The mood data can be fetched from the MongoDB database, and a library like D3.js or Chart.js can be used to create the graph.
import React from 'react'
import { useNavigate } from 'react-router-dom';


const MoodTracker = () => {
  const navigate = useNavigate();

  return (
    <div>
       <div><p>under development</p>
    <div>
        <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
    </div>
    </div>
  )
}

export default MoodTracker
