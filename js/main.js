require(['lib/papilio'], function(Papilio) {
  var slide = document.querySelector('#slides'),
      papilio = new Papilio(slide);

  window.addEventListener('message', function(event) {
    var data = event.data;
    papilio.renderSlide(data.content, data.page);
  });
});
