import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

<Image 
style={styles.xbox}
source={require('./src/assets/images/xbox.png')}
/>
      <Text style={styles.login}>Login</Text>
      <Text style={styles.email}>Email</Text>

      <Text style={styles.senha}>Senha</Text>

      <TextInput style={styles.InputEmail} defaultValue='Digite seu email...'/>
      <TextInput style={styles.InputSenha} defaultValue='Digite Sua Senha:'/>

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.Entrar}>Entrar</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

login: {
  color:'white',
  fontSize: 50,
  top: -160
},

email: {
color:'white', 
fontSize: 16,
top: -100, 
right: 130,
},

senha: {
  color:'white', 
  fontSize: 16,
 right: 130,
 top: -35
  },
  

xbox: {
  width:200, 
  height: 200,
  top: -200 
},

InputEmail: {

  width: '90%',
  height: 40, 
  borderWidth: 1,
  padding: 10, 
  marginTop: -110,
backgroundColor:'white',

},

InputSenha: {

  width: '90%',
  height: 40, 
  borderWidth: 1,
  padding: 10, 
  marginTop: 50,
backgroundColor:'white',

},

Entrar: {
  color: 'black', 
  fontSize: 24
}, 

btn: {
  width:'90%',
  height:40,
  borderRadius: '5%',
  borderWidth: 1,
  borderColor: 'black',
  justifyContent: 'center',
  alignItems: 'center', 
  backgroundColor:'lightgreen',
  top: 130
}


});

