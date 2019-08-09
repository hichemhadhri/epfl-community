import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button,Picker } from 'react-native';
import { SearchBar ,Header, Icon } from 'react-native-elements';


class Forum extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       search : '',
       options : false,
       section : '',
       niveau : ''
     };
   }

_search = search =>{
   this.setState({ search });
}

_open = () => {

  this.props.navigation.openDrawer();
}

toggleOptions = () => {
  if(this.state.options == false)
  this.setState({
    options :true
  });
  else {
    this.setState({
      options :false
    })
  }
}

renderAdvancedOptions = () =>{
  if (this.state.options == false)
   {

     return (<View></View>);
   }
   else {

     return (

       <Picker onValueChange={(itemValue, itemIndex) =>  this.setState({section: itemValue})  }   selectedValue={this.state.section}>
    <Picker.Item label="Section" value="section" />
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
     

     );
   }
}


  render() {
    console.log(this.state.search);
    return (
      <View style={styles.main_container}>
      <View style = {{marginTop:-10}}>
    <Header
  containerStyle={{backgroundColor: 'red'  }}
  leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this._open()}}
  rightComponent={{ icon: 'home', color: '#fff' }}
      />
      </View>
       <View style={styles.welcome_container}>
          <Text style={styles.bienvenueText}> Bienvenue A AssisEPFL ! </Text>
          <Text style={styles.description}> Demandez et partagez de l'aide dans vos  séries, controles, projets...</Text>
       </View>
       <View style = {styles.Search} >
        <View style = {styles.Search_container}>
           <SearchBar placeholder="Search here" onChangeText={this._search} value={this.state.search} lightTheme= {true} round={true} />
         </View>
         <View style = {{marginTop : 20}}>
           <Icon
 name='sliders'
 type='feather'
 color='#517fa4'
 onPress= {this.toggleOptions}
/>
</View>
       </View>
        <View style={styles.Options}>
       {this.renderAdvancedOptions()}
       </View>
      </View>
    );
  }

}

  const styles = StyleSheet.create({
    main_container:{
      flex:1 ,

      alignItems:'stretch',
      justifyContent: 'center',

    },
    red_container:{
    height: 50,
      backgroundColor : 'red'
    },
    welcome_container:{
      marginTop: 20,
      height : 150,
      backgroundColor : 'rgb(227,227,227)',
      alignItems : 'center'
    },
    bienvenueText: {
      marginTop: 5,
      fontSize: 30,
      fontWeight: 'bold',

    },
    description : {
      fontSize : 18,
      textAlign : 'center',
      marginTop:20
    },
    Search : {

      flexDirection:'row',
      marginTop: 50
    },
    Search_container : {
      flex : 3
    },
    Options : {
        flex : 2,
    }
  });

 export default Forum;
