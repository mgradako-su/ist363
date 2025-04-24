function Tim ({setPage}) {
    return (
    <div>
      <h1>Internet Pioneers Bio</h1>
        <div className="info">
            <h2>Tim Berners-Lee</h2>
            <hr/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/LS3_4919_%28cropped%29.jpg" alt="Tim Berners Lee"/>
            <p><strong>Age: </strong>69</p>
            <p><strong>Known for: </strong>Inventor of the World Wide Web, the HTML markup language, the URL system, and HTTP With supporting text below as a natural lead-in to additional content.</p>
            <br/>
            <button className="return" onClick={() => setPage('home')}>Return to Directory</button>
        </div>
    </div>
    );
  }
  
  export default Tim;