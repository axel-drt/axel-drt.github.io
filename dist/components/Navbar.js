"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _styles = require("../styles");
var _constants = require("../constants");
var _assets = require("../assets");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Navbar = function Navbar() {
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    toggle = _useState4[0],
    setToggle = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    scrolled = _useState6[0],
    setScrolled = _useState6[1];
  (0, _react.useEffect)(function () {
    var handleScroll = function handleScroll() {
      var scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return function () {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("nav", {
    className: "".concat(_styles.styles.paddingX, " w-full flex items-center py-5 fixed top-0 z-20 ").concat(scrolled ? "bg-primary" : "bg-transparent")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "w-full flex justify-between items-center max-w-7xl mx-auto"
  }, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Link, {
    to: "/",
    className: "flex items-center gap-2",
    onClick: function onClick() {
      setActive("");
      window.scrollTo(0, 0);
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: _assets.logo,
    alt: "logo",
    className: "w-9 h-9 object-contain"
  }), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-white text-[18px] font-bold cursor-pointer flex "
  }, "Axel \xA0", /*#__PURE__*/_react["default"].createElement("span", {
    className: "sm:block hidden"
  }, " | DURANDET"))), /*#__PURE__*/_react["default"].createElement("ul", {
    className: "list-none hidden sm:flex flex-row gap-10"
  }, _constants.navLinks.map(function (nav) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: nav.id,
      className: "".concat(active === nav.title ? "text-white" : "text-secondary", " hover:text-white text-[18px] font-medium cursor-pointer"),
      onClick: function onClick() {
        return setActive(nav.title);
      }
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "#".concat(nav.id)
    }, nav.title));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "sm:hidden flex flex-1 justify-end items-center"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: toggle ? _assets.close : _assets.menu,
    alt: "menu",
    className: "w-[28px] h-[28px] object-contain",
    onClick: function onClick() {
      return setToggle(!toggle);
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(!toggle ? "hidden" : "flex", " p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl")
  }, /*#__PURE__*/_react["default"].createElement("ul", {
    className: "list-none flex justify-end items-start flex-1 flex-col gap-4"
  }, _constants.navLinks.map(function (nav) {
    return /*#__PURE__*/_react["default"].createElement("li", {
      key: nav.id,
      className: "font-poppins font-medium cursor-pointer text-[16px] ".concat(active === nav.title ? "text-white" : "text-secondary"),
      onClick: function onClick() {
        setToggle(!toggle);
        setActive(nav.title);
      }
    }, /*#__PURE__*/_react["default"].createElement("a", {
      href: "#".concat(nav.id)
    }, nav.title));
  }))))));
};
var _default = exports["default"] = Navbar;