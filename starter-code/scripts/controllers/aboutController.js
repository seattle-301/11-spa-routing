(function(module) {

  var aboutController = {
    reveal: function() {
      /* TODO: Reveal only the about section! */
      $('main > section').hide();
      $('#about').fadeIn();
    }
  };

  module.aboutController = aboutController;
})(window);
