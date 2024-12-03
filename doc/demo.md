# GitHub Repository Explorer

A modern web application that allows users to explore GitHub repositories by username. Built with Next.js and styled with Tailwind CSS.

## Features

- Search repositories by GitHub username
- Display repository cards with key information:
  - Repository name and description
  - Star count
  - Primary programming language
  - Direct link to repository
- Highlighted cards for popular repositories (100+ stars)
- Responsive grid layout
- Loading states and error handling

## Usage

1. Enter a GitHub username in the search box
2. Click the "Search" button
3. View the list of repositories displayed as cards
4. Click "View Repository" on any card to open the repository in GitHub

## Technical Implementation

The application is built using:
- Next.js 13+ with App Router
- React (Client Components)
- Tailwind CSS for styling
- Shadcn UI components
- GitHub REST API for data fetching

## UI Components

The interface uses several reusable components:
- Button: Interactive elements for search and repository links
- Input: Text field for username entry
- Card: Container for repository information
- Loading states: Visual feedback during API calls
- Error handling: Clear error messages for failed requests

## Styling

- Responsive grid layout (1 column on mobile, 2 on tablet, 3 on desktop)
- Special gradient background for repositories with over 100 stars
- Clean, modern UI with consistent spacing
- Mobile-friendly design

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Future Enhancements

Potential features to consider:
- Advanced filtering options
- Pagination for users with many repositories
- Repository statistics and analytics
- User profile information
- Repository search within user's repositories
