//Where users can create their entries. This form should handle text, tags, mood, and attachments (images and voice notes).
//This page allows users to create new journal entries. The form could include fields for the entry title, the main text, an option to add tags, a mood selection, and options to attach images or voice notes. 
//Once the user submits the form, the entry will be uploaded to Arweave through ArConnect, and the transaction ID will be sent to the backend to be stored in MongoDB.
import React,{ useState } from 'react'
import { useNavigate } from 'react-router-dom';


const JournalEntryForm = () => {
  const navigate = useNavigate();

  const [file, setFile] = useState();
  function handleChange(e) {
      console.log(e.target.files);
      setFile(URL.createObjectURL(e.target.files[0]));
  }
  return (
    <div>
          <h1>Welcome To Journal Entry Form</h1>

      <div>
      <label>
      Title Input Field: <input name="myInput" />

      </label>
      </div>
      <div>
        <label>
        Main Entry Area: <input name="myInput" />

        </label>
        </div>
        <p>
         Select Mood:
        <label>
          <input type="radio" name="myRadio" value="option1" />
          Happy
        </label>
        <label>
          <input type="radio" name="myRadio" value="option2" />
          Sad
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          Angry
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          neutral
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          excited
        </label>
      </p>
      <div>
        <label>
        Enter tags: <input name="myInput" />

        </label>
        </div>
        <div className="App">
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file}  alt="just for backup"/>
 
        </div>
        <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  )
}

export default JournalEntryForm
