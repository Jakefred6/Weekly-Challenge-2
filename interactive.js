$(document).ready(function() {
    // Make the boxes clickable
    $(".project").click(function() {
      window.location.href = $(this).find("a").attr("href");
    });
  
    // Make the boxes grow a tiny bit bigger and light up when hovered over
    $(".project").hover(function() {
      $(this).css("transform", "scale(1.05)");
      $(this).css("box-shadow", "0 0 10px #ccc");
    }, function() {
      $(this).css("transform", "scale(1)");
      $(this).css("box-shadow", "none");
    });
  
    // Prevent the page from scrolling to the bottom when it is refreshed
    window.onload = function() {
      window.scrollTo(0, 0);
    };
  });
  $(document).ready(function() {
    // When the user clicks on an image, open the deployed application
    $("Assets/wakeupcover.jpg").click(function() {
      window.open($(this).attr("href"));
    });
  });