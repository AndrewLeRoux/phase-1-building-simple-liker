// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {

  const allHearts = document.querySelectorAll('.like-glyph')

  function manipulateHeart (heart){
  heart.addEventListener('click', () =>{
    mimicServerCall()
    .then( function(){
      if (heart.innerText === EMPTY_HEART) {
        heart.innerText = FULL_HEART
        heart.className = 'activated-heart'
      }
      else if (heart.innerText === FULL_HEART) {
        heart.innerText = EMPTY_HEART
        heart.classList.remove('activated-heart')
      }
    })
    .catch(function(error) {
      const element = document.querySelector('#modal')
      element.classList.remove("hidden")
      element.innerText = error
      setTimeout(() => {
        element.className = 'hidden'
    }, 3000)
    
    })
  })

  }

  for (const heart of allHearts){
    manipulateHeart(heart)
  }

})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

