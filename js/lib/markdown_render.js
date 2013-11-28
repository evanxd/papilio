define(['lib/markdown'], function(markdown) {
  const SEPARATION_LINE = '---';

  function MarkdownRender(element) {
    this.element = element;
  }

  MarkdownRender.prototype = {
    render: function(content, index) {
      if (!index) {
        content.split(SEPARATION_LINE).forEach(function(splitContent) {
          this._render(splitContent);
        }.bind(this));
      } else {
        this._render(content, index);
      }
    },

    _render: function(content, index) {
      var slides = this.element.querySelectorAll('.slide'),
          slideLength = slides.length;

      if ((slideLength === 0 && index === 0) ||
          (slides.length + 1 === index) ||
          index === undefined) {
        this._insertElement(content);
      } else if (slideLength === 0 && index > 0) {
        console.error('No such index.');
        throw Error('No such index.');
      } else if (slideLength >= index) {
        slides[index].innerHTML = markdown.toHTML(content);
      } else {
        console.error('No such index.');
        throw Error('No such index.');
      }
    },

    _insertElement: function(content) {
      var div = document.createElement('div');
      div.classList.add('slide');
      div.innerHTML = markdown.toHTML(content);
      this.element.appendChild(div);
    }
  };

  return MarkdownRender;
});
