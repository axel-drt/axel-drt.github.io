"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _fiber = require("@react-three/fiber");
var _drei = require("@react-three/drei");
var random = _interopRequireWildcard(require("maath/random/dist/maath-random.esm"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Stars = function Stars(props) {
  var ref = (0, _react.useRef)();
  var _useState = (0, _react.useState)(function () {
      return random.inSphere(new Float32Array(5000), {
        radius: 1.2
      });
    }),
    _useState2 = _slicedToArray(_useState, 1),
    sphere = _useState2[0];
  (0, _fiber.useFrame)(function (state, delta) {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return /*#__PURE__*/React.createElement("group", {
    rotation: [0, 0, Math.PI / 4]
  }, /*#__PURE__*/React.createElement(_drei.Points, _extends({
    ref: ref,
    positions: sphere,
    stride: 3,
    frustumCulled: true
  }, props), /*#__PURE__*/React.createElement(_drei.PointMaterial, {
    transparent: true,
    color: "#f272c8",
    size: 0.002,
    sizeAttenuation: true,
    depthWrite: false
  })));
};
var StarsCanvas = function StarsCanvas() {
  return /*#__PURE__*/React.createElement("div", {
    className: "w-full h-auto absolute inset-0 z-[-1]"
  }, /*#__PURE__*/React.createElement(_fiber.Canvas, {
    camera: {
      position: [0, 0, 1]
    }
  }, /*#__PURE__*/React.createElement(_react.Suspense, {
    fallback: null
  }, /*#__PURE__*/React.createElement(Stars, null)), /*#__PURE__*/React.createElement(_drei.Preload, {
    all: true
  })));
};
var _default = exports["default"] = StarsCanvas;