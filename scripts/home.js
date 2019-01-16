$( document ).ready(function() {
  var bottomPad = $("footer").outerHeight();
  $("#content").css("padding-bottom", bottomPad + "px")
  var w = $("html").width();
  $("#width").html("The width of the page is <b>" + w + "</b> pixels.");
});
