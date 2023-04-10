import "./App.css";
import Cal from "./Components/Calci/Cal";
import Port from "./Components/Cv/Port";
import Api from "./Components/Rick/Api";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="navBar">
        <ul>
          <li>
            <Link to="/Port">About</Link>
          </li>
          <li>
            <Link to="/Calci">Calculator</Link>
          </li>
          <li>
            <Link to="/Rick">Axios</Link>
          </li>
        </ul>

        <Routes>
          <Route exact path="/Port" element={<Port />}></Route>
          <Route exact path="/Calci" element={<Cal />}></Route>
          <Route exact path="/Rick" element={<Api />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
