// __tests__/sum-test.js
jest.dontMock('../src/components/about');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var About = require('../src/components/about');


describe('About page', function() {
 it('Checks the text appears', function() {

   //Render a checkbox with label in the document
   var aboutcmp = TestUtils.renderIntoDocument(
     <About />
   );

    var aboutcmpnode = ReactDOM.findDOMNode(aboutcmp);
  //  // Verify that it's Off by default
    expect(aboutcmpnode.textContent).toEqual('this is about');
   //
  //  // Simulate a click and verify that it is now On
  //  TestUtils.Simulate.change(
  //    TestUtils.findRenderedDOMComponentWithTag(aboutcmp, 'input')
  //  );
  //  expect(aboutcmpnode.textContent).toEqual('On');


 });
});
