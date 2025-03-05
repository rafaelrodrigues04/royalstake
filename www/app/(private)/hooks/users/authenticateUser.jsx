import { useState } from 'react';

const authenticateUser = () => {
  const [error, setError] = useState('');

  const login = async (email, password) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok && data.accessToken) {
        return true;
    } else {
        setError(data.error);
        return false;
    }
  };

  // Function to clear the error
  const clearError = () => setError('');

  return { login, error, clearError };
};

export default authenticateUser;