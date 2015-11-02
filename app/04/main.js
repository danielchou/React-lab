var React = require('react');
var ReactDOM = require('react-dom');

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seonds ##ee33#e2e#: {this.state.secondsElapsed} ]</div>
    );
  }
});

ReactDOM.render(<Timer />, document.getElementById('example'));