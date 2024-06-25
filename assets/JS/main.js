
// revelar página com o scroll
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.hidden');

  for(var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 200;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('reveal');
    }
  }
}
