import _classCallCheck from "/Users/hlthi/WebstormProjects/react-element-based-device-dedector/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/Users/hlthi/WebstormProjects/react-element-based-device-dedector/node_modules/@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "/Users/hlthi/WebstormProjects/react-element-based-device-dedector/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "/Users/hlthi/WebstormProjects/react-element-based-device-dedector/node_modules/@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "/Users/hlthi/WebstormProjects/react-element-based-device-dedector/node_modules/@babel/runtime/helpers/esm/inherits";
import React, { PureComponent } from 'react';
import ReactResizeDetector from 'react-resize-detector';
/**
 * https://usehooks.com/
 */

var ElementBasedDeviceDedector =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ElementBasedDeviceDedector, _PureComponent);

  function ElementBasedDeviceDedector() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ElementBasedDeviceDedector);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ElementBasedDeviceDedector)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      lastType: null
    };

    _this.onResize = function (width) {
      var _this$props = _this.props,
          onChangeType = _this$props.onChangeType,
          tabletBreakpoint = _this$props.tabletBreakpoint,
          mobileBreakpoint = _this$props.mobileBreakpoint;
      var lastType = _this.state.lastType;
      if (width < mobileBreakpoint && lastType !== 'mobile') onChangeType('mobile');else if (width < tabletBreakpoint && lastType !== 'tablet') onChangeType('tablet');else if (lastType !== 'computer') onChangeType('computer');
    };

    return _this;
  }

  _createClass(ElementBasedDeviceDedector, [{
    key: "render",
    value: function render() {
      var refreshRate = this.props.refreshRate;
      return React.createElement(ReactResizeDetector, {
        handleWidth: true,
        onResize: this.onResize,
        refreshRate: refreshRate
      });
    }
  }]);

  return ElementBasedDeviceDedector;
}(PureComponent);

ElementBasedDeviceDedector = {
  tabletBreakpoint: 760,
  mobileBreakpoint: 540
};
export default ElementBasedDeviceDedector;