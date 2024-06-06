// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Accueil = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>accueil</Text>
      <Button
        title="Go to test"
        onPress={() => navigation.navigate('test')}
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

export default Accueil;
