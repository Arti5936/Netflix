import React, { useState } from 'react';
import SuprSendInbox from '@suprsend/react-inbox';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'; // Import the CSS file

const App = () => {
  const [showSuprSend, setShowSuprSend] = useState(false);

  const handleButtonClick = () => {
    setShowSuprSend(!showSuprSend);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div className="header">
        <button onClick={handleButtonClick} className="toggle-button">
          {showSuprSend ? 'Hide SuprSend' : 'Show SuprSend'}
        </button>
        
        {showSuprSend && (
          <SuprSendInbox
            workspaceKey="pwrBVgn9AEqgxZ7ZEr8q"
            subscriberId="RdNnvZqRI1ISuw2YyhhJNh1NZSO-2TgQOry9wr6cHrM"
            distinctId="1234567"
            theme={{ bell: { color: 'blue' }, header: { container: { backgroundColor: 'grey' }, headertext: { color: 'black' }, markAllReadText: { color: 'red' } } }}
            themeType='dark'
            className="suprsend-icon"
        />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
