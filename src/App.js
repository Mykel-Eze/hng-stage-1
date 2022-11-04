import { BrowserRouter as Router, Routes , Route } from "react-router-dom";

import Home from "./pages";
import Footer from "./components/footer";
import "./css/style.css"
import Contact from "./pages/contact";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes >
            {/*---==== Contents Sections  ====---*/}
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            {/*---==== end of Contents Sections  ====---*/}
        </Routes >

        <Footer />
      </div>
    </Router>
  );
}

export default App;
