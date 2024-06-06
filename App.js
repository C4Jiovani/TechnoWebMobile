import * as React from 'react';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { View, Text } from 'react-native';

const App = () => {
  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello, world!</Text>
        <Button icon="instagram" mode="contained" onPress={() => alert('hello')}>
          Press me
        </Button>
      </View>
    </PaperProvider>
  );
};

export default App;
