import "./App.css";

// IMPORT COMPONENTS
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Projects from "./pages/Projects.js";



function App() {
  // YOUR Render URL should be in your env; make sure you include the trailing slash
  const URL = "https://portfolio-tkxo.onrender.com/" || "http://localhost:4000/";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects URL={URL} />} />
        <Route path="/about" element={<About URL={URL} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;