import React from 'react';
import {ScrollView, StyleSheet, Text, View,Image,TextInput,Button,Picker,KeyboardAvoidingView } from 'react-native';


class Sign extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nom : '',
      age : '',
      section : '',
      niveau : '',
      mail : '',
      password : ''

    }
  }
   _signUp = () => {
     console.log(this.state.nom)
     console.log('hi');
     fetch('http://192.168.1.3:3000/users/sign',{
       method : 'POST',
       headers : {
         'Accept' : 'application/json',
         'Content-Type' : 'application/json'
       },
     body : JSON.stringify({
         nom : this.state.nom ,
         age : this.state.age ,
         section : this.state.section ,
         niveau : this.state.niveau ,
         mail : this.state.mail ,
         password : this.state.password
       })
     }).then((response) => response.json())
    .then((responseJson) =>   {this.props.navigation.navigate('DrawerNavigation',{states : responseJson.message}); })
    .catch((error) => {
      console.error(error);
    });

   }
  render() {
        console.log(this.state)
    return (
    <View style={styles.main_container} >
      <View style={styles.input_container}>
          <Text color='grey' style={{marginBottom:5,marginTop:5}}>nom et prenom </Text>
          <TextInput style={styles.input} onChangeText={(nom) => this.setState({nom : nom})} value={this.state.nom}/>
          <Text color='grey' style={{marginBottom:5}}>age </Text>
          <TextInput style={styles.input} onChangeText={(age) => this.setState({age : age})} value={this.state.age} />
          <Text color='grey' style={{marginBottom:5}}>section </Text>
          <Picker onValueChange={(itemValue, itemIndex) =>  this.setState({section: itemValue})  }   selectedValue={this.state.section}
>
       <Picker.Item label="Architecture" value="architecture" />
       <Picker.Item label="Chimie et génie Chimique" value="Chimie et génie Chimique" />
       <Picker.Item label="Génie civil" value="Génie civil" />
       <Picker.Item label="Génie électrique et électronique" value="Génie électrique et électronique" />
       <Picker.Item label="Génie Mécanique" value="Génie Mécanique" />
       <Picker.Item label="Informatique" value="Informatique" />
       <Picker.Item label="Ingénieurie des Sciences du vivant" value="Ingénieurie des Sciences du vivant" />
       <Picker.Item label="Mathématiques" value="Mathématiques" />
       <Picker.Item label="Microtechnique" value="Microtechnique" />
       <Picker.Item label="Physique" value="Physique" />
       <Picker.Item label="Science et Génie des Matériaux" value="Science et Génie des Matériaux" />
       <Picker.Item label="Sciences et Ingénierie de l’Environnement" value="Sciences et Ingénierie de l’Environnement" />
       <Picker.Item label="Systèmes de Communication" value="Systèmes de Communication" />
       <Picker.Item label="Cours de Mathématiques Spéciales (CMS, année préparatoire)" value="Cours de Mathématiques Spéciales (CMS, année préparatoire)" />
        </Picker>
        <Text color='grey' style={{marginBottom:5}}>niveau </Text>
        <Picker onValueChange={(itemValue, itemIndex) =>  this.setState({niveau: itemValue})  }   selectedValue={this.state.niveau}>
        <Picker.Item label="CMS" value="CMS" />
        <Picker.Item label="1ère annéee Bachelor" value="1ère annéee Bachelor" />
        <Picker.Item label="2ème annéee Bachelor" value="2ème annéee Bachelor" />
        <Picker.Item label="3ème annéee Bachelor" value="3ème annéee Bachelor" />
        <Picker.Item label="Master" value="Master" />
        <Picker.Item label="Doctorant" value="Doctorant" />
        </Picker>
          <Text color='grey' style={{marginBottom:5}}>adresse mail  </Text>
          <TextInput style={styles.input} onChangeText={(mail) => this.setState({mail : mail})} value={this.state.mail} />
          <Text color='grey' style={{marginBottom:5}}>creer un mot de passe </Text>
          <TextInput style={styles.input} onChangeText={(password) => this.setState({password : password})} value={this.state.password} />
          <Text color='grey' style={{marginBottom:5}}>confirmer le mot de passe </Text>
          <TextInput style={styles.input} />
          <Text></Text>

          </View>
             <Button title = "Sign Up "  style={styles.bouton} color='red' onPress={() => this._signUp()}/>
          </View>
    )
  }

}
const styles = StyleSheet.create({
  main_container:{
    flex:1 ,
    marginTop:30,
    marginBottom: 30,
    alignItems:'stretch',
    justifyContent: 'center',

  },
  input_container:{
    flex:1.3,

    paddingRight:10,
    paddingLeft:10,
    alignItems: 'stretch',
    justifyContent:'flex-start',
    backgroundColor : 'rgb(227,227,227)',
    marginLeft:5,
    marginRight:5,
    borderRadius:5
  },
  input:{
    borderRadius :3 ,
    shadowOpacity : 1,
    shadowRadius : 3,
   paddingLeft : 5,
  borderWidth : 1,
    borderColor: 'rgb(227,227,227)',
    backgroundColor: 'white',
    marginBottom:7
  }

});


export default Sign ;
