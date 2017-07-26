<<<<<<< HEAD
/*
  Here is a rough idea for the steps you could take:
*/
let displayOfArtists = document.querySelector(".search-info")
let audioPlayer = document.querySelector(".music-player")
let searchBar = document.querySelector(".search-bar")
let searchButton = document.querySelector(".search-button")
=======
let displayOfArtists = document.querySelector('.search-info')
// let audioPlayer = document.querySelector('.music-player')
let searchBar = document.querySelector('.search-bar')
let audioSource = document.querySelector('audio')
const maxDescLength = 12
>>>>>>> master

let input = document.querySelector('input')
let button = document.querySelector('button')
let form = document.querySelector('form')
let search = input.value
<<<<<<< HEAD

button.addEventListener('submit', function(event){
  //this is where you tie the api in

  event.preventDefault()
=======
let url = 'https://itunes.apple.com/search?term='
input.autofocus = 'on'

// Favorite Query
let favoriteQuery = []
let favoriteList = document.querySelector('.player')
let favoriteButton = document.createElement('button')
favoriteButton.textContent = 'Favorite List'
favoriteButton.setAttribute('class', 'favoriteList')
favoriteList.appendChild(favoriteButton)

const processArtists = artists => {
    displayOfArtists.innerHTML = ''
    artists.forEach(function(artistData, index) {
        // console.log(artistData)

        const gallery = document.createElement('li')
        const artistsLink = document.createElement('a')
        const artistsImg = document.createElement('img')
        const artistAndTrack = document.createElement('div')
        const artistsTitle = document.createElement('span')
        const trackName = document.createElement('span')
        // Replacing pic URL's px size and pulling Pics
        artistsImg.src = artistData.artworkUrl100.replace('100x100', '500x500')
        // Pulling aritist name
        artistsTitle.textContent = artistData.artistName

        //Setting Titles/Names to a certain length
        const name =
            artistData.artistName.length > maxDescLength
                ? (artistsTitle.textContent = artistData.artistName.slice(0, maxDescLength) + '...')
                : (artistsTitle.textContent = artistData.artistName)

        const title =
            artistData.trackName.length > maxDescLength
                ? (trackName.textContent = artistData.trackName.slice(0, maxDescLength) + '...')
                : (trackName.textContent = artistData.trackName)

        //Media Player Functionality
        artistsLink.addEventListener('click', event => {
            audioSource.setAttribute('src', artistData.previewUrl)
            audioSource.play()
        })

        // Favorite Button
        const isFavorited = favoriteQuery.find(data => data.previewUrl === artistData.previewUrl)

        const faveButton = document.createElement('button')
        if (isFavorited) {
            faveButton.textContent = 'Unfavorite'

            // Unfavorite Button function
            faveButton.addEventListener('click', event => {
                event.stopPropagation()
                favoriteQuery = favoriteQuery.filter(song => {
                    return song.trackId != artistData.trackId
                })
                showFavorites(event)
            })
        } else {
            faveButton.textContent = 'Favorite'

            // Favorite Button Storage
            faveButton.addEventListener('click', event => {
                event.stopPropagation()
                favoriteQuery.push(artistData)
                // console.log(favoriteQuery)
            })
        }

        // Appending Things to page
        displayOfArtists.appendChild(gallery)
        gallery.appendChild(artistsLink)
        artistsLink.appendChild(artistsImg)
        artistsImg.setAttribute('alt', artistData.trackName)
        artistsLink.appendChild(artistAndTrack)
        artistAndTrack.appendChild(artistsTitle)
        artistAndTrack.appendChild(trackName)
        artistAndTrack.appendChild(faveButton)
        //
        // favoriteButton.addEventListener('click', event => {
        //   // console.log(favoriteQuery)
        // })
    })
}

let searchInput = query => {
    // Search Bar Funtionality
    // console.log(input.value)

    // Completing the search
    let searchUrl = url + query + '&limit=20'

    fetch(searchUrl).then(response => response.json()).then(data => processArtists(data.results))
}

function showFavorites(event) {
    processArtists(favoriteQuery)
    event.preventDefault()
}

favoriteButton.addEventListener('click', event => {
    showFavorites(event)
})

form.addEventListener('submit', event => {
    event.stopPropagation()
    event.preventDefault()
    searchInput(search)
})

input.addEventListener('keyup', event => {
    searchInput(input.value)
>>>>>>> master
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
        const gallery = document.createElement("li")
                const artistsLink = document.createElement("a")
                const artistsThumbnail = document.createElement("img")
                // const spanDiv = document.createElement("div")
                // const artistsTitle = document.createElement("span")
                // const trackName = document.createElement("span")
                // artistsLink.href = artistsLink.href
                // artistsTitle.textContent = artistData.artistTitle
                // trackName.textContent = trackName.trackName
                artistsThumbnail.src = artistsThumbnail.artworkUrl60
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
