# GitHub Candidate Search Application

## Description
A React application that allows employers to search through GitHub user profiles as potential candidates. The app displays user information one at a time, allowing employers to save potential candidates for later review.

## Features
- View GitHub user profiles one at a time
- Save potential candidates with a "+" button
- Skip candidates with a "-" button
- View list of saved candidates that persists across page reloads
- Display candidate information including:
  - Name
  - Username
  - Location
  - Avatar
  - Email
  - GitHub Profile URL
  - Company

## Setup
1. Clone the repository
2. Create a GitHub Personal Access Token
   - Visit GitHub Settings > Developer Settings > Personal Access Tokens
   - Create a fine-grained token with default permissions
3. Create a `.env` file in the environment folder:
   ```
   VITE_GITHUB_TOKEN=your_token_here
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Usage
- The main page shows one candidate at a time
- Click "+" to save a candidate and view the next one
- Click "-" to skip the current candidate
- Visit the Saved Candidates page to view all saved potential candidates
- Saved candidates persist even after page reload

## Project Structure
```
src/
  components/
    CandidateCard.tsx
  pages/
    CandidateSearch.tsx
    SavedCandidates.tsx
  utils/
    localStorage.ts
  types/
    candidate.ts
```

## Dependencies
- React
- TypeScript
- Vite
- Tailwind CSS

## Notes
- The app requires a GitHub Personal Access Token to function
- The token should be kept private and not committed to version control
- Saved candidates are stored in the browser's localStorage

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
This project is licensed under the MIT License.