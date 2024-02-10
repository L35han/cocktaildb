// event listener for the buttons in the whiskey.html
addEventListener ("modal") {
    document.querySelector("#whiskey-button").addEventListener("click", openModal);
  }

  // function to open the modal when the button is clicked
  function openModal() {
    var overlay = document.getElementById("overlay");
    var closeButton = document.getElementById("close-button");
    var container = document.getElementById("container");
    
    // adds an "active" class to the overlay and container when the button is clicked
    overlay.classList.add("active");
    container.classList.add("active");
    // makes the close button visible
    closeButton.style.display = "block";

    //event listener for the close button
    closeButton.addEventListener("click", closeModal);
  }

  // function to close the modal when the close button or the overlay is clicked
  function closeModal() {
    var args = arguments;
    setTimeout(function () {
      var overlay = document.getElementById("overlay");
      var closeButton = document.getElementById("close-button");
      var container = document.getElementById("container");

      // removes the active class from the overlay and container, hides the close button
      overlay.classList.remove("active");
      container.classList.remove("active");
      closeButton.style.display = "none";

      //removes the event listeners so that the modal can't be closed while closing itself
      closeButton.removeEventListener("click", closeModal);

      // if the overlay was clicked, then it will also remove the event listener from the click event of the body element
      // if the overlay was clicked, then it closes the modal
      // else (if the close button was clicked), it does nothing
      if (!args[0] || args[0].target === overlay) {
        overlay.removeEventListener("click", closeModal);
      }
    }, 200);
  }

  // adds the event listener to the button opening the modal
  document.querySelector("#open-modal").addEventListener("click", openModal);

