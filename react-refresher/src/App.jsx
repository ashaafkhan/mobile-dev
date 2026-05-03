import React, { useState, useEffect } from 'react'
import GitHubProfile from './GitHubProfile'

const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                setIsLoading(true);
                setError('');
                const response = await fetch('https://api.github.com/users/ashaafkhan');
                if (!response.ok) {
                    throw new Error('Failed to load profile');
                }
                const profile = await response.json();
                setData(profile);
            } catch (err) {
                setError(err.message || 'Something went wrong');
            } finally {
                setIsLoading(false);
            }
        };

        fetchGithubData();
    }, []);

    return (
        <main className="gh-page">
            <GitHubProfile data={data} isLoading={isLoading} error={error} />
        </main>
    )
}

export default App