var searchButton = document.querySelector("#searchButton");
var searchBar = document.querySelector("#searchBar")
console.log(searchButton)
searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    var search = searchBar.value
    console.log(search)
    fetch('https://omdbapi.com/?apikey=dc3a7f27&s=' + search)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            for (let index = 0; index < data.Search.length; index++) {
                var movie = data.Search[index];
                 console.log(movie)
                // create element makes a new html ele.
                // div tag defies a division or section in HTML doc
                const newCard = document.createElement("div");
                newCard.classList.add("card")
                const moviePoster = document.querySelector("#moviePoster")      
                console.log(moviePoster)    ; 
                newCard.style.height="100px"
                moviePoster.appendChild(newCard)
                // Append Child - pairing child HTML element with parent HTML element
                
            }
        })
        .catch(error => console.log(error));
});



