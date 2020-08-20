import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {numberChanged} from '../redux/counter/actions';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.numberChanged(-1)}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
        <Text style={styles.text}>{this.props.number}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.numberChanged(1)}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  number: state.counterReducer.number,
});

const mapDispatchToProps = (dispatch) => {
  return {
    numberChanged: (number) => dispatch(numberChanged(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: '#E8B30A',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 28,
  },
});
