import Dashboard from "./components/Dashboard";
import FrontPage from "./components/FrontPage";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import MoodTracker from "./components/MoodTracker";
import ReminderSettings from "./components/ReminderSettings";
import JournalEntryForm from "./components/JournalEntryForm";

function App() {
  return (
   /* <BrowserRouter>
    <Routes>
    <div className="App">
     <h1>Hello welcome to memory Vault</h1>
    <Route path='/' element={<FrontPage />}/>
    <Route path='/dashboard' exact element ={<Dashboard/>} />
    <Route path='/moodtracker' name='moodtracker' element={<MoodTracker />}/>
    <Route path='/settings' element={<ReminderSettings />}/>
    <Route path='/formentry' element={<JournalEntryForm />}/>
  
    </div>
    </Routes>
    </BrowserRouter>*/
    <FrontPage/>
  );
}
export default App
