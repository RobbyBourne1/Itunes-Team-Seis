/*
  Here is a rough idea for the steps you could take:
*/
let displayOfArtists = document.querySelector(".search-info")
let audioPlayer = document.querySelector(".music-player")
let searchBar = document.querySelector(".search-bar")
let searchButton = document.querySelector(".search-button")

let input = document.querySelector('input')
let button = document.querySelector('button')
let search = input.value

button.addEventListener('submit', function(event){
  //this is where you tie the api in

  event.preventDefault()
})

// searchButton.addEventListener("click", function(){
//     let searchTerm = search.value
//     const promise =
let url = "https://itunes.apple.com/search?term=jack+johnson"
fetch(url)
        .then ( response => response.json () )
        .then ( artist => {
            artist.results.forEach(function (artistData, index) {
                console.log(artistData)


            })
        })
        // const gallery = document.createElement("li")
                // const artistsLink = document.createElement("a")
                // const artistsThumbnail = document.createElement("img")
                // const spanDiv = document.createElement("div")
                // const artistsTitle = document.createElement("span")
                // const trackName = document.createElement("span")
                // artistsLink.href = artistsLink.href
                // artistsTitle.textContent = artistData.artistTitle
                // trackName.textContent = trackName.trackName
                // artistsThumbnail.src = artistsThumbnail.artworkUrl60
                // gallery.appendChild(artistsLink)
                // gallery.appendChild(artistsTitle)
                // gallery.appendChild(recipeThumbnail)
                // // recipeLink.appendChild(recipeThumbnail)
                // // gallery.appendChild(recipeIngredients)
                // gallery.appendChild(recipeLink)
                // displayOfRecipes.appendChild(gallery)
// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play
<<<<<<< HEAD
=======

>>>>>>> master
