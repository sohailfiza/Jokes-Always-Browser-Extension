const url = 'https://jokes-always.p.rapidapi.com/joke';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '{your_api_key}',
        'X-RapidAPI-Host': 'jokes-always.p.rapidapi.com'
    }
};

try {
    fetch(url, options)
        .then(data => data.json())
        .then(jokeData => {
            let jokeText = jokeData.data;
            let jokeElement = document.getElementById("jokeElement");
            jokeElement.innerHTML = jokeText;
        })
} catch (error) {
    console.error(error);
}