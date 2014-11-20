$( function() {
  // init Isotope
  var $container = $('#isotope').isotope({
    itemSelector: '.item',
    layoutMode: 'masonry',
    masonry: {
      columnWidth: 10
    }
  });
})