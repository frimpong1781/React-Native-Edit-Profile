import React, { Component } from "react";
import {
     Text,
     View,
     StyleSheet,
     Button,
     TextInput,
     Image,
     Alert,
     TouchableOpacity,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

class App extends Component {
     constructor(props) {
          super(props);

          this.state = {
               school: "St. Peters International School",
               emailAddress: "frimpong1781@yahoo.com",
               name: "Benjamin Owusu Kwame",
               nickname: "vasbee",
               contact: "+233 244879654",
          };
     }

     render() {
          return (
               <View style={styles.container}>
                    <View style={styles.headWrapper}>
                         <Text style={styles.profileText}>Edit Profile</Text>
                    </View>
                    <View>
                         <Image
                              source={require("./assets/kwame.jpg")}
                              style={styles.image}
                         />
                         <View style={styles.cameraWrapper}>
                              <AntDesign
                                   style={styles.camera}
                                   name='camera'
                                   size={24}
                                   color='black'
                              />
                         </View>
                    </View>

                    <View style={styles.form}>
                         <View style={styles.inputView}>
                              <Text style={styles.label}>School</Text>
                              <TextInput
                                   style={styles.textInput}
                                   value={this.state.school}
                              />
                         </View>
                    </View>

                    <View style={styles.inputView}>
                         <Text style={styles.label}>Email Address</Text>
                         <TextInput
                              style={styles.textInput}
                              autoCapitalize='none'
                              value={this.state.emailAddress}
                         />
                    </View>

                    <View style={styles.inputView}>
                         <Text style={styles.activeLabel}>Name</Text>
                         <TextInput
                              style={styles.textInput}
                              value={this.state.name}
                         />
                    </View>

                    <View style={styles.inputView}>
                         <Text style={styles.activeLabel}>Nickname</Text>
                         <TextInput
                              style={styles.textInput}
                              value={this.state.nickname}
                         />
                    </View>

                    <View style={styles.inputView}>
                         <Text style={styles.activeLabel}>
                              Emergency Contact
                         </Text>
                         <View style={styles.iconInput}>
                              <TextInput
                                   style={styles.textInput}
                                   value={this.state.contact}
                              />
                         </View>
                    </View>

                    <View style={styles.buttonContainer}>
                         <TouchableOpacity
                              style={styles.button}
                              onPress={() =>
                                   Alert.alert("Update function not coded yet")
                              }
                         >
                              <Text style={styles.buttonText}>
                                   UPDATE PROFILE
                              </Text>
                         </TouchableOpacity>
                    </View>
               </View>
          );
     }
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          // display: "flex",
          backgroundColor: "#fff",
     },

     headWrapper: {
          flex: 0.5,
          marginVertical: 20,
          borderBottomWidth: 3,
          borderBottomColor: "silver",
     },

     profileText: {
          textAlign: "center",
          fontSize: 15,
          fontWeight: "normal",
     },

     image: {
          marginTop: 30,
          height: 150,
          width: 150,
          marginBottom: 15,
          alignSelf: "center",
          borderRadius: 75,
     },

     detailContainer: {
          flexDirection: "column",
          marginVertical: 5,
     },

     label: {
          color: "silver",
          paddingHorizontal: 10,
     },

     activeLabel: {
          color: "#79A9FF",
          paddingHorizontal: 10,
     },

     textInput: {
          paddingVertical: 5,
          fontSize: 18,
          paddingHorizontal: 10,
     },

     inputView: {
          marginVertical: 5,
          borderBottomWidth: 1,
          borderBottomColor: "#D3D3D3",
     },

     buttonContainer: {},

     button: {
          marginTop: 10,
          marginHorizontal: 30,
          // height: 50,
          padding: 15,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          backgroundColor: "#30B4E9",
     },
     buttonText: {
          color: "red",
          fontSize: 18,
     },
     cameraWrapper: {
          position: "absolute",
          top: 125,
          right: 110,
          width: 30,
          height: 30,
          backgroundColor: "#68BBE3",
          borderRadius: 100,
     },

     camera: {
          alignSelf: "center",
          margin: 5,
     },
});

export default App;
