const tellJoke = async () => {
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?format=json&safe-mode');
    
    if(response.status !== 200){
        throw new Error('Sorry, not feeling funny right now.');
    }
    
    const data = await response.json();
    return data;
};

const pickImage = async (keyword) => {
    const pexelsApiKey = 'BnmUqvGllRyIBRRGwK6p8R2gR4vwo9nYyjucibzbzfr4nluXXlJTaUQb';
    
    return fetch(`https://api.pexels.com/v1/search?query=${encodeURIComponent(keyword)}&per_page=1`, {
        headers: {
            'Authorization': pexelsApiKey
        }
    })
    .then(response => {
        if (response.status !== 200) {
            return Promise.reject("Sorry, can't find images");
        }
        return response.json();
    })
    .then(data => {
        if (data.photos && data.photos.length > 0) {
            return data.photos[0].src.medium;
        } else {
            return Promise.reject('No relevant image found.');
        }
    });
};

const showJoke = async () => {
    tellJoke()
    .then(data => {
        let jokeText = '';
        if (data.type === 'single') {
            jokeText = data.joke;
        } else {
            jokeText = data.setup + " " + data.delivery;
        }
        document.getElementById('joke').textContent = jokeText;

const keyword = data.setup;
    pickImage(keyword)
    .then(imageUrl => {
        document.getElementById('image').src = imageUrl;
    }).catch(err => {
        document.getElementById('image').src = 'https://via.placeholder.com/500';
        console.log(err);
    });
    })
    .catch(err => {
        document.getElementById('joke').textContent = err.message;
    });
};

showJoke();