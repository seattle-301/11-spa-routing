(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* TODO: Reveal only the about section! */
    $('main > section').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
