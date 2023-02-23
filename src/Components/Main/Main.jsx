import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    // Fetch all candidates from the API
    axios.get('https://60d5a2c2943aa60017768b01.mockapi.io/candidate')
      .then(response => setCandidates(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleCandidateSelect = (candidate) => {
    setSelectedCandidate(candidate);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">Candidates</div>
            <ul className="list-group list-group-flush">
              {candidates.map(candidate => (
                <li key={candidate.id} className="list-group-item">
                  <Link to={`/candidate/${candidate.id}`} onClick={() => handleCandidateSelect(candidate)}>
                    {candidate.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="card-footer">
              <Link to="/candidate/new" className="btn btn-primary">Add Candidate</Link>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          {selectedCandidate ? (
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Hobbies</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedCandidate.name}</td>
                  <td>{selectedCandidate.email}</td>
                  <td>{selectedCandidate.gender}</td>
                  <td>{selectedCandidate.hobbies.join(', ')}</td>
                  <td>
                    <Link to={`/candidate/${selectedCandidate.id}/edit`} className="btn btn-primary">Edit</Link>
                    <button className="btn btn-danger ms-3">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <p>Select a candidate from the left section</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
