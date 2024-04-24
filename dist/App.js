"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactRouterDom = require("react-router-dom");
var _components = require("./components");
var App = function App() {
  return /*#__PURE__*/React.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/React.createElement("div", {
    className: "relative z-0 bg-primary"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-hero-pattern bg-cover bg-no-repeat bg-center"
  }, /*#__PURE__*/React.createElement(_components.Navbar, null), /*#__PURE__*/React.createElement(_components.Hero, null)), /*#__PURE__*/React.createElement(_components.About, null), /*#__PURE__*/React.createElement(_components.Experience, null), /*#__PURE__*/React.createElement(_components.Tech, null), /*#__PURE__*/React.createElement(_components.Works, null), /*#__PURE__*/React.createElement("div", {
    className: "relative z-0"
  }, /*#__PURE__*/React.createElement(_components.Contact, null), /*#__PURE__*/React.createElement(_components.StarsCanvas, null))));
};
var _default = exports["default"] = App;