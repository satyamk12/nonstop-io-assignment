import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CandidateDetails() {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    // Fetch the candidate with the given ID from the API
    axios.get(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`)
      .then(response => setCandidate(response.data))
      .catch(error => console.log(error));
  }, [id]);

  const handleDeleteCandidate = () => {
    // Delete the candidate from the API
    axios.delete(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`)
      .then(() => {
        // Redirect to the candidate list page
        window.location.href = '/candidate/list';
      })
      .catch(error => console.log(error));
  };

  if (!candidate) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mt-5">
      <h2>Candidate Details</h2>
      <table className="table table-bordered">
        <tbody>
          <tr>
            <td>Name</td>
            <td>{candidate.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{candidate.email}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{candidate.gender}</td>
          </tr>
          <tr>
            <td>Hobbies</td>
            <td>{candidate.hobbies.join(', ')}</td>
          </tr>
        </tbody>
      </table>
      <div>
        <Link to={`/candidate/${id}/edit`} className="btn btn-primary me-2">Edit</Link>
        <button className="btn btn-danger" onClick={handleDeleteCandidate}>Delete</button>
      </div>
    </div>
  );
}

export default CandidateDetails;
