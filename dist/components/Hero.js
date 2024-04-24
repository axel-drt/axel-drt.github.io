"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _framerMotion = require("framer-motion");
var _styles = require("../styles");
var _canvas = require("./canvas");
var Hero = function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "relative w-full h-screen mx-auto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute inset-0 top-[120px]  max-w-7xl mx-auto ".concat(_styles.styles.paddingX, " flex flex-row items-start gap-5")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-center items-center mt-5"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-5 h-5 rounded-full bg-[#915EFF]"
  }), /*#__PURE__*/React.createElement("div", {
    className: "w-1 sm:h-80 h-40 violet-gradient"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    className: "".concat(_styles.styles.heroHeadText, " text-white")
  }, "Bonjour, je suis ", /*#__PURE__*/React.createElement("span", {
    className: "text-[#915EFF]"
  }, "Axel")), /*#__PURE__*/React.createElement("p", {
    className: "".concat(_styles.styles.heroSubText, " mt-2 text-white-100")
  }, "Bienvenue sur mon portfolio interactif"))), /*#__PURE__*/React.createElement(_canvas.ComputersCanvas, null), /*#__PURE__*/React.createElement("div", {
    className: "absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#about"
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2"
  }, /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    animate: {
      y: [0, 24, 0]
    },
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop"
    },
    className: "w-3 h-3 rounded-full bg-secondary mb-1"
  })))));
};
var _default = exports["default"] = Hero;