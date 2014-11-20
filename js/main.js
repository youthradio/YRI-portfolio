$( function() {
  // init Isotope when images are loaded.
  var $container = $('#isotope').imagesLoaded(function() {
    $container.isotope({
    itemSelector: '.item',
    layoutMode: 'masonry',
    masonry: {
      gutter: 10
    }
  });
});

if (Modernizr.touch) {
  $(".overlay").addClass("overlay-no-touch")
   $(".overlay-blog").addClass("overlay-blog-no-touch")
  $("h3").addClass("h3-no-touch")
}
})