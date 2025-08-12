// import { useState } from 'react'
// import Sidebar from './components/Sidebar'
// import MainContainer from './components/Main'
// import { DataProvider } from './context/DataContext'

// function App() {

//   return (
//     <DataProvider>
//       <div className='flex lg:flex-row flex-col w-[100vw] lg:bg-gray-100 md:bg-gray-100 bg-white overflow-x-hidden'>
//         <Sidebar />
//         <MainContainer />
//       </div>
//     </DataProvider>
//   )
// }

// export default App


// src/App.js
import React, { useState, useEffect } from 'react';
import { registerServiceWorker, subscribeUserToPush } from './serviceWorkerRegistration';

const App = () => {
  const [isPWAEnabled, setIsPWAEnabled] = useState(true);
  const [isPushEnabled, setIsPushEnabled] = useState(false);

  useEffect(() => {
    if (isPWAEnabled) {
      registerServiceWorker();
    }
  }, [isPWAEnabled]);

  useEffect(() => {
    subscribeUserToPush(isPushEnabled);
  }, [isPushEnabled]);

  const handlePushToggle = () => {
    setIsPushEnabled(!isPushEnabled);
  };

  const sendNotification = async () => {
    if (isPushEnabled) {
      await fetch('http://localhost:5000/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      alert('Enable push notifications first.');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>PWA & Notifications App</h1>

      <div style={{ margin: '10px 0' }}>
        <label>
          <input
            type="checkbox"
            checked={isPWAEnabled}
            onChange={() => setIsPWAEnabled(!isPWAEnabled)}
          />
          Enable PWA Mode
        </label>
      </div>

      <div style={{ margin: '10px 0' }}>
        <label>
          <input
            type="checkbox"
            checked={isPushEnabled}
            onChange={handlePushToggle}
          />
          Enable Push Notifications
        </label>
      </div>

      <button
        onClick={sendNotification}
        disabled={!isPushEnabled}
        style={{
          padding: '8px 16px',
          backgroundColor: isPushEnabled ? '#4CAF50' : '#ccc',
          color: 'white',
          border: 'none',
          cursor: isPushEnabled ? 'pointer' : 'not-allowed',
        }}
      >
        Send Test Notification
      </button>

      <p>PWA Mode: {isPWAEnabled ? 'Enabled' : 'Disabled'}</p>
      <p>Push Notifications: {isPushEnabled ? 'Enabled' : 'Disabled'}</p>
    </div>
  );
};

export default App;
