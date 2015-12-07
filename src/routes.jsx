var React = require('react');
var ReactRouter = require('react-router');
//var History = require('history');
var Topic = require('./components/topic');
var About = require('./components/about');
var ImageDetail = require('./components/image-detail');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main');

module.exports = (
   <Router>
     <Route path="/" component={Main} >
      <Route path="topics/:id" component={Topic} />
      <Route path="images/:id" component={ImageDetail} />
      <Route path="about" component={About} />
    </Route>
   </Router>
);
