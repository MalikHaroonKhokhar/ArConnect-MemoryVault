//This will handle user sign-in via ArConnect and manage the creation and signing of Arweave transactions for journal entries.
//This will be the first screen that users see when they open the app. If the user has ArConnect installed,
// they can sign in to their ArConnect wallet. If not, they'll be prompted to install it.
// After signing in, the app will get access to the user's wallet, enabling them to interact with the Arweave network.
import React from 'react'
import { useNavigate } from 'react-router-dom';

const ArConnectIntegration = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>under developement</p>
      <div>
        <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
      
    </div>
  )
}

export default ArConnectIntegration
