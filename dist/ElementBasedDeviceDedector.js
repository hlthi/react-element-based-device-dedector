"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactResizeDetector = _interopRequireDefault(require("react-resize-detector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * https://usehooks.com/
 */
var ElementBasedDeviceDedector =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ElementBasedDeviceDedector, _PureComponent);

  function ElementBasedDeviceDedector(props) {
    var _this;

    _classCallCheck(this, ElementBasedDeviceDedector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ElementBasedDeviceDedector).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onResize", function (width) {
      _this.dedectDeviceType(width);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "dedectDeviceType", function (width) {
      var _this$props = _this.props,
          onChangeType = _this$props.onChangeType,
          _devices = _this$props.devices; // sort descending devices by breakpoint px

      var devices = _devices.sort(function (device1, device2) {
        return device1.breakpointPx > device2.breakpointPx ? -1 : device1.breakpointPx === device2.breakpointPx ? 0 : 1;
      }); // compare


      for (var i = 0; i < devices.length; i += 1) {
        // check breakpoint and dont recall if already set
        if (width > devices[i].breakpointPx) {
          if (_this.lastType !== devices[i].name) {
            _this.lastType = devices[i].name;
            console.log(devices[i].name);
            onChangeType(devices[i].name, devices[i].breakpointPx);
          }

          break;
        }
      }
    });

    _this.lastType = null;
    return _this;
  }

  _createClass(ElementBasedDeviceDedector, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          devices = _this$props2.devices,
          otherProps = _objectWithoutProperties(_this$props2, ["devices"]);

      return _react.default.createElement(_reactResizeDetector.default, _extends({
        handleWidth: true,
        onResize: this.onResize
      }, otherProps));
    }
  }]);

  return ElementBasedDeviceDedector;
}(_react.PureComponent);

ElementBasedDeviceDedector.propTypes = {
  onChangeType: _propTypes.default.func.isRequired,
  devices: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string,
    breakpointPx: _propTypes.default.number
  }))
};
ElementBasedDeviceDedector.defaultProps = {
  devices: [// below 768px
  {
    name: 'mobile',
    breakpointPx: 768
  }, // 768px - 991px
  {
    name: 'tablet',
    breakpointPx: 992
  }, // 992px - 1200px
  {
    name: 'computer',
    breakpointPx: 1200
  }]
};
var _default = ElementBasedDeviceDedector;
exports.default = _default;