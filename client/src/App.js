import React, { useState } from "react";
// import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [homeSelected, setHomeSelected] = useState(true);

  return (
    <div className="React">
      <Header homeSelected={homeSelected} setHomeSelected={setHomeSelected} />
      <main>
        {!homeSelected ? (
          <>
            <Contact />
          </>
        ) : (
          <>
            <About />
            <Portfolio />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
