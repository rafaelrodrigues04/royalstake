'use client'

import { useState, useEffect } from 'react';
import useValidateAccessToken from '../sessions/useValidateAccessToken';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const { validate } = useValidateAccessToken();

    // Fetch user details when the hook is mounted
    useEffect(() => {
        const fetchUser = async () => {
            const userData = await validate();
            if (userData) {
                setUser(userData);
            }
        };

        fetchUser();
    }, []);

    // Logout function
    const logout = async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users/logout`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.ok) {
                setUser(null); // Clear user state
            } else {
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return { user, logout };
};

export default useAuth;