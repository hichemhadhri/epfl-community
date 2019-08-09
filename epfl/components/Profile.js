import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,Button,TouchableOpacity} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Avatar, Header } from 'react-native-elements';

// load image from gallery or camera
const options = {
  title: 'Select Avatar',
  chooseFromLibraryButtonTitle : 'Choose from library',
  takePhotoButtonTitle : 'Take a photo',
  cancelButtonTitle : 'Cancel'
};

class Profile extends React.Component {
     constructor(props){
       super(props)
       this.state = this.props.navigation.getParam('states','[]');
       this.state.sourceAvatar = null;

     }


     renderImage =  () =>{
       if (this.state.sourceAvatar == null){
         console.log("default image")
         if(this.state.pdp!="pdpm.jpg"){
       return(
         <Avatar rounded showEditButton source ={{uri : "http://192.168.1.3:3000/uploads/"+this.state.pdp}}
         size="xlarge"/>
      );
    }else {
      return( <Avatar rounded showEditButton   icon={{name: 'user', type: 'font-awesome'}}

       size="xlarge"/>)

    }
    }
    else {
      return(
        <Avatar rounded showEditButton source ={this.state.sourceAvatar}       size="xlarge"
 />
    );
     }
   }

 onPress = () => {
    alert('pdp clicked');

    ImagePicker.showImagePicker(options, (response) => {
  console.log('Response = ', response);

  if (response.didCancel) {
    console.log('User cancelled image picker');
  } else if (response.error) {
    console.log('ImagePicker Error: ', response.error);
  } else if (response.customButton) {
    console.log('User tapped custom button: ', response.customButton);
  } else {

      console.log(response);
    // You can also display the image using data:
    const source = { uri: 'data:image/jpeg;base64,' + response.data };
         this.setState({
           sourceAvatar : source
         });
         const data = new FormData();
 data.append('name', 'avatar');
 data.append('fileData', {
  uri : response.uri,
  type: response.type,
  name: response.fileName
 });
 const config = {
  method: 'POST',
  headers: {
   'Accept': 'application/json',
   'Content-Type': 'multipart/form-data',
  },
  body: data,
 };
fetch("http://192.168.1.3:3000/users/image/"+this.state._id, config)
 .then((checkStatusAndGetJSONResponse)=>{
   console.log(checkStatusAndGetJSONResponse);
 }).catch((err)=>{console.log(err)});
}
}

);
 }

 _open = () => {

   this.props.navigation.openDrawer();
 }

render(){


  console.log(this.state)
    return (


  <View style= {styles.main_container}>
    <View style = {{marginTop:-10}}>
  <Header
containerStyle={{backgroundColor: 'red'  }}
leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this._open()}}
rightComponent={{ icon: 'home', color: '#fff' }}
    />
    </View>
    <View style={styles.img_container}>
    <TouchableOpacity  onPress={this.onPress}>
         {this.renderImage()}
          </TouchableOpacity>
         <View style ={styles.info_container}>
            <Text style = {styles.text}> {this.state.name}</Text>
            <Text style = {styles.text}> {this.state.age}  ans </Text>
            <Text style = {styles.text}> {this.state.section}</Text>
            <Text style = {styles.text}> {this.state.niveau} </Text>
         </View>
    </View>
    <View style = {styles.body}>

    </View>
  </View>

    );
  }
}


const styles = StyleSheet.create({
  main_container:{
    flex:1 ,
    alignItems:'stretch',
    justifyContent: 'flex-start',
  },
  img_container :{
    paddingBottom : 5 ,
    paddingTop:5 ,
    paddingRight : 10 ,
    flexDirection : 'row',
    backgroundColor: 'rgb(227,227,227)',
    paddingLeft: 3
  },

  info_container : {
    marginLeft : 20,
    flex : 2,
    marginTop: 5
  },
  body: {
    flex: 3
  },
  text : {
    marginTop: 3,
    fontSize : 16,
    textAlign: 'justify'
  }
});


export default Profile
