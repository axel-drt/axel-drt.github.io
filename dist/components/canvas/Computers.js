"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _fiber = require("@react-three/fiber");
var _drei = require("@react-three/drei");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Computers = function Computers(_ref) {
  var isMobile = _ref.isMobile;
  var computer = (0, _drei.useGLTF)("./desktop_pc/scene.gltf");
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("hemisphereLight", {
    intensity: 0.5,
    groundColor: "black"
  }), " ", /*#__PURE__*/_react["default"].createElement("spotLight", {
    position: [-20, 50, 10],
    angle: 0.12,
    penumbra: 1,
    intensity: 1,
    castShadow: true,
    "shadow-mapSize": 1024
  }), /*#__PURE__*/_react["default"].createElement("pointLight", {
    intensity: 2
  }), /*#__PURE__*/_react["default"].createElement("primitive", {
    object: computer.scene,
    scale: isMobile ? 0.7 : 0.75,
    position: isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5],
    rotation: [-0.01, -0.2, -0.1]
  }));
};
var ComputersCanvas = function ComputersCanvas() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMobile = _useState2[0],
    setIsMobile = _useState2[1];
  (0, _react.useEffect)(function () {
    var mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    var handleMediaQueryChange = function handleMediaQueryChange(event) {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return function () {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_fiber.Canvas, {
    frameloop: "demand",
    shadows: true,
    dpr: [1, 2],
    camera: {
      position: [20, 3, 5],
      fov: 25
    },
    gl: {
      preserveDrawingBuffer: true
    }
  }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: null
  }, /*#__PURE__*/_react["default"].createElement(_drei.OrbitControls, {
    enableZoom: false,
    maxPolarAngle: Math.PI / 2,
    minPolarAngle: Math.PI / 2
  }), /*#__PURE__*/_react["default"].createElement(Computers, {
    isMobile: isMobile
  })), /*#__PURE__*/_react["default"].createElement(_drei.Preload, {
    all: true
  }));
};
var _default = exports["default"] = ComputersCanvas;