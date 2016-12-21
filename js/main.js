var eventToggle = document.getElementById('event-toggle')
var showMore = document.getElementById('show-more')

eventToggle.addEventListener('click', function () {
  showMore.classList.toggle('show')
}, false)
