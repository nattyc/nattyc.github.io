$("img.lazy").lazyload({
  effect : "fadeIn"
});

$(function () {
  $('[data-typer-targets]').typer();
});


var $sections = $('.section');

var getCurrentSection = function() {

  var scrollTop = $(window).scrollTop();
  var scrollBuffer = 5;

  var sectionOffsets = $sections.map(function() {
    return $(this).offset().top;
  }).get();

  var currentSection = $sections[0];

  $.each(sectionOffsets, function(idx, offset) {
    if (scrollTop + scrollBuffer > offset) {
      currentSection = $sections[idx];
    }
  });

  return $(currentSection);
};

var scrollToElement = function(el) {
  $('body').animate({
    scrollTop: $(el).offset().top
  }, 800);
};

$('.next').click(function(evt) {
  evt.preventDefault();
  var nextSection = getCurrentSection().next();
  if (!nextSection || nextSection.length === 0) nextSection = $($sections[$sections.length-1]);
  scrollToElement(nextSection);
});

$('.prev').click(function(evt) {
  evt.preventDefault();
  var prevSection = getCurrentSection().prev();
  if (!prevSection || prevSection.length === 0) prevSection = $($sections[0]);
  scrollToElement(prevSection);
});
