var React = require('react');
var ReactRouter = require('react-router');
var History = require('history');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var IndexLink = ReactRouter.IndexLink;
var Link = ReactRouter.Link;
var createHistory = History.createHistory;
var useBasename = History.useBasename;


var ACTIVE = { color: 'red' };

var App = React.createClass({
  render: function() {
      console.log('TEST:  this.props.params', this.props.params);
      console.log('CHirldren: ', this.props.children);

      return (
        <div>
          <h1>APP!</h1>
            <ul>
              <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
              <li><IndexLink to="/"           activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>
              <li><Link      to="/users"      activeStyle={ACTIVE}>/users</Link></li>
              <li><IndexLink to="/users"      activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>
              <li><Link      to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
              <li><Link      to="/users/ryan" query={{ foo: 'bar' }} activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>
              <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
            </ul>

          {this.props.children}
        </div>
      )
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

var Index = React.createClass({
  render() {
    return (
      <div>
        <h2>Index!</h2>
      </div>
    )
  }
});


var About = React.createClass({
  render() {
    return (
      <div>
        <h2>About CMP</h2>
      </div>
    )
  }
});

var User = React.createClass({
    render() {
      return (
        <div>
          <h3>User {this.props.params.id}</h3>
        </div>
      )
    }
});

var Users = React.createClass({
  render() {
    return (
      <div>
        <h2>Users</h2>
      </div>
    )
  }
});


var UsersIndex = React.createClass( {
  render() {
    return (
      <div>
        <h3>UsersIndex</h3>
      </div>
    )
  }
});

// var history = useBasename(createHistory)({
//   basename: '/active-links'
// });

var history = useBasename(createHistory)();

var routes = (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Index}/>
        <Route path="about" component={About}/>
        <Route path="users" component={Users}>
          <IndexRoute component={UsersIndex}/>
          <Route path=":id" component={User}/>
        </Route>
      </Route>
    </Router>
)

//var element = React.createElement(Hello, {});
React.render(routes, document.querySelector('.container'));
