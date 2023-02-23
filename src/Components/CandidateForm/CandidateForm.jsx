import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CandidateForm = () => {
  // Get the `id` parameter from the URL
  const { id } = useParams();

  // Use the `useNavigate` hook for programmatic navigation
  const navigate = useNavigate();

  // Define the state variables for the form data, errors, and submitting state
  const [candidate, setCandidate] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    avatarUrl: '',
    cvUrl: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Use the `useEffect` hook to fetch the candidate data if `id` is present
  useEffect(() => {
    if (id) {
      axios.get(`https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}`)
        .then(res => setCandidate(res.data))
        .catch(err => console.log(err));
    }
  }, [id]);

  // Define the event handlers for input changes and form submission
  const handleChange = e => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);

    axios({
      method: id ? 'put' : 'post',
      url: id ? `https://60d5a2c2943aa60017768b01.mockapi.io/candidate/${id}` : 'https://60d5a2c2943aa60017768b01.mockapi.io/candidate',
      data: candidate
    })
      .then(() => navigate('/candidates'))
      .catch(err => {
        setIsSubmitting(false);
        setErrors(err.response.data.errors);
      });
  };


  return (
    <div className="container my-4">
      <h1>{id ? 'Edit Candidate' : 'Add Candidate'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className={`form-control ${errors.name && 'is-invalid'}`}
            value={candidate.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className={`form-control ${errors.email && 'is-invalid'}`}
            value={candidate.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className={`form-control ${errors.phone && 'is-invalid'}`}
            value={candidate.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title</label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            className={`form-control ${errors.jobTitle && 'is-invalid'}`}
            value={candidate.jobTitle}
            onChange={handleChange}
          />
          {errors.jobTitle && <div className="invalid-feedback">{errors.jobTitle}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="avatarUrl">Avatar URL</label>
          <input
            type="text"
            name="avatarUrl"
            id="avatarUrl"
            className={`form-control ${errors.avatarUrl && 'is-invalid'}`}
            value={candidate.avatarUrl}
            onChange={handleChange}
          />
          <div className="invalid-feedback">{errors.avatarUrl}</div>
        </div>
        <div className="form-group">
          <label htmlFor="cvUrl">CV URL</label>
          <input
            type="text"
            name="cvUrl"
            id="cvUrl"
            className={`form-control ${errors.cvUrl && 'is-invalid'}`}
            value={candidate.cvUrl}
            onChange={handleChange}
          />
          {errors.cvUrl && <div className="invalid-feedback">{errors.cvUrl}</div>}
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};
export default CandidateForm;





