(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    /* TODO: We only want to display the about section! */
    $('main > section').hide();
    $('#about').fadeIn();
  };

  module.aboutController = aboutController;
})(window);
