import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css';
import SignUp from "./Auth/SignUp";
import SignIn from "./Auth/SignIn";
import TournamentList from "./Tournament/TournamentList/TournamentList";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<SignUp />} />
              <Route path="signIn" element={<SignIn />} />
              <Route path="tournaments" element={<TournamentList />} />
          </Routes>
      </Router>
  );
}

export default App;
