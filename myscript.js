$(document).ready(function() {
  if ($('.current-question').hasClass('C')) {
    $('.current-question').removeClass('current-question');
    $('.current-question').next().addClass('current-question');
  }
  else if ($('.current-question').hasClass('I')) {
    window.location.href = 'lose.html';
  }
});
