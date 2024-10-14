import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Post from "./components/Post"; // Import the Post component
import Home from "./components/Home"; // Create a Home component to show post links

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/post/1">Post 1</Link>
            </li>
            <li>
              <Link to="/post/2">Post 2</Link>
            </li>
            <li>
              <Link to="/post/3">Post 3</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/post/:id" element={<Post />} />{" "}
          {/* Dynamic route for posts */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
