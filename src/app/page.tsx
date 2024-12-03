'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchUserRepos } from '@/lib/github';

export default function Home() {
  const [username, setUsername] = useState('');
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!username.trim()) return;
    
    setLoading(true);
    setError('');
    
    try {
      const data = await fetchUserRepos(username);
      setRepos(data);
    } catch (err) {
      setError('Failed to fetch repositories. Please check the username and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-8">GitHub Repository Explorer</h1>
      
      <div className="flex gap-4 mb-8">
        <Input
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="max-w-sm"
        />
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? 'Loading...' : 'Search'}
        </Button>
      </div>

      {error && (
        <div className="text-red-500 mb-4">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((repo) => (
          <Card key={repo.id} className={repo.stargazers_count > 100 ? "bg-gradient-to-r from-red-100 to-yellow-100" : ""}>
            <CardHeader>
              <CardTitle>{repo.name}</CardTitle>
              <CardDescription>{repo.description || 'No description available'}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <p>⭐ Stars: {repo.stargazers_count}</p>
                {repo.language && <p>🔤 Language: {repo.language}</p>}
                <Button variant="outline" onClick={() => window.open(repo.html_url, '_blank')}>
                  View Repository
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
