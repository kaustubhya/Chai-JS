const allButtons = document.querySelectorAll('.button')
// Selecting All buttons
// console.log(allButtons) // just checking if it is working correctly or not
// Now we get a nodelist here

const body = document.querySelector('body')

// Now we use a for each loop for nodelist of buttons to loop through them

allButtons.forEach( (button) => {
  console.log(button)

  // Now we add a click event listener to each button

  button.addEventListener('click', (e) => {

    // e is a random event object 

    // console.log(e)
    console.log(e.target) // This tells us where the event is coming from

    // so let us extract the id of button from the event.target

    switch(e.target.id) {
      case 'grey': body.style.backgroundColor = e.target.id;
        break;
      case 'purple': body.style.backgroundColor = e.target.id;
        break;
      case 'blue': body.style.backgroundColor = e.target.id;
        break;
      case 'yellow': body.style.backgroundColor = e.target.id;
        break;

      default: body.style.backgroundColor = 'white';
    }
  })
})