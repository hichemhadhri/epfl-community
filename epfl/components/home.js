import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';



class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mail : '',
      password : ''
    }
  }

     _signIn = () => {
    this.props.navigation.navigate('Sign')
  }
  _logIn = () => {
    alert('logging in ');
    fetch('http://192.168.1.3:3000/users/log',{
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      body : JSON.stringify({
      mail : this.state.mail,
      password : this.state.password
      })
    }).then((response) => response.json())
   .then((responseJson) => {
     console.log(responseJson)
     if(responseJson.success)
      this.props.navigation.navigate('DrawerNavigation',{states : responseJson.message})
     else {
       alert(responseJson.message)
     }
     })
   .catch((error) => {
     console.error(error);
   });
  }

  render()
  {

    return (
  <View style={styles.main_container}>

    <View style={styles.inter_container}>
      <View style ={styles.inter2_container}>
        <View style ={styles.img_container}>
          <Image source = {require('../assets/epfl.png')} style = {styles.image}/>
        </View>
        <View style={styles.input_container}>
            <Text color='grey' style={{marginBottom:5,marginTop:5}}>login </Text>
            <TextInput onChangeText={(mail) => this.setState({mail : mail})} value={this.state.mail} style={styles.input} />
            <Text color='grey' style={{marginBottom:5}}>password </Text>
            <TextInput secureTextEntry={true} onChangeText={(password) => this.setState({password : password})} value={this.state.password} style={styles.input} />
   <Text></Text>
            <Button title = "Log In "  style={styles.bouton} color='red' onPress={() => this._logIn()}/>
        </View>
       <View style={styles.new_container}>
       <Text style={{color: 'blue',fontSize: 18 ,textDecorationLine: 'underline'}} onPress= {() => this._signIn()}> Sign Up and get Started </Text>
       </View>
      </View>
    </View>
  </View>

    );
  }
}
  const styles = StyleSheet.create({
    main_container:{
      flex:1 ,
      marginTop:100,

      alignItems:'stretch',
      justifyContent: 'center',

    },
    image:{

      borderColor: '#000000',
      height:100,
      width:300
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
    },
    bouton:{


    },
    img_container:{
      flex:1,

      alignItems:'center'

    },
   inter_container:{
     flex:1,

     justifyContent: 'flex-start',
     alignItems : 'stretch'
   },
   inter2_container:{
     flex:1,
     marginLeft:5,
     marginRight:5,
     borderRadius:30,
     alignItems:'stretch'
   },
   new_container:{
     flex:1,
     marginTop:50
   }
  })

 export default Home;
