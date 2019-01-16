$( document ).ready(function() {
  var bottomPad = $("footer").outerHeight();
  $("#content").css("padding-bottom", bottomPad + "px")
  var w = $("html").width();
  $("#width").text("The width of the page is " + w + " pixels.");
});
