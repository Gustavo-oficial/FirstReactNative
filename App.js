import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const logar = () => {
  alert(`${email} ${senha}`);
  }

  
    

  return (
    <View style={styles.container}>
      
    
      <Text>Hello my friends</Text>
       

      <Text>Email</Text>
      <TextInput
      style={{ height: 40, width : 200, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setEmail(text)}
      value={email}
    />


    <Text>Senha</Text>
    <TextInput
      style={{ height: 40, color : 'white', width : 200, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => setSenha(text)}
      value={senha}
    />
  <Button
  onPress={logar}
  title="Login"
  color="green"
  accessibilityLabel="Login"
/>
      <StatusBar style="auto" />
    </View>
  );

  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
