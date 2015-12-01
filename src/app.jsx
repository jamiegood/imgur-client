var React = require('react');
var ReactDOM = require('react-dom');
var Routes = require('./routes');
var Api = require('./utils/api');



// https://www.npmjs.com/package/react-responsive-carousel
//var React = require('react');
// var ReactDOM = require('react-dom');
// var Carousel = require('react-responsive-carousel').Carousel;
//
// var DemoSliderControls = function(){
// 	return (
// 		<Carousel type="slider" showControls={true} showStatus={true}>
// 			<img src="assets/1.jpeg" />
// 			<img src="assets/2.jpeg" />
// 			<img src="assets/3.jpeg" />
// 			<img src="assets/4.jpeg" />
// 			<img src="assets/5.jpeg" />
// 			<img src="assets/6.jpeg" />
// 			<img src="assets/7.jpeg" />
// 		</Carousel>
// 	);
// };
//
// ReactDOM.render(<DemoSliderControls />, document.querySelector('.container'));




ReactDOM.render(Routes, document.querySelector('.container'));
