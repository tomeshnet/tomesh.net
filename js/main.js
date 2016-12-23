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
