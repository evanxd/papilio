define(['./slide_render_factory'], function(slideRenderFactory) {
  function Papilio(element, options) {
    var SlideRender;

    if (!!options && !!options.slideRender) {
      SlideRender = slideRenderFactory[options.slideRender];
    } else {
      // MarkdownRender is the default render.
      SlideRender = slideRenderFactory.MarkdownRender;
    }

    this.element = element;
    this.slideRender = new SlideRender(element);
  }

  Papilio.prototype = {
    goTo: function(page) {

    },

    renderSlide: function(content, page) {
      this.slideRender.render(content, page);
    },

    hideSlide: function(page) {

    },

    addComment: function(comment, page) {

    }
  };

  return Papilio;
});
