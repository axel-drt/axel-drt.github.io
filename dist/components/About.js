"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactTilt = require("react-tilt");
var _framerMotion = require("framer-motion");
var _styles = require("../styles");
var _constants = require("../constants");
var _hoc = require("../hoc");
var _motion = require("../utils/motion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var ServiceCard = function ServiceCard(_ref) {
  var index = _ref.index,
    title = _ref.title,
    icon = _ref.icon;
  return /*#__PURE__*/_react["default"].createElement(_reactTilt.Tilt, {
    options: {
      max: 45,
      scale: 1,
      speed: 450
    },
    className: "xs:w-[250px] w-full"
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    variants: (0, _motion.fadeIn)("right", "spring", index * 0.5, 0.75),
    className: "w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    options: {
      max: 45,
      scale: 1,
      speed: 450
    },
    className: "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: icon,
    alt: "web-development",
    className: "w-16 h-16 object-contain"
  }), /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-white text-[20px] font-bold text-center"
  }, title))));
};
var About = function About() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    variants: (0, _motion.textVariant)()
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: _styles.styles.sectionSubText
  }, "Introduction"), /*#__PURE__*/_react["default"].createElement("h2", {
    className: _styles.styles.sectionHeadText
  }, "\xC0 propos de moi.")), /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.p, {
    variants: (0, _motion.fadeIn)("", "", 0.1, 1),
    className: "mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
  }, "Passionn\xE9 par l'informatique depuis de nombreuses ann\xE9es, j'ai r\xE9alis\xE9 de nombreux projets et je suis d\xE9termin\xE9 \xE0 faire mes premiers pas en tant que d\xE9veloppeur professionnel. Ma cr\xE9ativit\xE9, ma curiosit\xE9 et ma soif d'apprendre me permettront de contribuer \xE0 vos projets innovants et de d\xE9velopper mes comp\xE9tences techniques et humaines."), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-20 flex flex-wrap gap-10"
  }, _constants.services.map(function (service, index) {
    return /*#__PURE__*/_react["default"].createElement(ServiceCard, _extends({
      key: service.title,
      index: index
    }, service));
  })));
};
var _default = exports["default"] = (0, _hoc.SectionWrapper)(About, "about");