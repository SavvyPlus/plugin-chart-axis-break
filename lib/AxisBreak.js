"use strict";

exports.__esModule = true;
exports.default = AxisBreak;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _style = _interopRequireDefault(require("@superset-ui/style"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  const data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  padding: ", "px;\n  border-radius: ", "px;\n  height: ", ";\n  width: ", ";\n  overflow-y: scroll;\n\n  h3 {\n    /* You can use your props to control CSS! */\n    font-size: ", ";\n    font-weight: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

// The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled
// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/style. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-style/src/index.ts
const Styles = _style.default.div(_templateObject(), ({
  theme
}) => theme.colors.secondary.light2, ({
  theme
}) => theme.gridUnit * 4, ({
  theme
}) => theme.gridUnit * 2, ({
  height
}) => height, ({
  width
}) => width, ({
  theme,
  headerFontSize
}) => theme.typography.sizes[headerFontSize], ({
  theme,
  boldText
}) => theme.typography.weights[boldText ? 'bold' : 'normal']);
/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */


function AxisBreak(props) {
  // height and width are the height and width of the DOM element as it exists in the dashboard.
  // There is also a `data` prop, which is, of course, your DATA 🎉
  const {
    data,
    height,
    width
  } = props;
  const rootElem = (0, _react.createRef)(); // Often, you just want to get a hold of the DOM and go nuts.
  // Here, you can do that with createRef, and the useEffect hook.

  (0, _react.useEffect)(() => {
    const root = rootElem.current;
    console.log('Plugin element', root);
  });
  console.log('Plugin props', props);
  return /*#__PURE__*/_react.default.createElement(Styles, {
    ref: rootElem,
    boldText: props.boldText,
    headerFontSize: props.headerFontSize,
    height: height,
    width: width
  }, /*#__PURE__*/_react.default.createElement("h3", null, props.headerText), /*#__PURE__*/_react.default.createElement("pre", null, "$", JSON.stringify(data, null, 2)));
}

AxisBreak.propTypes = {
  height: _propTypes.default.number.isRequired,
  width: _propTypes.default.number.isRequired,
  boldText: _propTypes.default.bool.isRequired,
  headerFontSize: _propTypes.default.oneOf(['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']).isRequired,
  headerText: _propTypes.default.string.isRequired
};