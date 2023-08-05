//When a user clicks on a journal entry from the dashboard, they can view the full details of the entry on this page. 
//This will include the full text, any attached images or voice notes, and the mood associated with the entry. 
//You could also add an option to 'hide' the entry. This wouldn't delete it from Arweave, but it would tell the app not to display it anymore.
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const EntryDetailPage = () => {
    const navigate = useNavigate();

  return (
    <div><p>under development</p>
    <div>
        <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
    </div>
  )
}
