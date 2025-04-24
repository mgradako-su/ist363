import { useState } from "react";
import Tim from './Tim';
import Liz from './Liz';
import Ray from './Ray';

function Home ({ setPage }) {
  return (
    <div>
      <h1>Internet Pioneers Bio</h1>
      <div className="bio-tiles">
          <div className="tile" id="elizabeth" onClick={() => setPage('liz')}>
            <p className="flag">VISITED</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/ElizabethFeinler-2011.jpg" alt="Elizabeth J. Feinler"/>
              <h3>Elizabeth J. Feinler</h3>
          </div>
          <div className="tile" id="tim" onClick={() => setPage('tim')}>
              <p className="flag">VISITED</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/LS3_4919_%28cropped%29.jpg" alt="Tim Berners Lee"/>
              <h3>Tim Berners Lee</h3>
          </div>
          <div className="tile" id="ray" onClick={() => setPage('ray')}>
              <p className="flag">VISITED</p>
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Ray_Tomlinson.jpg" alt="Ray Tomlinson"/>
              <h3>Ray Tomlinson</h3>
          </div>
      </div>
    </div>
  );
}


function App () {
  const [page, setPage] = useState('home');
  const [visited, setVisited] = useState(); // I'm just not sure how to connect this to the links to the other pages
  
  return (
    <>
      {page === 'home' && <Home setPage={setPage} />}
      {page === 'liz' && <Liz setPage={setPage} />}
      {page === 'tim' && <Tim setPage={setPage} />}
      {page === 'ray' && <Ray setPage={setPage} />}
    </>
  );
}

export default App;