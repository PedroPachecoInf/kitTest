'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MyComponent = function MyComponent() {
  var labeText = 'Enter name: ';
  var buttonText = { text: 'Click here bro!' };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'label',
      { className: 'label', htmlFor: 'name' },
      labeText
    ),
    _react2.default.createElement('input', { id: 'name', type: 'text' }),
    _react2.default.createElement(
      'button',
      { style: { backgroundColor: 'blue', color: 'white' } },
      buttonText.text
    )
  );
};

exports.default = MyComponent;