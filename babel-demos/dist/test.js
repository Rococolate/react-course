(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['react', 'react-dom'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('react'), require('react-dom'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.reactDom);
    global.test = mod.exports;
  }
})(this, function (_react, _reactDom) {
  'use strict';

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var MyComponent = function (_Component) {
    _inherits(MyComponent, _Component);

    function MyComponent() {
      _classCallCheck(this, MyComponent);

      return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    MyComponent.prototype.render = function render() {
      return _react2.default.createElement(
        'h1',
        null,
        ' hello word~! '
      );
    };

    return MyComponent;
  }(_react.Component);

  (0, _reactDom.render)(_react2.default.createElement(MyComponent, null), document.getElementById('app'));
});