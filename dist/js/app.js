"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "header"
      }, React.createElement("h1", null, React.createElement("a", {
        href: "#"
      }, this.props.title)), React.createElement("nav", null, this.props.links.map(function (link, index) {
        return React.createElement("a", {
          key: index,
          href: link.link
        }, link.text);
      })));
    }
  }]);

  return Header;
}(React.Component);

var PortfolioContainer =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(PortfolioContainer, _React$Component2);

  function PortfolioContainer() {
    _classCallCheck(this, PortfolioContainer);

    return _possibleConstructorReturn(this, _getPrototypeOf(PortfolioContainer).apply(this, arguments));
  }

  _createClass(PortfolioContainer, [{
    key: "render",
    value: function render() {}
  }]);

  return PortfolioContainer;
}(React.Component);

var Portfolio =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Portfolio, _React$Component3);

  function Portfolio() {
    _classCallCheck(this, Portfolio);

    return _possibleConstructorReturn(this, _getPrototypeOf(Portfolio).apply(this, arguments));
  }

  _createClass(Portfolio, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: "portfolio-items"
      }, this.props.items.map(function (item, index) {
        return React.createElement("a", {
          key: index,
          href: item.link
        }, React.createElement("div", {
          className: "portfolio"
        }, React.createElement("img", {
          src: "img/portfolio/" + item.image + ".jpg",
          className: "img-responsive"
        }), React.createElement("div", {
          className: "text"
        }, React.createElement("div", {
          className: "text-inner"
        }, React.createElement("h2", null, item.title), React.createElement("p", null, item.description)))));
      }));
    }
  }]);

  return Portfolio;
}(React.Component); // Declare portfolio items


var portfolio_data = [{
  link: "https://twistedcore.co.uk/photomap",
  image: "photomap",
  title: "PhotoMap",
  description: "View your Google Photos on a world map"
}, {
  link: "https://chrome.google.com/webstore/detail/mytutor-calendar/gidonccfebhenghahakccknmhjmdfcfi",
  image: "mtc",
  title: "MyTutor Calendar",
  description: "Automatically sync tutor sessions to your calendar"
}, {
  link: "https://ysjournal.com",
  image: "optimised/ysj",
  title: "Young Scientists Journal",
  description: "Science journal for young people"
}, {
  link: "https://twenty.ysjournal.com",
  image: "optimised/twenty_2",
  title: "Young Scientists Journal: Issue 20",
  description: "Fresh issue format for a journal"
}, {
  link: "https://compass-edinburgh.co.uk",
  image: "optimised/compass",
  title: "Compass",
  description: "Edinburgh-based person centered counselling"
}, {
  link: "https://googpress.org",
  image: "optimised/googpress",
  title: "GoogPress",
  description: "Build websites using Google Docs"
}];
ReactDOM.render(React.createElement(Portfolio, {
  items: portfolio_data
}), document.getElementById('images'));
ReactDOM.render(React.createElement(Header, {
  title: "Stewart McGown",
  links: [{
    link: '#',
    text: "Portfolio"
  }, {
    link: "https://github.com/stewartmcgown",
    text: "Open Source"
  }, {
    link: '#',
    text: 'Contact'
  }, {
    link: "/resumes/Stewart McGown - CV-min.pdf",
    text: "Resume"
  }]
}), document.getElementById('header'));