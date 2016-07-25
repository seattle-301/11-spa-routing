(function(module) {
  var adminController = {
    reveal: function() {
      $('#blog-stats').fadeIn().siblings().hide();
    }
  };
  module.adminController = adminController;
})(window);
