import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import "./Components/Navbar/Navbar.css";
import "./Components/Hero/Hero.css";
import Hero from "./Components/Hero/Hero";
import Point from "./Components/Point/Point";
import "./Components/Point/Point.css";
import Feature from "./Components/Feature/Feature";
import "./Components/Feature/Feature.css";
import Footer from "./Components/Footer-Section/Footer";
import "./Components/Footer-Section/Footer.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page404 from "./Components/Error/Page404";
import About from "./Components/About-Us/About";
import Contact from "./Components/Contact-Page/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Hero />
                <Point />
                <Feature />
                <Footer />
              </>
            }
          ></Route>
          <Route exact path="/" element={<Page404 />} />
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
