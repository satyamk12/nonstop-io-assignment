import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    // Fetch all candidates from the API
    axios
      .get('https://60d5a2c2943aa60017768b01.mockapi.io/candidate')
      .then((response) => setCandidates(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDeleteCandidate = (id) => {
    // Delete the candidate from the API
    axios
      .delete(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`)
      .then(() => {
        // Remove the candidate from the local state
        const filteredCandidates = candidates.filter(
          (candidate) => candidate.id !== id
        );
        setCandidates(filteredCandidates);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Candidate List</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <tr key={candidate.id}>
              <td>{candidate.name}</td>
              <td>{candidate.email}</td>
              <td>{candidate.gender}</td>
              <td>{candidate.hobbies.join(', ')}</td>
              <td>
                <Link
                  to={`/candidate/${candidate.id}`}
                  className="btn btn-primary me-2"
                >
                  View
                </Link>
                <Link
                  to={`/candidate/${candidate.id}/edit`}
                  className="btn btn-primary me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteCandidate(candidate.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CandidateList;
