//A page where users can view, search and filter their entries.
//After logging in, the user will be taken to the dashboard. This page will display a list of the user's previous journal entries, which can be fetched from Arweave using the transaction IDs stored in MongoDB.
// The entries could be displayed in reverse chronological order, with options for searching and filtering by date, tags, or text.
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



async function fetchJournalEntries() {
    //  HTTP request to backend or directly fetching from Arweave.
    return [
        { title: 'Sample Entry 1', content: 'This is a sample entry.', mood: 'happy' },
        
    ];
}

const Dashboard = () => {
  const navigate = useNavigate();

    const [entries, setEntries] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function loadEntries() {
            const fetchedEntries = await fetchJournalEntries();
            setEntries(fetchedEntries);
        }

        loadEntries();
    }, []);

    const filteredEntries = entries.filter(entry => entry.title.includes(searchTerm));

    return (
        <div>
            <h1>Journal Dashboard</h1>
            <input 
                type="text" 
                placeholder="Search entries..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <ul>
                {filteredEntries.map((entry, index) => (
                    <li key={index}>
                        <h2>{entry.title}</h2>
                        <p>{entry.content}</p>
                        <p>Mood: {entry.mood}</p>
                        {/* Optionally, add buttons or links to view full entry, edit, delete, etc. */}
                    </li>
                ))}
            </ul>
            <div>
        <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
        </div>
    );
};

export default Dashboard;

