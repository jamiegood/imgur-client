var React = require('react');

/* require components for usig react router componets*/
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

/* require our components */
var Topic = require('./components/topic');
var About = require('./components/about');
var ImageDetail = require('./components/image-detail');
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
