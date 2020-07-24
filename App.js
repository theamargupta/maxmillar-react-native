/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Button, View, Text, TextInput} from 'react-native';

const App = () => {
  const [title, setTitle] = useState('Amar');
  return (
    <View style={{padding: 50}}>
      <View style={styles.container}>
        <TextInput
          placeholder="amar"
          onChangeText={(e) => setTitle(e)}
          style={styles.inputContainer}
        />
        <Button title="ADD" />
      </View>
      <View>
        <Text>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    width: 200,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default App;
