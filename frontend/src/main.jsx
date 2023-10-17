import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SessionProvider, useSession } from './features/session/SessionContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SessionProvider>
    {/* <RenderApplication /> */}
        <React.StrictMode>
          <App />
        </React.StrictMode>
  </SessionProvider>
);

function RenderApplication() {
  const { restoreSession } = useSession();

  useEffect(() => {
    // Define an async function to use await
    const initializeApp = async () => {
      if (sessionStorage.getItem("X-CSRF-Token") === null && sessionStorage.getItem("currentUser") !== null) {
        try {
          // Await the restoreSession function
          await restoreSession();
        } catch (error) {
          console.error('Failed to restore session:', error);
        }
      }

      // Render your app after restoring the session
      ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    };

    // Call the async function
    initializeApp();
  }, [restoreSession]);

  return null;
}