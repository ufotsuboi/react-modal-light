'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.styles = {
      main: {
        position: 'fixed',
        top: 0,
        buttom: 0,
        left: 0,
        right: 0,
        width: '100vw',
        height: '100vh',
        zIndex: '1000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      background: {
        position: 'absolute',
        top: 0,
        buttom: 0,
        left: 0,
        right: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,.6)'
      },
      content: {
        width: props.width,
        height: props.height,
        maxWidth: 'calc(100vw - 50px)',
        maxHeight: 'calc(100vh - 50px)',
        zIndex: 1,
        position: 'relative',
        backgroundColor: 'rgba(142,142,142,.4)'
      },
      closeButton: {
        position: 'absolute',
        top: '-15px',
        right: '-15px',
        width: '30px',
        height: '30px',
        padding: '3px',
        borderRadius: '50%',
        zIndex: 2,
        color: '#fff',
        background: '#000',
        opacity: '.6',
        cursor: 'pointer'
      }
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'handleClose',
    value: function handleClose(e) {
      var close = this.props.close;

      e.preventDefault();
      close(e);
    }
  }, {
    key: 'renderCloseButton',
    value: function renderCloseButton() {
      if (this.props.hideCloseButton) return false;

      return _react2.default.createElement(
        'a',
        { style: this.styles.closeButton, onClick: this.handleClose.bind(this) },
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          'close'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          children = _props.children;

      if (!active) return false;

      return _react2.default.createElement(
        'div',
        { style: this.styles.main },
        _react2.default.createElement('div', { style: this.styles.background, onClick: this.handleClose.bind(this) }),
        _react2.default.createElement(
          'div',
          { style: this.styles.content },
          this.renderCloseButton(),
          children
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.defaultProps = {
  hideCloseButton: false
};

Modal.propTypes = {
  active: _propTypes2.default.bool.isRequired,
  close: _propTypes2.default.func.isRequired,
  hideCloseButton: _propTypes2.default.bool.isRequired,
  children: _propTypes2.default.node.isRequired,
  width: _propTypes2.default.string.isRequired,
  height: _propTypes2.default.string.isRequired
};

exports.default = Modal;