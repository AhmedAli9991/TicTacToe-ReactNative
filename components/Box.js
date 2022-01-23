import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files

// or any pure javascript modules available in npm

export default function Box(props) {
  const [state, setState] = React.useState('');
  const [press, setPress] = React.useState(false);

  if (press === false) {
    return (
      <View style={styles.container}>
        <Button
          title="press"
          onPress={() => {
            if (props.xo % 2 != 0) {
              props.func();
              setPress(true);
              setState('X');
            } else {
              props.func();
              setPress(true);
              setState('O');
            }
          }}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text> {state} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
