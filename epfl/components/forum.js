import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,Picker,KeyboardAvoidingView,ScrollView} from 'react-native';
import { SearchBar ,Header, Icon ,Input,Button} from 'react-native-elements';


class Forum extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       search : '',
       options : false,
       section : '',
       niveau : '',
       document : '',
       numero : '',
       date : '',
       matiere: ''
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
       <View>
       <ScrollView >
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


     <Picker onValueChange={(itemValue, itemIndex) =>  this.setState({niveau: itemValue})  }   selectedValue={this.state.niveau}>
     <Picker.Item label="niveau" value="niveau" />
     <Picker.Item label="CMS" value="CMS" />
     <Picker.Item label="1ère annéee Bachelor" value="1ère annéee Bachelor" />
     <Picker.Item label="2ème annéee Bachelor" value="2ème annéee Bachelor" />
     <Picker.Item label="3ème annéee Bachelor" value="3ème annéee Bachelor" />
     <Picker.Item label="Master" value="Master" />
     <Picker.Item label="Doctorant" value="Doctorant" />
     </Picker>

      <Picker onValueChange={(itemValue, itemIndex) =>  this.setState({document: itemValue})  }   selectedValue={this.state.document}>
      <Picker.Item label="Document" value="document"/>
      <Picker.Item label="Série" value="série" />
      <Picker.Item label="controle" value="controle" />
      </Picker>

      <Input style={styles.input} placeholder="numero" onChangeText={(numero) => this.setState({numero : numero})} value={this.state.numero} />
      <Input style={styles.input} placeholder="date" onChangeText={(date) => this.setState({date : date})} value={this.state.date} />
      <Input style={styles.input} placeholder="matière" onChangeText={(matiere) => this.setState({matiere : matiere})} value={this.state.matiere} />

 </ScrollView>
    <View style={{alignItems: 'center'}}>
  <Button title="Search"   type="clear"
 buttonStyle={{marginTop:3,width:120,height:50}}
 titleStyle={{color : 'red'}} />
  </View>
 </View>

     );
   }
}


  render() {
    console.log(this.state.search);
    return (
      <KeyboardAvoidingView behaviour="padding" style={styles.main_container}>
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
        <View  style={styles.Options}>
       {this.renderAdvancedOptions()}
       </View>
      </KeyboardAvoidingView>
    );
  }

}

  const styles = StyleSheet.create({
    main_container:{
      flex:1 ,

      alignItems:'stretch',
      justifyContent: 'center',

    },
    welcome_container:{
      marginTop: 20,
      height : 130,
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
      marginTop: 10
    },
    Search_container : {
      flex : 3
    },
    Options : {
        flex : 2,
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

 export default Forum;
