import React, {Component} from "react";

import {View, Text, Button, Alert} from "react-native";
import {Platform} from "react-native";

var RNFS = require('react-native-fs');


export default class FileSys extends Component {
    static navigationOptions = {
        title: 'File System'    
    }

    constructor(props) {
        super(props);

        this.state = {
            content: ''
        }
    }

    componentDidMount() {
        
    }

    readFile() {
        let docDirectoryPath = Platform.OS == 'ios'? RNFS.MainBundlePath:RNFS.DocumentDirectoryPath;
        var path = docDirectoryPath + '/test.txt';

        RNFS.readFile(path, 'utf8')
        .then((contents) => {
            // log the file contents
            console.log(contents);
            Alert.alert(contents);
          })
        .catch (error => {
            Alert.alert("could not read file");
            console.log(error);
        });
    }

    checkFile() {
        let docDirectoryPath = Platform.OS == 'ios'? RNFS.MainBundlePath:RNFS.DocumentDirectoryPath;
        var path = docDirectoryPath + '/test.txt';

        RNFS.stat(path)
        .then((statResult) => {
            if (statResult.isFile()) {
                Alert.alert("File test exist")
            }
        })
        .catch ( error => {
            Alert.alert("test file does not exist");
        });
    }

    writeFile() {
        // create a path you want to write to

        let docDirectoryPath = Platform.OS == 'ios'? RNFS.MainBundlePath:RNFS.DocumentDirectoryPath;


        var path = docDirectoryPath + '/test.txt';

        // write the file
        RNFS.writeFile(path, '{"counter": 1}', 'utf8')
        .then((success) => {
            console.log('FILE WRITTEN!');
            Alert.alert("Written file");
        })
        .catch((err) => {
            Alert.alert("Error could not write file");
            console.log(err.message);
        });

    }
  
    render() {
        return (
            <View>
                <Text>{this.state.url}</Text>



                <Button onPress={()=> this.checkFile()} 
                        title="Check File">
                </Button>



                <Button onPress={()=> this.writeFile()} 
                        title="Write File">
                </Button>

                <Button onPress={()=> this.readFile()} 
                        title="Read File">
                </Button>




 
            </View>
        )
    }
}