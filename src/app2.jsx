var React = require('react');
var ReactRouter = require('react-router');
//var HashHistory = require('react-router/lib/hashhistory');
var Link = require('react-router').Link;
var history = require('history');


var Router = ReactRouter.Router;
var Route = ReactRouter.Route;




var Hello = React.createClass({
  render: function() {
    return <h1 className="red">
      Hello CMP
      {this.props.children}
    </h1>
  }
});

var Child1 = React.createClass({
  render: function() {

    console.log(this.props.children);
    return <h1>I'm child ONE</h1>

      {this.props.children}
  }
});

var Child2 = React.createClass({
  render: function() {
    return <h1>I'm child TWO, the other one</h1>
  }
});

var inbox = React.createClass({
  render: function() {
    return <h1>I am the inbox</h1>
      {this.props.children}

  }
});

var message = React.createClass({
  render: function() {
    return <h1>I'm the message cpm </h1>
      {this.props.children}

  }
});

var NoMatch = React.createClass({
  render: function() {
    return <h1>I'm the NoMatch cpm </h1>
      {this.props.children}

  }
});


var Test = React.createClass({



  render: function() {
      console.log('TEST:  this.props.params', this.props.params);
      console.log('CHirldren: ', this.props.children);

    return <h1>this is the Test</h1>
    {this.props.params}
    {this.props.children}



  }
});
var Test1 = React.createClass({
  render: function() {
    return <h1>this is the Test11111</h1>
  }
});
var Test2 = React.createClass({
  render: function() {

    console.log('hello anyone there');
    console.log(this.props.params);
    return <h1>this is the Test22222</h1>

  }
});

var routes = (
  <Router>
      <Route path="/" component={Test}>
        <Route path="/test1" component={Test1}/>
        <Route path="/test2" component={Test2}/>
      </Route>

  </Router>
)

//var element = React.createElement(Hello, {});
React.render(routes, document.querySelector('.container'));
