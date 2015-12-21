var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} = React;

var NormalButton = React.createClass({

  _onPressHandler() {
    console.log(this.props.btnName);
  },

  render: function() {
    return (
      <TouchableHighlight
        style={styles.normalButton}
        activeOpacity={1}
        animationVelocity={0}
        underlayColor="#ccc"
        onPress={this._onPressHandler}
        >
        <Text>
          {this.props.btnName}
        </Text>
      </TouchableHighlight>
    );
  }
});

var styles = StyleSheet.create({
  normalButton: {
    padding: 30,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#e6e6e6',
    borderRightWidth: 1,
    borderRightColor: '#e6e6e6'
  }
});

module.exports = NormalButton;