import './App.css';
import { Route, Routes } from "react-router-dom";
import CandidateForm from './Components/CandidateForm/CandidateForm';
import Login from './Components/SoicalLogin/Login';
import Home from './Components/Main/Main';
import CandidateDetails from './Components/CandidateDetails/CandidateDetails';
import CandidateList from './Components/CandidateDetails/CandidateDetails';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="/candidate/new" element={ <CandidateForm/> } />
        <Route path="/candidate/:id/edit" element={ <CandidateForm/> } />
        <Route path="/main" element={ <Home/> } />
        <Route path="/candidate/:id" element={ <CandidateDetails/> } />
        <Route path="/candidate" element={ <CandidateDetails/> } />
        <Route path="/candidate/:id" element={ <CandidateList/> } />
      </Routes>
    </div>
  );
}
 
export default App;