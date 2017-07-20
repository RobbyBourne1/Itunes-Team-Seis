let displayOfArtists = document.querySelector('.search-info')
let audioPlayer = document.querySelector('.music-player')
let searchBar = document.querySelector('.search-bar')
let audioSource = document.querySelector('audio')
const maxDescLength = 10

let input = document.querySelector('input')
let button = document.querySelector('button')
let search = input.value
let url = 'https://itunes.apple.com/search?term='
input.autofocus = 'on'

let searchInput = query => {
  // Search Bar Funtionality
  // console.log(input.value)

  // Completing the search
  let searchUrl = url + query + '&limit=20'
  displayOfArtists.innerHTML = ''

  fetch(searchUrl).then(response => response.json()).then(artist => {
    artist.results.forEach(function(artistData, index) {
      console.log(artistData)

      const gallery = document.createElement('li')
      const artistsLink = document.createElement('a')
      const artistsImg = document.createElement('img')
      const artistAndTrack = document.createElement('div')
      const artistsTitle = document.createElement('span')
      const trackName = document.createElement('span')

      artistsImg.src = artistData.artworkUrl100
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

      // Appending Things to page
      displayOfArtists.appendChild(gallery)
      gallery.appendChild(artistsLink)
      artistsLink.appendChild(artistsImg)
      artistsImg.setAttribute('alt', artistData.trackName)
      artistsLink.appendChild(artistAndTrack)
      artistAndTrack.appendChild(artistsTitle)
      artistAndTrack.appendChild(trackName)
    })
  })
}

button.addEventListener('submit', event => {
  searchInput(search)
  console.log(input.value)
})

input.addEventListener('keyup', event => {
  event.stopPropagation()
  event.preventDefault()
  searchInput(input.value)
})
