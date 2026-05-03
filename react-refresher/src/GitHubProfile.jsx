import React from 'react';
import './GitHubProfile.css';

const GitHubProfile = ({ data, isLoading, error }) => {
  const avatarUrl = data?.avatar_url || 'https://avatars.githubusercontent.com/u/1?v=4';
  const displayName = data?.name || 'GitHub User';
  const username = data?.login || 'unknown';
  const bio = data?.bio || 'Minimal profile. No fluff.';
  const location = data?.location || 'Earth';
  const repoCount = data?.public_repos ?? 0;
  const followerCount = data?.followers ?? 0;
  const followingCount = data?.following ?? 0;

  return (
    <section className="gh-card">
      <header className="gh-header">
        <img className="gh-avatar" src={avatarUrl} alt={displayName} />
        <div>
          <h1 className="gh-name">{displayName}</h1>
          <p className="gh-handle">@{username}</p>
        </div>
      </header>

      <p className="gh-bio">{bio}</p>

      <div className="gh-stats">
        <div className="gh-stat">
          <span className="gh-stat-label">Repos</span>
          <span className="gh-stat-value">{repoCount}</span>
        </div>
        <div className="gh-stat">
          <span className="gh-stat-label">Followers</span>
          <span className="gh-stat-value">{followerCount}</span>
        </div>
        <div className="gh-stat">
          <span className="gh-stat-label">Following</span>
          <span className="gh-stat-value">{followingCount}</span>
        </div>
      </div>

      <div className="gh-meta">
        <span>{location}</span>
        <span>github.com/{username}</span>
      </div>

      <a
        className="gh-link"
        href={data?.html_url || 'https://github.com'}
        target="_blank"
        rel="noreferrer"
      >
        View profile
      </a>

      {isLoading && <p className="gh-status">Loading profile...</p>}
      {error && <p className="gh-status">{error}</p>}
    </section>
  );
};

export default GitHubProfile;
