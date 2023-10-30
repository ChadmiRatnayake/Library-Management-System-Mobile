import React, { Component } from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import { View, Text, StyleSheet } from 'react-native';

class MyLoadingComponent extends Component {
  state = {
    isLoading: true,
  };

  // Simulating a loading action
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000); // Simulating a 3-second loading time
  }

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.isLoading}
          textContent={'Loading...'}
          textStyle={styles.spinnerText}
        />
        {/* Your other content goes here */}
        <Text>This is the main content of your app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerText: {
    color: '#FFF',
  },
});

export default MyLoadingComponent;
