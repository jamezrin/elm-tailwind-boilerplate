// Styles
require('./main.css');

// Elm test component
const Counter = require('./elm/Counter.elm');

var app = Counter.Elm.Counter.init({
  node: document.getElementById('elm-counter-test')
});
