(function(module) {
  var adminController = {
    index: function() {
      $('main > section').hide();
      $('#blog-stats').fadeIn();
    }
  };
  module.adminController = adminController;
})(window);
