

/* const getTodos = (resource, callback) => {
    return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            resolve(data);
        } else if(request.readyState === 4) {
            reject('error getting resource');
        }
    });
    
    request.open('GET', resource);
    request.send();
    });

};

getTodos('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks').then(data => {
    console.log('promise 1 resoved:', data);
    return getTodos('https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&titles=${pageTitle}');
}).then(data => {
    console.log('promise 2 resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
}); */

/* fetch('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('rejected', err);
}); */

/*const getTodos = async () => {

    const response = await fetch('https://api.spotify.com/v1/artists/6eUKZXaKkcviwFz7GlJxuB/top-tracks');
    console.log(response);
}; */


/* const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = crypto.getRandomValues(new Uint8Array(length));
    return values.reduce((acc, x) => acc + possible[x % possible.length], "");
  }
  
  const codeVerifier  = generateRandomString(64);

const sha256 = async (plain) => {
    const encoder = new TextEncoder()
    const data = encoder.encode(plain)
    return window.crypto.subtle.digest('SHA-256', data)
}

const base64encode = (input) => {
    return btoa(String.fromCharCode(...new Uint8Array(input)))
      .replace(/=/g, '')
      .replace(/\+/g, '-')
      .replace(/\//g, '_');
}

const hashed = sha256(codeVerifier)
const codeChallenge = base64encode(hashed);

const clientId = '1db89ff589b24e04ad2509ff0c842279';
const clientSecret = 'c1b798ffcb904d87a3ee539f7de20984';

const redirectUri = 'http://127.0.0.1:8080';

const scope = 'user-read-private user-read-email';
const authUrl = new URL("https://accounts.spotify.com/authorize")

// generated in the previous step
window.localStorage.setItem('code_verifier', codeVerifier);

const params =  {
  response_type: 'code',
  client_id: clientId,
  scope,
  code_challenge_method: 'S256',
  code_challenge: codeChallenge,
  redirect_uri: redirectUri,
}

authUrl.search = new URLSearchParams(params).toString();
window.location.href = authUrl.toString();

const urlParams = new URLSearchParams(window.location.search);
let code = urlParams.get('code');

const getToken = async code => {

    // stored in the previous step
    const codeVerifier = localStorage.getItem('code_verifier');
  
    const url = "https://accounts.spotify.com/api/token";
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
      }),
    }
  
    const body = await fetch(url, payload);
    const response = await body.json();
  
    localStorage.setItem('access_token', response.access_token);
  }

  fetch('https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log('rejected', err);
}); */
  

    /*async function getProfile() {
        let accessToken = localStorage.getItem('access_token');
    
        const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: 'Bearer ' + accessToken
        }
        });
    
        const data = await response.json();
    }*/

//const request = new XMLHttpRequest();

//request.open('GET', 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/top-tracks');
//request.send();


/* const wikiclientID = '3da38b53a66e85773bc2f6c2989a5227';
const wikiclientSecret = '6efcbb59b68c8b9768ba6534d255b0b8656661da';

const pageTitle = 'JavaScript';

    async function fetchWikipediaPage(pageTitle) {
      const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro&titles=${pageTitle}`;

      try {
        // Fetch data from the Wikipedia API
        const response = await fetch(url);
        const data = await response.json();

        // Extract the page content (we access the page through the pages object)
        const pageId = Object.keys(data.query.pages)[0];
        const pageContent = data.query.pages[pageId].extract;

        // Display the content on the webpage
        document.getElementById('content').innerHTML = pageContent;
      } catch (error) {
        console.error('Error fetching Wikipedia data:', error);
      }
    }

    // Fetch the page content for "JavaScript"
    fetchWikipediaPage(pageTitle); */


//const request = new XMLHttpRequest();

//request.open('GET', );
//request.send();



const apiController = (function () {
    const clientId = '1db89ff589b24e04ad2509ff0c842279';
    const clientSecret = 'c1b798ffcb904d87a3ee539f7de20984'; 

    const _getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await result.json();
        return data.access_token;
    }

    const _getGenres = async (token) => {
        const result = await fetch('https://api.spotify.com/v1/browse/categories?locale=sv_US', {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data.categories.items;
    }
})();
