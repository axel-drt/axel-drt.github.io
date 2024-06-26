"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _fiber = require("@react-three/fiber");
var _drei = require("@react-three/drei");
var _Loader = _interopRequireDefault(require("../Loader"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Earth = function Earth() {
  var earth = (0, _drei.useGLTF)("./planet/scene.gltf");
  return /*#__PURE__*/_react["default"].createElement("primitive", {
    object: earth.scene,
    scale: 2.5,
    "position-y": 0,
    "rotation-y": 0
  });
};
var EarthCanvas = function EarthCanvas() {
  return /*#__PURE__*/_react["default"].createElement(_fiber.Canvas, {
    shadows: true,
    frameloop: "demand",
    dpr: [1, 2],
    gl: {
      preserveDrawingBuffer: true
    },
    camera: {
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6]
    }
  }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(_Loader["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_drei.OrbitControls, {
    autoRotate: true,
    enableZoom: false,
    maxPolarAngle: Math.PI / 2,
    minPolarAngle: Math.PI / 2
  }), /*#__PURE__*/_react["default"].createElement(Earth, null), /*#__PURE__*/_react["default"].createElement(_drei.Preload, {
    all: true
  })));
};
var _default = exports["default"] = EarthCanvas;