import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions,ImageBackground, Alert } from "react-native";
import {Button} from "react-native-paper";

const height = Dimensions.get("window").height;


const packageDetails=(props) =>{
const{_id,name,description,price,rate,picture}=props.route.params.item


const deletePackage = ()=>{
  fetch("http://10.0.2.2:3000/hotelPackage/delete/",{
    method:"delete",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
     id:_id,
    })
  })

.then(res=>res.json())
.then(deletedPackage=>{
  Alert.alert(`${deletedPackage.name} deleted`)
})
.catch(err=>{
  Alert.alert("something went wrong")
})
}

    return(
        <View style={styles.container}>
             <ImageBackground
             source={{uri:picture}}
             style={styles.backgroundImage}
             >
            </ImageBackground>
        
            <View style={styles.titleWrapper}>
                <Text style={styles.itemTitle}>{name}</Text>
                <View style={styles.locationWrapper}>
                    <Text style={styles.locationText}>{description}</Text>
                </View>
            </View>
            <View style={styles.infoWrapper}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>PRICE</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{price}</Text>
              <Text style={styles.infoSubText}> /person</Text>
            </View>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>RATING</Text>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoText}>{rate}</Text>
              <Text style={styles.infoSubText}> /5</Text>
            </View>
          </View>
        </View>
        <View style = {{flexDirection:"row",justifyContent:"space-around",padding:50}}>
            <Button
            icon="account-edit"
            mode="contained"
            theme={theme}
            onPress={() => console.log('pressed')}
            >
              Edit  
            </Button>
            <Button
            icon="delete"
            mode="contained"
            theme={theme}
            onPress={() => deletePackage()}
            >
              Delete  
            </Button>

        </View>

        </View>
    )

}
const theme = {
    colors:{
        primary:'#003580'
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
     
    },
    backgroundImage: {
        height: height * 0.4,
    },
    titleWrapper: {
        marginHorizontal: 20,
        marginTop: 10,
      },
      itemTitle: {
        fontFamily: "Roboto",
        fontSize: 20,
        color: "#003580",
        fontWeight: "bold",
      },
      locationWrapper: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 5,
      },
      locationText: {
        fontFamily: "Roboto",
        fontSize: 16,
        color:"#5B6768",
      },
      infoWrapper: {
        marginTop: 20,
        marginLeft: 40,
        marginRight: 40,
        flexDirection: "row",
        marginHorizontal: 20,
        justifyContent: "space-between",
      },
      infoItem: {},
      infoTitle: {
        fontFamily: "Roboto",
        fontSize: 12,
        color:"#5B6768",
      },
      infoTextWrapper: {
        flexDirection: "row",
        alignItems: "flex-end",
        marginTop: 5,
      },
      infoText: {
        fontFamily: "Roboto",
        fontSize: 24,
        fontWeight: "bold",
        color: "#003580",
      },
      infoSubText: {
        fontFamily: "Roboto",
        fontSize: 14,
        color: "#5B6768",
      },
})
 export default packageDetails

