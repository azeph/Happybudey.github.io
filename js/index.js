(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      backgroundAudio = $('backgroundAudio'),  // Replace with the actual ID of your audio element
      heart = $('heart'),
      timer = null;

  if (backgroundAudio) {  // Check if the audio element exists
    openB.addEventListener('click', function () {
      card.setAttribute('class', 'open-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', 'open-fully');
        timer = null;
        
        // Play the background music only if not navigating to another_page.html
        if (window.location.href.indexOf('flower.html') === -1) {
          backgroundAudio.play();
        }
      }, 1000);
    });

    closeB.addEventListener('click', function () {
      card.setAttribute('class', 'close-half');
      if (timer) clearTimeout(timer);
      timer = setTimeout(function () {
        card.setAttribute('class', '');
        timer = null;

        // Pause the background music when closing the card (optional)
        backgroundAudio.pause();
      }, 1000);
    });

    // Heart click event to navigate to another_page.html
    if (heart) {
      heart.addEventListener('click', function() {
        window.location.href = 'flower.html';
      });
    }
  } else {
    console.error("Audio element with ID 'backgroundAudio' not found.");
  }

}());
