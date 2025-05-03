import { useState } from "react";

function Home ({ setPage }) {
  return (
<div>
<header>
        <img className="logo" src="../website/logo.png" alt="Syracuse Ultimate"/>
        <nav>
            <a>SCHEDULE</a><span>  |</span>
            <a>RESULTS</a>
        </nav>
    </header>

    <div className="main">
        <h2>April 2025</h2>
        <div className="tile">
            <h3 className="number">2</h3>
            <p className="description">The foxes take on Northeast Classic, the final tournament before sectionals this spring.</p>
            <button>See Results</button>
        </div>
        <div className="tile">
            <h3 className="number">19</h3>
            <p className="description">Sectionals will be in Batavia, NY, played with two days of tournament bracket.</p>
            <button>See Results</button>
        </div>
        <div className="tile">
            <h3 className="number">26</h3>
            <p className="description">Permitting a bid to regionals, Syracuse ultimate will compete in Middletown, NY for a chance at nationals!</p>
            <button>See Results</button>
        </div>
    </div>

    <footer>
        <hr/>
        <div className="footer-text">
            <p>&copy; Megan Radakovich 2025</p>
            <img className="logo" src="website/logo.png" alt="Syracuse Ultimate"/>
            <div className="socials">
                <img className="insta" src="website/insta.png" alt="Instagram icon"/>
                <img className="email" src="website/email.png" alt="email icon"/>
            </div>
        </div>
    </footer>
  </div>
    );
  }

  export default Home;