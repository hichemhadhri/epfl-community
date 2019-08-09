import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button } from 'react-native';
import { SearchBar ,Header, Icon } from 'react-native-elements';


class Forum extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       search : '',
       options : false
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

        <Text> this is the options </Text>
       
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
        flex : 2
    }
  });

 export default Forum;
