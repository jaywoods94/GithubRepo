interface Candidate {
    id: number;
    name: string | null;
    login: string;
    avatar_url: string;
    location: string | null;
    email: string | null;
    html_url: string;
    company: string | null;
  }
  
  // Get all saved candidates from localStorage
  export const getSavedCandidates = (): Candidate[] => {
    const savedCandidates = localStorage.getItem('savedCandidates');
    return savedCandidates ? JSON.parse(savedCandidates) : [];
  };
  
  // Save a candidate to localStorage
  export const saveCandidate = (candidate: Candidate): void => {
    const savedCandidates = getSavedCandidates();
    savedCandidates.push(candidate);
    localStorage.setItem('savedCandidates', JSON.stringify(savedCandidates));
  };