//A page where users can view, search and filter their entries.
//After logging in, the user will be taken to the dashboard. This page will display a list of the user's previous journal entries, which can be fetched from Arweave using the transaction IDs stored in MongoDB.
// The entries could be displayed in reverse chronological order, with options for searching and filtering by date, tags, or text.
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div><p>under development</p>
    <div>
        <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
    </div> )
}

export default Dashboard
