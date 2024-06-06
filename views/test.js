// DetailsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Test = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>test fot</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Test;
