var React = require('react');

var ClickCounter = React.createClass({
	getInitialState: function () {
		return {
			numClicks: 0
		};
	},

	onClick: function () {
		this.setState({
			numClicks: this.state.numClicks + 1
		});
	},

	render: function() {
		return (
			<div onClick={this.onClick}>
				{this.state.numClicks} clicks
			</div>
		);
	}
});

module.exports = ClickCounter;

