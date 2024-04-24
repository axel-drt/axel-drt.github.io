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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Ball = function Ball(props) {
  var _useTexture = (0, _drei.useTexture)([props.imgUrl]),
    _useTexture2 = _slicedToArray(_useTexture, 1),
    decal = _useTexture2[0];
  return /*#__PURE__*/_react["default"].createElement(_drei.Float, {
    speed: 1.75,
    rotationIntensity: 1,
    floatIntensity: 2
  }, /*#__PURE__*/_react["default"].createElement("ambientLight", {
    intensity: 0.25
  }), /*#__PURE__*/_react["default"].createElement("directionalLight", {
    position: [0, 0, 0.05]
  }), /*#__PURE__*/_react["default"].createElement("mesh", {
    castShadow: true,
    receiveShadow: true,
    scale: 2.75
  }, /*#__PURE__*/_react["default"].createElement("icosahedronGeometry", {
    args: [1, 1]
  }), /*#__PURE__*/_react["default"].createElement("meshStandardMaterial", {
    color: "#fff8eb",
    polygonOffset: true,
    polygonOffsetFactor: -5,
    flatShading: true
  }), /*#__PURE__*/_react["default"].createElement(_drei.Decal, {
    position: [0, 0, 1],
    rotation: [2 * Math.PI, 0, 6.25],
    scale: 1,
    map: decal,
    flatShading: true
  })));
};
var BallCanvas = function BallCanvas(_ref) {
  var icon = _ref.icon;
  return /*#__PURE__*/_react["default"].createElement(_fiber.Canvas, {
    frameloop: "demand",
    dpr: [1, 2],
    gl: {
      preserveDrawingBuffer: true
    }
  }, /*#__PURE__*/_react["default"].createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react["default"].createElement(_Loader["default"], null)
  }, /*#__PURE__*/_react["default"].createElement(_drei.OrbitControls, {
    enableZoom: false
  }), /*#__PURE__*/_react["default"].createElement(Ball, {
    imgUrl: icon
  })), /*#__PURE__*/_react["default"].createElement(_drei.Preload, {
    all: true
  }));
};
var _default = exports["default"] = BallCanvas;