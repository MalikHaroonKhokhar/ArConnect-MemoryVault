import React from 'react';

import Dashboard from "./components/Dashboard";
import FrontPage from "./components/FrontPage";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import MoodTracker from "./components/MoodTracker";
import ReminderSettings from "./components/ReminderSettings";
import JournalEntryForm from "./components/JournalEntryForm";
import { Documentation } from './components/Documentation';
import { AboutUs } from './components/AboutUs';

function App() {
  return (
   <BrowserRouter future={{ v7_startTransition: true }}>

    
    <Routes>
    
    <Route path='/' element={<FrontPage />}/>
    <Route path='/dashboard' exact element ={<Dashboard/>} />
    <Route path='/moodtracker' element={<MoodTracker />}/>
    <Route path='/settings' element={<ReminderSettings />}/>
    <Route path='/formentry' element={<JournalEntryForm />}/>
    <Route path='/documentation' element={<Documentation />}/>
    <Route path='/aboutus' element={<AboutUs/>}/>


  
    
    </Routes>
    

    </BrowserRouter>
    
  );
}
export default App
