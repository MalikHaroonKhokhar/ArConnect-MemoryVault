//Feel Free to know a little more about the developer
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div><p>Hi Im Haroon</p>
    <div>
        <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
    </div>
    
  )
}
