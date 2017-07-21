let displayOfArtists = document.querySelector('.search-info')
let audioPlayer = document.querySelector('.music-player')
let searchBar = document.querySelector('.search-bar')
let audioSource = document.querySelector('audio')
const maxDescLength = 12

let input = document.querySelector('input')
let button = document.querySelector('button')
let form = document.querySelector('form')
let search = input.value
let url = 'https://itunes.apple.com/search?term='
input.autofocus = 'on'

// Favorite Query
let favoriteQuery = []
let favoriteList = document.querySelector('.player')
let favoriteButton = document.createElement('button')
favoriteButton.textContent = 'Favorite List'
favoriteButton.setAttribute('class', 'favoriteList')
favoriteList.appendChild(favoriteButton)

let searchInput = query => {
  // Search Bar Funtionality
  // console.log(input.value)

  // Completing the search
  let searchUrl = url + query + '&limit=20'
  displayOfArtists.innerHTML = ''

  fetch(searchUrl).then(response => response.json()).then(artist => {
    artist.results.forEach(function(artistData, index) {
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
      // Favorite Button
      const favorite = document.createElement('button')
      favorite.textContent = 'Favorite'

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
      // Favorite Button Storage
      favorite.addEventListener('click', event => {
        event.stopPropagation()
        favoriteQuery.push(artistData)
        // console.log(favoriteQuery)
      })

      // Appending Things to page
      displayOfArtists.appendChild(gallery)
      gallery.appendChild(artistsLink)
      artistsLink.appendChild(artistsImg)
      artistsImg.setAttribute('alt', artistData.trackName)
      artistsLink.appendChild(artistAndTrack)
      artistAndTrack.appendChild(artistsTitle)
      artistAndTrack.appendChild(trackName)
      artistAndTrack.appendChild(favorite)
      //
      // favoriteButton.addEventListener('click', event => {
      //   // console.log(favoriteQuery)
      // })
    })
  })
}

function showFavorites(event) {
  event.preventDefault()
  console.log(favoriteQuery)
  displayOfArtists.innerHTML = ''
  favoriteQuery.forEach(artistData => {
    const gallery = document.createElement('li')
    const artistsLink = document.createElement('a')
    const artistsImg = document.createElement('img')
    const artistAndTrack = document.createElement('div')
    const artistsTitle = document.createElement('span')
    const trackName = document.createElement('span')

    artistsImg.src = artistData.artworkUrl100.replace('100x100', '500x500')
    // Pulling aritist name
    artistsTitle.textContent = artistData.artistName
    // // Unfavorite Button
    const unFavorite = document.createElement('button')
    unFavorite.textContent = 'Unfavorite'

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

    // Unfavorite Button function
    unFavorite.addEventListener('click', event => {
      event.stopPropagation()
      favoriteQuery = favoriteQuery.filter(song => {
        return song.trackId != artistData.trackId
      })
      showFavorites(event)
    })

    displayOfArtists.appendChild(gallery)
    gallery.appendChild(artistsLink)
    artistsLink.appendChild(artistsImg)
    artistsImg.setAttribute('alt', artistData.trackName)
    artistsLink.appendChild(artistAndTrack)
    artistAndTrack.appendChild(artistsTitle)
    artistAndTrack.appendChild(trackName)
    artistAndTrack.appendChild(unFavorite)
  })
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
})
