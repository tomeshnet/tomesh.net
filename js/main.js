//
// Timeline
//
var items = document.querySelectorAll('.timeline li');

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      items[i].classList.add('in-view');
    }
  }
}

window.addEventListener('load', callbackFunc);
window.addEventListener('scroll', callbackFunc);

//
// Event show more/show less toggle
//
var eventToggle = document.getElementById('event-toggle')
var showMore = document.getElementById('show-more')

eventToggle.addEventListener('click', function () {
  var state = eventToggle.getAttribute('aria-expanded') === 'false' ? true : false;
  if (eventToggle.getAttribute('data-text-swap') == eventToggle.innerHTML) {
    eventToggle.innerHTML = eventToggle.getAttribute('data-text-original')
  } else {
    eventToggle.setAttribute('data-text-original', eventToggle.innerHTML)
    eventToggle.innerHTML = eventToggle.getAttribute('data-text-swap')
  }
  eventToggle.setAttribute('aria-expanded', state);
  showMore.setAttribute('aria-hidden', !state);
  showMore.classList.toggle('show')
}, false)
