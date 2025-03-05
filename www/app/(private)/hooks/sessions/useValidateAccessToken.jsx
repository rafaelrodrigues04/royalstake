'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const useValidateAccessToken = () => {
  
  const [error, setError] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const router = useRouter()

  const validate = async () => {
    // Validate the access token
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/sessions/refresh`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    
    if (res.ok && data.data.userId) {
      // Token is valid, now fetch the user details
      return await fetchUserDetails(data.data.userId);
    } else {
      if (data.action == 'redirect') {
        router.push('/')
      }

      setError(data.error || 'Invalid token or session expired');
      return false; // Invalid token
    }
  };

  // Step 2: Fetch user details by userId
  const fetchUserDetails = async (userId) => {
    const userRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/${userId}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const userData = await userRes.json();

    if (userRes.ok) {
      setUserDetails(userData.data); // Assuming user details are in data field
      return userData.data;
    } else {
      setError(userData.error || 'Failed to fetch user details');
      return false;
    }
  };

  return { validate, error, userDetails };
};

export default useValidateAccessToken;