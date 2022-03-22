
fetch('https://omdbapi.com/?apikey=dc3a7f27&s=Lion%20king')
    .then(response => response.json())
    .then(data => console.log(data));
