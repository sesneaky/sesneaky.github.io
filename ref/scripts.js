var lastTouched = null;

$(document).ready(function()
{
  // Make sure hover states are off on load (just in case).
  $("circles li").find(".overlay").attr("style", "visibility:hidden");

  // Hover states.
  if (!Modernizr.touch){
    $("circles li").hover(function() {
      $(this).find(".overlay").attr("style", "visibility:visible");
    }, function() {
      $(this).find(".overlay").attr("style", "visibility:hidden");
    });

    $("tagFilters li").not("#clearTags").hover(function() {
      $(this).addClass("mouseOver");
    }, function() {
      $(this).removeClass("mouseOver");
    });

    $("tags li").hover(function() {
      $(this).addClass("mouseOver");
    }, function() {
      $(this).removeClass("mouseOver");
    });
  }

  // Clicks/taps.
  $("#p5root").on('touchstart', function() {
    lastTouched = $(this).data("location");
  });

  $("#p5root").on('click touchend', function(event) {
    if (event.type == "click" || lastTouched == $(this).data("location")){
      window.location = $(this).data("location");
    }
  });

  $("circles li").on('touchstart', function() {
    lastTouched = $(this).data("location");
  });

  $(document).on('touchmove', function() {
    lastTouched = null;
  });

  $("circles li").on('click touchend', function(event) {
    if (event.type == "click" || lastTouched == $(this).data("location")){
      window.location = $(this).data("location");
    }
  });

  $("tagFilters li").not("#clearTags").on('touchstart', function() {
    $(this).removeClass("mouseOver");
    lastTouched = $(this).data("short");
  });

$("tagFilters li").not("#clearTags").on('click touchend', function(event) {
    if (event.type == "click" || lastTouched == $(this).data("short")){
      event.stopPropagation();
      $(this).toggleClass("selected");

      // Apply time delay to let the mouse event finish propagating
      // and not get caught by one of the circles as they (possibly)
      // animate in after filters are applied
      setTimeout(
		 applyFilters(),
		 200
		 );
      lastTouched = null;
      $(this).removeClass("mouseOver");
    }
  });

  $("tagFilters li#clearTags").on('touchstart', function() {
    lastTouched = "clearTags";
  });

  $("tagFilters li#clearTags").on('click touchend', function(event) {
    if (event.type == "click" || lastTouched == "clearTags"){
      $("tagFilters li").removeClass("selected");
      event.stopPropagation();

      // Apply time delay to let the mouse event finish propagating
      // and not get caught by one of the circles as they (possibly)
      // animate in after filters are applied
      setTimeout(
		 applyFilters(),
		 200
		 );
      lastTouched = null;
    }
  });

  // Handle load with tag selected.
  var hash = location.hash.replace('#', '');
  if (hash !== ''){
    $("tagfilters ul").find("[data-short='" + hash + "']").addClass("selected");
    applyFilters();
    window.history.pushState("object or string", "Title", "/index.html");
  }
});

function applyFilters(){
  $("circles li").stop();

  if ($("tagFilters li.selected").length == 0){
    $("circles li").each(function(){
      if ($(this).is(":hidden")){
        $(this).slideDown();
      }
    });
  } else {
    var selectedTags = $("tagFilters li.selected");


    $("circles li").each(function(){
      var passesFilter = false;

      for (var j=0; j<selectedTags.length; j++){
        if ($(this).data("tags").indexOf(selectedTags[j].dataset.short) >= 0){
          passesFilter = true;
          break;
        }
      }

      if (passesFilter && $(this).is(":hidden")){
        $(this).slideDown();
      } else if (!passesFilter && $(this).is(":visible")){
        $(this).slideUp();
      }
    });
  }
}
