import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Box from './components/Box';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const [turn, setturn] = React.useState(1);

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Box xo={turn} func={()=>{setturn(turn+1)}} /> 
        <Box xo={turn} func={()=>{setturn(turn+1)}} />
        <Box xo={turn} func={()=>{setturn(turn+1)}} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Box xo={turn} func={()=>{setturn(turn+1)}} />
        <Box xo={turn} func={()=>{setturn(turn+1)}} />
        <Box xo={turn} func={()=>{setturn(turn+1)}} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Box xo={turn} func={()=>{setturn(turn+1)}} />
        <Box xo={turn} func={()=>{setturn(turn+1)}} />
        <Box xo={turn} func={()=>{setturn(turn+1)}} />
      </View>
    </View>
  );
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
