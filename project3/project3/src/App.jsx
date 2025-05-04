import { useState } from "react";
import Results from './Results';
import Home from './Home';

function App () {
  const [page, setPage] = useState({ name: 'home' });

  return (
    <>
      {page.name === 'home' && <Home setPage={setPage} />}
      {page.name === 'results' && <Results setPage={setPage} filterTournament={page.tournament} />}
    </>
  );
}

export default App;