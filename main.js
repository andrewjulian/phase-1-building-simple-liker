// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

//------------------------------------------------------------------------------
// Your JavaScript code goes here! 
//------------------------------------------------------------------------------

//creates an array of all the heartButtons
const heartButtons = document.querySelectorAll('.like-glyph')

//adds an event listener to each of the heart buttons via for-each loop
heartButtons.forEach(heartButton => heartButton.addEventListener('click', () => 
  {
    console.log("Click is working!")

    mimicServerCall()
    .then(() => {
      console.log("then statement!")
      const likeButton = document.querySelector('.like-glyph')
      console.log()
      return likeButton.textContent == EMPTY_HEART ? likeButton.textContent = FULL_HEART : likeButton.textContent = EMPTY_HEART
      
    })
    .catch(error => {
      const modalHeader = document.querySelector('#modal')
      setTimeout(() => {
        console.log("modal hidden running")
        return modalHeader.classList.add('hidden')
      }, 5000)
      console.log(error)
      modalHeader.classList.remove("hidden")
      const headerErrorMessage = document.querySelector('#modal-message')
      headerErrorMessage.textContent = error
      
    })

  }))


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
        console.log("reject")
      } else {
        resolve("Pretend remote server notified of action!");
        console.log("good")
      }
    }, 300);
  });
}
