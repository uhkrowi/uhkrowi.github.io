function animateSocialButtons () {
  var socialButtonAnimation = anime({
    targets: '.social-btn',
    translateX: function(el) {
      return el.getAttribute('data-x');
    },
    translateY: function(el, i) {
      return el.getAttribute('data-y');
    },
    scale: function(el, i, l) {
      return el.getAttribute('data-s');
    },
    rotate: function() { return 720; },
    duration: function() { return 1000; },
    delay: function() { return 200 },
    autoplay: false
  });

  var socialButtonVisible = false

  document.getElementById('player').addEventListener('click', function() {
    showSocialButtons()
  })

  function showSocialButtons() {
    if (socialButtonVisible) {
      socialButtonAnimation.reverse()	
      socialButtonAnimation.play()
      // document.getElementById('overlay').style.opacity = 0
      socialButtonVisible = false
      // setTimeout(function(){
      //   document.getElementById('overlay').style.display = 'none'
      //   console.log(socialButtonVisible)
      // }, 1000);
    } else {
      socialButtonVisible = true
      socialButtonAnimation.restart()	
      // document.getElementById('overlay').style.opacity = 1
      // document.getElementById('overlay').style.display = 'block'
      // console.log(socialButtonVisible)
    }
  }

  var getCurrentTime = function() {
    var date = new Date();
    var hours =  date.getHours();
    var minutes =  date.getMinutes();
    var current = hours + (minutes * .01);
    if (current >= 5 && current < 19) return 'have a nice day';
    if (current >= 19 && current < 22) return 'good evening';
    if (current >= 22 || current < 5) return 'have a good night';
  }

  // document.getElementById('greeting').innerHTML = `Hello there, ${getCurrentTime()}!` 

}