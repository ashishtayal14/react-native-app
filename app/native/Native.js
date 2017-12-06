import React, {Component} from "react";

import {View, Button, Text, Alert} from "react-native";
import { StackNavigator} from 'react-navigation'
  
 import Inputs from "./Inputs";
 import UrlLink from "./UrlLink";

 import GeoLoc from "./GeoLoc";


 import Storage from "./Storage";


 import Snap from "./Snap";

 import CameraRollView from "./CameraRollView";
 
 
 import FileSys from "./FileSys";

 import Config from 'react-native-config';
 
 

 //import NativeCall from "./NativeCall";
 

class NativeFeature extends Component {
    constructor(props) {
        super(props);
    }


    showEnv() {
        Alert.alert(Config.API_END_POINT);
    }

    networkCall() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then ( response => response.json()) //return a promise
        .then ( (posts) => {
            Alert.alert("posts  " + posts.length);
        })
    }
 
    render() {
        return (
            <View>
                


                <Button onPress={()=> this.props.navigation.navigate("Inputs", 
                                                      {title: 'Inputs'})} 
                        title="Input Controls">

                </Button>
  


                <Button onPress={()=> this.props.navigation.navigate("UrlLink", 
                                                      {title: 'UrlLink'})} 
                        title="Linking">

                </Button>


                <Button onPress={()=> this.props.navigation.navigate("GeoLoc", 
                                                      {title: 'GeoLoc'})} 
                        title="Geo">

                </Button>


                <Button onPress={()=> this.props.navigation.navigate("Storage", 
                                                      {title: 'Storage'})} 
                        title="Storage">

                </Button>




                <Button onPress={()=> this.networkCall()} 
                        title="Fetch">

                </Button>



                <Button onPress={()=> this.props.navigation.navigate("Snap", 
                                                      {title: 'Snap'})} 
                        title="Camera">

                </Button>


                <Button onPress={()=> this.props.navigation.navigate("CameraRollView", {title: 'Camera Roll'})} 
                        title="Camera Roll">

                </Button>
   

                <Button onPress={()=> this.props.navigation.navigate("FileSys", {title: 'FileSystem'})} 
                        title="File System">

                </Button>



                <Button onPress={()=> this.showEnv()} 
                        title="Env Var">

                </Button>

{/* 
                <Button onPress={()=> this.props.navigation.navigate("NativeCall", {title: 'NativeCall'})} 
                        title="Native Call">

                </Button>
    */}
   
                
  
                
            </View>
        )
    }
}

const FeatureStackNav = StackNavigator({
    Main: {
        screen: NativeFeature,
    },
 

    Inputs: {
        screen: Inputs
    },

    UrlLink: {
        screen : UrlLink
    }
    ,

    GeoLoc : {
        screen: GeoLoc
    },

    Storage: {
        screen : Storage
    },
    
    Snap: {
        screen: Snap
    },


    CameraRollView: {
        screen: CameraRollView
    },

    FileSys: {
        screen: FileSys
    },

    // NativeCall: {
    //     screen: NativeCall
    // }
 
})

export default FeatureStackNav;