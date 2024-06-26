"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Ball = _interopRequireDefault(require("./canvas/Ball"));
var _hoc = require("../hoc");
var _constants = require("../constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Correction de l'import

var Tech = function Tech() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row flex-wrap justify-center gap-10"
  }, _constants.technologies.map(function (technology) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "w-28 h-28",
      key: technology.name
    }, /*#__PURE__*/_react["default"].createElement(_Ball["default"], {
      icon: technology.icon
    }));
  }));
};
var _default = exports["default"] = (0, _hoc.SectionWrapper)(Tech, "");