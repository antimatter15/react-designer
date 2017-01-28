"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function (_ref) {
  var object = _ref.object,
      startPoint = _ref.startPoint,
      mouse = _ref.mouse;

  var angle = Math.atan2(startPoint.objectX + (object.width || 0) / 2 - mouse.x, startPoint.objectY + (object.height || 0) / 2 - mouse.y);

  var asDegree = angle * 180 / Math.PI;
  var rotation = (asDegree + 45) * -1;

  return _extends({}, object, {
    rotate: rotation
  });
};