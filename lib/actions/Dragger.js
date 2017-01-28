"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref) {
  var object = _ref.object,
      startPoint = _ref.startPoint,
      mouse = _ref.mouse;

  return _extends({}, object, {
    x: mouse.x - (startPoint.clientX - startPoint.objectX),
    y: mouse.y - (startPoint.clientY - startPoint.objectY)
  });
};