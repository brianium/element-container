var ElementContainer = require('../../');

describe('ElementContainer', function() {
  beforeEach(function() {
    this.container = new ElementContainer(document.createElement('div'));
  });

  describe('.addClass()', function() {
    it('should add a class to the underlying element', function() {
      this.container.addClass('test');
      expect(this.container.hasClass('test')).toBe(true);
    });
  });

  describe('.removeClass()', function() {
    it('should remove a class from the underlying element', function() {
      this.container.addClass('test').removeClass('test');
      expect(this.container.hasClass('test')).toBe(false);
    });
  });

  describe('.hasAttr()', function() {
    it('should return true if attr is set', function() {
      this.container.element.setAttribute('id', 'my-id');
      expect(this.container.hasAttr('id')).toBe(true);
    });

    it('should return false if attr is not set', function() {
      expect(this.container.hasAttr('id')).toBe(false);
    });
  });

  describe('.attr()', function() {
    it('should set an attr with 2 arguments', function() {
      this.container.attr('id', 'hello');
      expect(this.container.hasAttr('id')).toBe(true);
    });

    it('should get an attr if only 1 argument', function() {
      this.container.attr('id', 'hello');
      expect(this.container.attr('id')).toBe('hello');
    });

    it('should set multiple attributes if an object is given', function() {
      this.container.attr({
        id: 'hello',
        title: 'title'
      });
      expect(this.container.attr('id')).toBe('hello');
      expect(this.container.attr('title')).toBe('title');
    });
  });

  describe('events', function() {

    beforeEach(function() {
      //deprecated, but phantom does not support constructors yet
      this.evt = document.createEvent('Event');
      this.evt.initEvent('click', true, true);
      this.container = new ElementContainer(document.createElement('div'));
      this.click = function() {
        this.style.color = 'red';
      };
    });

    describe('.on()', function() {
      it('should register an event with the container element', function() {
        this.container.on('click', this.click);
        this.container.element.dispatchEvent(this.evt);
        expect(this.container.element.style.color).toBe('red');
      });

      it('should register a container property on the element', function() {
        var container = null;
        this.container.on('click', function() {
          container = this.container;
        });
        this.container.element.dispatchEvent(this.evt);
        expect(container).toBe(this.container);
      });

      it('should allow non dom events', function() {
        var val = null;
        this.container.on('custom', function(v) {
          val = v;
        });
        this.container.emit('custom', 'hello');
        expect(val).toBe('hello');
      });
    });

    describe('.off()', function() {
      it('should remove a listener for an event on the container element', function() {
        this.container.on('click', this.click);
        this.container.off('click', this.click);
        this.container.element.dispatchEvent(this.evt);
        expect(this.container.element.style.color).toBe('');
      });      
      
      it('should allow non dom events', function() {
        var listener = function() { };
        this.container.on('custom', listener);
        this.container.off('custom', listener);
        expect(this.container.listeners('custom').length).toBe(0);
      });

    });

  });

});
