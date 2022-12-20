import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import QuizApp from "./AppPages/quiz-app";
import LandingPage from "./AppPages/landing-page";
import JobApp from "./AppPages/job-app";
import GameApp from "./AppPages/game-app";
import CssApp from "./AppPages/css-app";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/quiz-app" element={<QuizApp />} />
          <Route exact path="/job-app" element={<JobApp />} />
          <Route exact path="/game-app" element={<GameApp />} />
          <Route exact path="/css-app" element={<CssApp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
