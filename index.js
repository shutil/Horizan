$(document).ready(function() {
  $("#github").on('click', function() {
    window.open("https://www.github.com/shutil");
  });

  $("#facebook").on('click', function() {
    window.open("https://www.facebook.com");
  });

  $("#twitter").on('click', function() {
    window.open("https://www.twitter.com");
  });

  $("#tutorial").on('click', function(event) {
    window.open("https://www.youtube.com");
  });

  var scroll = new SmoothScroll('a[href*="#"]');

  $("#emailsub").on('click', function() {
    var el = $("#email").val();
    if (el != "") {
      swal({
            title: "Subscribed",
            text: "Thanks for subscribing us",
            icon: "success",
          });
      $("#email").val(null);
    } else {
      swal({
            title: "Error",
            text: "Plese Enter your email address",
            icon: "error",
          });
    }
  });
});
