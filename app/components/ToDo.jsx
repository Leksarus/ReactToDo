var React = require('react');

var ToDo = React.createClass({
	render: function() {
		var { text, id } = this.props;

		return (
			<div>
				<div><span>{id}: </span> {text}</div>	
			</div>
			
		)
	}
});

module.exports = ToDo;