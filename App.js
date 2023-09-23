import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Alert, Button } from 'react-native';

export default function App() {
  const [ok, setOk] = useState(false);

const showAlert = () => {
  Alert.alert(
    "ALARM CLOCK",
    "You have to wake up NOW!",
    [
      {
        text: "OK",
        onPress: () =>setOk(true)
      },
      {
        text: "Cancel",
        onPress: () => setOk(false)
      }
    ]
  );
}

  return (
    <View style={styles.container}>
      <Button title={'Open alert message'} onPress={showAlert}></Button>
      <Text>{ok===true ? 'Ok, waking up' : 'Nope, I want to sleep'}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
