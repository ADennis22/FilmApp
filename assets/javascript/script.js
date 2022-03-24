var searchButton = document.querySelector("#searchButton");
var searchBar = document.querySelector("#searchBar")
console.log(searchButton)
searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    var search = searchBar.value
    console.log(search)
    fetch('https://omdbapi.com/?apikey=dc3a7f27&t=' + search)
    .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
});



