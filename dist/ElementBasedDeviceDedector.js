import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import ReactResizeDetector from 'react-resize-detector';

var ElementBasedDeviceDedector =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ElementBasedDeviceDedector, _PureComponent);

  function ElementBasedDeviceDedector(props) {
    var _this;

    _classCallCheck(this, ElementBasedDeviceDedector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ElementBasedDeviceDedector).call(this, props));

    _this.onResize = function (width) {
      _this.dedectDeviceType(width);
    };

    _this.dedectDeviceType = function (width) {
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
    };

    _this.lastType = null;
    return _this;
  }

  _createClass(ElementBasedDeviceDedector, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          devices = _this$props2.devices,
          otherProps = _objectWithoutProperties(_this$props2, ["devices"]);

      return React.createElement(ReactResizeDetector, Object.assign({
        handleWidth: true,
        onResize: this.onResize
      }, otherProps));
    }
  }]);

  return ElementBasedDeviceDedector;
}(PureComponent);

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
export default ElementBasedDeviceDedector;