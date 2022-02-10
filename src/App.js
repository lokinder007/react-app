import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Errorpage from "./pages/Errorpage";

import "./stylesheets/auth.css";
import "./stylesheets/layout.css";

import Calculator from "./projects/calculator/Calculator";
import Todo from "./projects/todo/Todo";
import ContactApp from "./projects/contactApp/ContactApp";

function App() {



  return (
    <Router>
      <>
        <Navbar />
        <div className="main">
          <Routes>
            {/* <Route path="/login" exact element={<Login />} /> */}
            {/* <Route path="/register" exact element={<Register />} /> */}
            <Route path="/" exact element={<Home />} />
            <Route path="/profile" exact element={<Profile />} />
            <Route path="/about" exact element={<About />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/projects" exact element={<Projects />} />
            <Route path="/calculator" exact element={<Calculator />} />
            <Route path="/todo" exact element={<Todo />} />
            <Route path="/contactApp" exact element={<ContactApp />} />


            <Route path="*" element={<Errorpage />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;