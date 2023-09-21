import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SessionProvider, useSession } from './features/session/SessionContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SessionProvider>
    <RenderApplication />
  </SessionProvider>
);

function RenderApplication() {
  const { restoreSession } = useSession();

  if (sessionStorage.getItem("X-CSRF-Token") === null && sessionStorage.getItem("currentUser") !== null) {
    
    restoreSession()
      .then(() => {
        ReactDOM.createRoot(document.getElementById('root')).render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
      })
      .catch((error) => {
        console.error('Failed to restore session:', error);
        ReactDOM.createRoot(document.getElementById('root')).render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
      });

    return null; 
  }

  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
