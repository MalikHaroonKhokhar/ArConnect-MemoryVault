//A settings page where users can set up their reminders.
//Here, users can set up reminders to make regular journal entries.
// They can choose the frequency (daily, every other day, etc.) and the time when they want to receive the reminder.
// The reminder settings will be sent to the backend to be stored in MongoDB.
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ReminderSettings = () => {
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

export default ReminderSettings
