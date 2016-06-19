(function(module) {
  var articleController = {};

  articleController.index = function() {
    /* TODO: Reveal only the articles section! */
    $('.tab-content').hide();
    $('#articles').fadeIn();
  };

  module.articleController = articleController;
})(window);
