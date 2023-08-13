//A graph displaying the user's mood over time.
// This page displays a graph showing the user's mood over time. 
//The mood data can be fetched from the MongoDB database, and a library like D3.js or Chart.js can be used to create the graph.
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


// Dummy function to fetch mood data
async function fetchMoodData() {
    return {
        happy: 5,
        sad: 2,
        neutral: 3,
        angry: 1,
        excited: 4,
        
    };
}

const MoodTracker = () => {
    const [moods, setMoods] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        async function loadMoods() {
            const moodData = await fetchMoodData();
            setMoods(moodData);
        }

        loadMoods();
    }, []);

    return (
        <div>
            <h1>Mood Tracker</h1>
            <ul>
                {Object.entries(moods).map(([mood, count]) => (
                    <li key={mood}>
                        <strong>{mood.charAt(0).toUpperCase() + mood.slice(1)}:</strong> {count} times
                    </li>
                ))}
            </ul>
        
         <div>
         <button onClick={() => navigate("/")}>Back to Home</button>
         </div>
     </div>
    );
};

export default MoodTracker;
