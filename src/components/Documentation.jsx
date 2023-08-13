//Thi file consists of the documentation of the site 
//X0X0
//Right now its dummy data it will be upated soon 
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Documentation = () => {
  const navigate = useNavigate();

  return (
    <div>
   
   
    <div >
      <div>
        <h2 >Table of Contents</h2>
        <ul >
          <li><a href="#Overview">1) Overview</a></li>
          <li><a href="#background">2) System Architecture</a></li>
         
        </ul>
      </div>

      <div >
        <h1>Documentation</h1>

        <section >
          <h2 >1) Overview</h2>
          <p>
Memory Vault is a secure, decentralized journaling application where users can create, view, and manage their personal entries. It allows for a unique blend of text, voice, and image entries stored permanently          </p>
          <p>
on the Arweave network. Utilizing ArConnect for managing Arweave wallet interactions, Memory Vault offers a user-friendly interface, mood tracking, and customized reminders, creating a comprehensive journaling          </p>
          <p>
            experience.
          </p>
         
        </section>

        <section >
          <h2>2) System Architecture</h2>
          <p>
The <strong>frontend</strong> is built using React.js and handles all user interactions. It contains the following key components:<br></br>

1. <strong>ArConnect Integration Component:</strong> This manages user sign-in via ArConnect, enabling direct interaction with the user's Arweave wallet.<br></br>

2. <strong>Dashboard/Entry List Component:</strong> This displays a list of journal entries, retrieved from the Arweave network using transaction IDs stored in MongoDB. It also provides options for filtering and searching entries.<br></br>

3. <strong>Journal Entry Form Component:</strong> Users can create new entries (text, image, or voice note), add tags, record mood, and then submit them. Upon submission, entries are uploaded to Arweave using ArConnect, and the transaction ID is sent to the backend.<br></br>

4. <strong>Entry Detail Component:</strong> This shows a more detailed view of a selected entry, including attached images or voice notes, and the mood associated with the entry. It also allows users to 'hide' an entry from their journal.<br></br>

5. <strong>Mood Tracker Component:</strong> Displays a graph showing mood trends over time based on user entries. This data is fetched from MongoDB.<br></br>

6. <strong>Settings/Reminder Component:</strong> This allows users to configure their reminder settings for regular entries.          </p>
          <p>
            The <strong> backend</strong> is built using Node.js and Express.js and serves to manage server-side logic:<br></br>

- <strong>Routes/Controllers:</strong> Handles HTTP requests from the frontend, including storing new journal entry references (Arweave transaction IDs), retrieving journal entries, updating settings, and more.<br></br>

- <strong>Reminder Service:</strong> A background service that sends reminder notifications to users based on their settings.<br></br>
          </p>
          <p>
            <strong>MongoDB</strong> is used to store data, including:<br></br>

- <strong>User Data:</strong> User credentials, settings, reminder configurations, and references to the Arweave transaction IDs of journal entries.<br></br>
- <strong>Mood Data:</strong> Mood data for each entry, associated with the user ID and date.<br></br>
          </p>
          <p>
            <strong>ArConnect</strong> is used on the frontend to manage users' Arweave wallets and facilitate transactions.<br></br>

- <strong>Journal Entries:</strong> All entries (text, image, voice note) are stored on the Arweave network with a unique transaction ID for each entry.<br></br>
- <strong>Read/Write Operations:</strong> The frontend handles writing new entries to Arweave and reading existing ones based on the unique transaction IDs stored in MongoDB.<br></br>

          </p>
        </section>

       

     
      </div>
    </div>
    
    <div>
        <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
    </div>
  )
}
