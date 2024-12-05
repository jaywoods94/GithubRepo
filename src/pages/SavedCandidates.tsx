import { useState, useEffect } from 'react';

interface Candidate {
  id: number;
  name?: string | null;
  login: string;
  avatar_url?: string | null;
  location?: string | null;
  email?: string | null;
  company?: string | null;
  html_url?: string | null;
}

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setSavedCandidates(candidates);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Potential Candidates</h1>
      
      {savedCandidates.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {savedCandidates.map((candidate) => (
            <div 
              key={candidate.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={candidate.avatar_url || "/api/placeholder/80/80"}
                    alt={`${candidate.login}'s profile`}
                    className="w-20 h-20 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">
                      {candidate.name || candidate.login}
                    </h2>
                    <p className="text-gray-600">@{candidate.login}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-gray-700">
                    📍 Location: {candidate.location || 'N/A'}
                  </p>
                  <p className="text-gray-700">
                    ✉️ Email: {candidate.email || 'N/A'}
                  </p>
                  <p className="text-gray-700">
                    🏢 Company: {candidate.company || 'N/A'}
                  </p>
                  {candidate.html_url && (
                    <p className="text-gray-700">
                      🔗 Profile: <a 
                        href={candidate.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {candidate.html_url}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-8">
          No candidates have been saved yet.
        </div>
      )}
    </div>
  );
};

export default SavedCandidates;
