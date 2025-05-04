function Home({ setPage }) {
    const tournaments = [
      {
        day: 2,
        name: "Northeast Classic",
        description: "The foxes take on Northeast Classic, the final tournament before sectionals this spring.",
      },
      {
        day: 19,
        name: "Sectionals",
        description: "Sectionals will be in Batavia, NY, played with two days of tournament bracket.",
      },
      {
        day: 26,
        name: "Regionals",
        description: "After earning their bid to Regionals, Syracuse Ultimate competed in Middletown, NY for a chance at nationals!",
      },
    ];
  
    return (
      <div>
        <header>
          <img
            className="logo"
            src="https://mgradako-su.github.io/ist363/project3/website/logo.png"
            alt="Syracuse Ultimate"
          />
          <nav>
            <a>SCHEDULE</a><span>  |  </span>
            <a onClick={() => setPage({ name: 'results' })}>RESULTS</a>
          </nav>
        </header>
  
        <div className="main-schedule">
          <h2>April 2025</h2>
          {tournaments.map(({ day, name, description }) => (
            <div className="tile" key={name}>
              <h3 className="number">{day}</h3>
              <p className="description">{description}</p>
              <button className="results-button" onClick={() => setPage({ name: 'results', tournament: name })}>See Results</button>
            </div>
          ))}
        </div>
  
        <footer>
          <hr />
          <div className="footer-text">
            <p>&copy; Megan Radakovich 2025</p>
            <img
              className="logo"
              src="https://mgradako-su.github.io/ist363/project3/website/logo.png"
              alt="Syracuse Ultimate"
            />
            <div className="socials">
              <img
                className="insta"
                src="https://mgradako-su.github.io/ist363/project3/website/insta.png"
                alt="Instagram icon"
              />
              <img
                className="email"
                src="https://mgradako-su.github.io/ist363/project3/website/email.png"
                alt="email icon"
              />
            </div>
          </div>
        </footer>
      </div>
    );
  }
  
  export default Home;