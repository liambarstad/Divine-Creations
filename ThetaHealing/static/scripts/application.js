$(document).ready(function () {
  function toggleGradient() {
    $(this).addClass('gradient');
  }
  $(".bevel").on('mouseenter', toggleGradient());
  $(".bevel").on('mouseleave', toggleGradient());
});
