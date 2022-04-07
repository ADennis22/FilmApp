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
                const columnDiv = document.createElement("div")
                columnDiv.classList.add("col-sm-12","col-md-6","col-lg-4")
                // the 2 lines above we created a new div element and gave it the class of column 
                // create element makes a new html ele. (the lines below)
                // div tag defies a division or section in HTML doc
                const newCard = document.createElement("div");
                newCard.classList.add("card")
                const moviePoster = document.querySelector("#moviePoster")      
                console.log(moviePoster);    
                // the line below created a new image element
                const newImage = document.createElement("img");
                // below we setattribute to to an element 'newImage' and give it a source
                // we then link the attribute to a source somewhere for it to pull
                newImage.setAttribute('src', movie.Poster);
                // made a new class to where the image is the top of the card, with other info underneath
                newImage.classList.add("card-img-top");
                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body");
                const cardTitle = document.createElement("h5");
                cardTitle.classList.add("card-title");
                cardTitle.innerText = movie.Title
                const cardText = document.createElement("p");
                cardText.classList.add('card-text')
                cardText.innerText = movie.Year
                cardBody.appendChild(cardTitle);
                cardBody.appendChild(cardText);
                newCard.appendChild(newImage); 
                newCard.appendChild(cardBody);
                // Order Matters
                // First we created card, then poster, Image
                columnDiv.appendChild(newCard);
                moviePoster.appendChild(columnDiv);
                // Append Child - pairing child HTML element with parent HTML element   
            }
        })
        .catch(error => console.log(error));
});



