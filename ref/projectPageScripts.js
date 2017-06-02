var lastTouched = null;

$(document).ready(function()
{
  $("tags li").on('touchstart', function() {
    lastTouched = $(this).data("short");
  });

  $("tags li").on('click touchend', function(event) {
    if (event.type == "click" || lastTouched == $(this).data("short")){
      window.location = "../index.html#" + $(this).data("short");
    }
  });
});