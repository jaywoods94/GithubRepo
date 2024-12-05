import { useState, useEffect } from 'react';

interface Candidate {
  id: number;
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  email: string;
  company: string;
  html_url: string;
}

const mockCandidates: Candidate[] = [
  {
    id: 1,
    name: "John Doe",
    login: "johndoe",
    avatar_url: "/api/placeholder/80/80",
    location: "San Francisco, CA",
    email: "john@example.com",
    company: "Tech Corp",
    html_url: "https://github.com/johndoe"
  },
  {
    id: 2,
    name: "Jane Smith",
    login: "janesmith",
    avatar_url: "/api/placeholder/80/80",
    location: "New York, NY",
    email: "jane@example.com",
    company: "Dev Inc",
    html_url: "https://github.com/janesmith"
  },
  {
    id: 3,
    name: "Bob Wilson",
    login: "bobwilson",
    avatar_url: "/api/placeholder/80/80",
    location: "Seattle, WA",
    email: "bob@example.com",
    company: "Code Co",
    html_url: "https://github.com/bobwilson"
  }
];

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (mockCandidates.length > 0) {
      setCurrentCandidate(mockCandidates[0]);
    }
  }, []);

  const handleAccept = () => {
    if (currentCandidate) {
      const savedCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      if (!savedCandidates.some((c: Candidate) => c.id === currentCandidate.id)) {
        localStorage.setItem(
          'savedCandidates', 
          JSON.stringify([...savedCandidates, currentCandidate])
        );
      }
    }
    loadNextCandidate();
  };

  const loadNextCandidate = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < mockCandidates.length) {
      setCurrentCandidate(mockCandidates[nextIndex]);
      setCurrentIndex(nextIndex);
    } else {
      setCurrentCandidate(null);
    }
  };

  const handleReject = () => {
    loadNextCandidate();
  };

  if (!currentCandidate) {
    return <div className="text-center mt-8">No more candidates available</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Candidate Search</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={currentCandidate.avatar_url}
            alt={`${currentCandidate.login}'s avatar`}
            className="w-20 h-20 rounded-full"
          />
          <div>
            <h2 className="text-xl font-semibold">
              {currentCandidate.name || currentCandidate.login}
            </h2>
            <p className="text-gray-600">@{currentCandidate.login}</p>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {currentCandidate.location && (
            <p className="text-gray-700">
              📍 Location: {currentCandidate.location}
            </p>
          )}
          {currentCandidate.email && (
            <p className="text-gray-700">
              ✉️ Email: {currentCandidate.email}
            </p>
          )}
          {currentCandidate.company && (
            <p className="text-gray-700">
              🏢 Company: {currentCandidate.company}
            </p>
          )}
          <p className="text-gray-700">
            🔗 Profile: <a 
              href={currentCandidate.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {currentCandidate.html_url}
            </a>
          </p>
        </div>

        <div className="flex justify-between">
          <button
            onClick={handleReject}
            className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
          >
            -
          </button>
          <button
            onClick={handleAccept}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateSearch;