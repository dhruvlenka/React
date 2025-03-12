import React from 'react'
import { useState } from 'react'

function RegistrationForm() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulating API call
    setTimeout(() => {
      setUser({ name: 'John' });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      {/* Loading state */}
      {isLoading && <p>Loading...</p>}

      {/* Error state */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* User logged in/out state */}
      {user ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          <button onClick={() => setUser(null)}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Register</h1>
          <input type="text" placeholder="Username" />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
      )}
    </div>
  );
}

export default RegistrationForm;