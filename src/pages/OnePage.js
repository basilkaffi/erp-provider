import React from "react";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Navbar, Home, About, Pricing, Other, Contact } from "../components";

function OnePage() {
  const [visible, setVisibility] = useState(false);
  const transitioning = () => {
    if (window.pageYOffset > (window.innerHeight * 3) / 5) setVisibility(true);
    else setVisibility(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", transitioning);
    return () => {
      window.removeEventListener("scroll", transitioning);
    };
  }, []);
  return (
    <div className="one-page">
      <CSSTransition
        in={visible}
        timeout={400}
        unmountOnExit
        classNames="navbar-transition"
      >
        <Navbar />
      </CSSTransition>
      <Home />
      <About />
      <Pricing />
      <Other />
      <Contact />
    </div>
  );
}

export default OnePage;