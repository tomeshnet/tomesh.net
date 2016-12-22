var eventToggle = document.getElementById('event-toggle')
var showMore = document.getElementById('show-more')

eventToggle.addEventListener('click', function () {
  if (eventToggle.getAttribute('data-text-swap') == eventToggle.innerHTML) {
    eventToggle.innerHTML = eventToggle.getAttribute('data-text-original')
  } else {
    eventToggle.setAttribute('data-text-original', eventToggle.innerHTML)
    eventToggle.innerHTML = eventToggle.getAttribute('data-text-swap')
  }
  showMore.classList.toggle('show')
}, false)
