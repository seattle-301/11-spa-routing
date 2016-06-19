(function(module) {
  var articleController = {};

  articleController.index = function() {
    /* TODO: Be sure to reveal only the articles section */
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.articleController = articleController;
})(window);
