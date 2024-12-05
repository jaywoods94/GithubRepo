
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

interface CardProps {
  candidate: Candidate;
  onAccept?: () => void;
  onReject?: () => void;
  showActions?: boolean;
}

const CandidateCard = ({ candidate, onAccept, onReject, showActions = false }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
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

        {showActions && (
          <div className="flex justify-between mt-4">
            <button
              onClick={onReject}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300"
            >
              -
            </button>
            <button
              onClick={onAccept}
              className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CandidateCard;