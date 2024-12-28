import React, { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { Dashboard } from './components/Dashboard';

function App() {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleLogin = (username: string) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {!loggedInUser ? (
        <div className="min-h-screen flex items-center justify-center px-4">
          <LoginForm onLogin={handleLogin} />
        </div>
      ) : (
        <Dashboard username={loggedInUser} onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;