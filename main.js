/*
  Here is a rough idea for the steps you could take:
*/

// 1. First select and store the elements you'll be working with
// 2. Create your `submit` event for getting the user's search term
// 3. Create your `fetch` request that is called after a submission
// 4. Create a way to append the fetch results to your page
// 5. Create a way to listen for a click that will play the song in the audio play

//the following deals with the search bar and submit button event listeners
let input = document.querySelector('input')
let button = document.querySelector('button')

button.addEventListener('submit', function(event){
  //this is where you tie the api in
  event.preventDefault()
})
