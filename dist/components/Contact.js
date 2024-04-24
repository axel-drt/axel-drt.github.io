"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _framerMotion = require("framer-motion");
var _browser = _interopRequireDefault(require("@emailjs/browser"));
var _styles = require("../styles");
var _canvas = require("./canvas");
var _hoc = require("../hoc");
var _motion = require("../utils/motion");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Contact = function Contact() {
  var formRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)({
      name: "",
      email: "",
      message: ""
    }),
    _useState2 = _slicedToArray(_useState, 2),
    form = _useState2[0],
    setForm = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var handleChange = function handleChange(e) {
    var target = e.target;
    var name = target.name,
      value = target.value;
    setForm(_objectSpread(_objectSpread({}, form), {}, _defineProperty({}, name, value)));
  };
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    _browser["default"].send(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, {
      from_name: form.name,
      to_name: "JavaScript Mastery",
      from_email: form.email,
      to_email: "sujata@jsmastery.pro",
      message: form.message
    }, import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY).then(function () {
      setLoading(false);
      alert("Merci beaucoup. Je vous reviendrai dès que possible.");
      setForm({
        name: "",
        email: "",
        message: ""
      });
    }, function (error) {
      setLoading(false);
      console.error(error);
      alert("Service indisponible. Veuillez m'envoyer un mail : axel.durandet.ad@gmail.com");
    });
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
  }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    variants: (0, _motion.slideIn)("left", "tween", 0.2, 1),
    className: "flex-[0.75] bg-black-100 p-8 rounded-2xl"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: _styles.styles.sectionSubText
  }, "Rentrons en contact !"), /*#__PURE__*/_react["default"].createElement("h3", {
    className: _styles.styles.sectionHeadText
  }, "Contact."), /*#__PURE__*/_react["default"].createElement("p", {
    className: _styles.styles.sectionSubText
  }, "axel.durandet.ad@gmail.com"), /*#__PURE__*/_react["default"].createElement("form", {
    ref: formRef,
    onSubmit: handleSubmit,
    className: "mt-12 flex flex-col gap-8"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-white font-medium mb-4"
  }, "Nom"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "text",
    name: "name",
    value: form.name,
    onChange: handleChange,
    placeholder: "Quel est votre nom ?",
    className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
  })), /*#__PURE__*/_react["default"].createElement("label", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-white font-medium mb-4"
  }, "Email"), /*#__PURE__*/_react["default"].createElement("input", {
    type: "email",
    name: "email",
    value: form.email,
    onChange: handleChange,
    placeholder: "Quelle est votre adresse mail ?",
    className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
  })), /*#__PURE__*/_react["default"].createElement("label", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-white font-medium mb-4"
  }, "Message"), /*#__PURE__*/_react["default"].createElement("textarea", {
    rows: 7,
    name: "message",
    value: form.message,
    onChange: handleChange,
    placeholder: "Veuillez entrer votre message.",
    className: "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
  })), /*#__PURE__*/_react["default"].createElement("button", {
    type: "submit",
    className: "bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
  }, loading ? "Sending..." : "Send"))), /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    variants: (0, _motion.slideIn)("right", "tween", 0.2, 1),
    className: "xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
  }, /*#__PURE__*/_react["default"].createElement(_canvas.EarthCanvas, null)));
};
var _default = exports["default"] = (0, _hoc.SectionWrapper)(Contact, "contact");