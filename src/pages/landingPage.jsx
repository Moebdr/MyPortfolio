import { Router, Routes } from "react-router-dom";
import Hero from "../sections/Hero";
import Footer from "../components/Footer";
import Skills from "../sections/Skills";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Services from "../sections/Services";
import { useEffect, useState } from "react";
import Loading from "./loading";



function LandingPage() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
setTimeout(()=>setIsLoading(false),3000)

},[]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Hero />
          <Skills />
          <Contact />
          <Services />
          <About />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default LandingPage;
