import React, { useState, useEffect } from 'react';
import ReportForm from './ReportResults';
import { db } from './firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';

function Results({ setPage, filterTournament }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const snapshot = await getDocs(collection(db, 'games'));
      const gameList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setGames(gameList);
    };
    fetchGames();
  }, []);

  const addGame = async (newGame) => {
    const { syracuseScore, opponentScore, team, tournament, notes } = newGame;

    const syracuse = parseInt(syracuseScore);
    const opponent = parseInt(opponentScore);

    const winner = syracuse > opponent ? 'Syracuse' : team;

    const score = `${syracuse} - ${opponent}`;

    const gameData = {
      team,
      tournament,
      score,
      notes,
      syracuseScore,
      opponentScore,
      winner
    };

    const docRef = await addDoc(collection(db, 'games'), gameData);
    setGames(prev => [...prev, { id: docRef.id, ...gameData }]);
  };

  const filteredGames = filterTournament
    ? games.filter(game =>
        game.tournament &&
        game.tournament.toLowerCase() === filterTournament.toLowerCase()
      )
    : games;

  return (
    <div>
      <header>
        <img className="logo" src="https://mgradako-su.github.io/ist363/project3/website/logo.png" alt="Syracuse Ultimate" />
        <nav>
          <a onClick={() => setPage({ name: 'home' })}>SCHEDULE</a><span>  |  </span>
          <a onClick={() => setPage({ name: 'results' })}>RESULTS</a>
        </nav>
      </header>

      <div className="main-results">
        <div className="results">
          <h2>Results{filterTournament ? `: ${filterTournament}` : ''}</h2>
          {filterTournament && (
            <button className='see-all' onClick={() => setPage({ name: 'results' })}>
              Show All Results
            </button>
          )}
          {filteredGames.map((game, idx) => (
            <div className="game" key={idx}>
              <p>
                vs. {game.team}<br />
                Tournament: {game.tournament}<br />
                Final Score: {game.score}<br />
                Winner: {game.winner}<br />
                {game.notes && <>Notes: {game.notes}</>}
              </p>
            </div>
          ))}
        </div>
        <div className="report">
          <h2>Report</h2>
          <ReportForm onAddGame={addGame} />
        </div>
      </div>

      <footer className="footer-results">
        <hr />
        <div className="footer-text">
          <p>&copy; Megan Radakovich 2025</p>
          <img className="logo" src="https://mgradako-su.github.io/ist363/project3/website/logo.png" alt="Syracuse Ultimate" />
          <div className="socials">
            <img className="insta" src="https://mgradako-su.github.io/ist363/project3/website/insta.png" alt="Instagram icon" />
            <img className="email" src="https://mgradako-su.github.io/ist363/project3/website/email.png" alt="email icon" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Results;