import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import "./landing.css";

function Landing() {
  const { auth } = useAuth();
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <img
          src="assets/hero-img-note.png"
          alt="hero-img"
          width="700rem"
          height="600rem"
        />
        <div className="hero-info">
          <h1>RoboNotes</h1>
          <h2 className="hero-h1">
            RoboNotes is the best place to jot down quick thoughts or to save
            longer notes!
          </h2>

          {auth.isAuth === true ? (
            <>
              <Link to="/notes">
                <button className="btn-home">Lets note!</button>
              </Link>
            </>
          ) : (
            <Link to="/login">
              <button className="btn-home"> Lets note!</button>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
