import React,{useEffect,useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image,Modal,FlatList ,Alert} from "react-native";
import { Card ,FAB } from 'react-native-paper';

const packagesHotel = ({navigation})=>{
   
    const [data,setdata] = useState([])
    const [loading,setLoading]=useState(true)

    const fetchData= ()=>{
        fetch("http://10.0.2.2:3000/hotelPackage")
        .then(res=>res.json())
        .then(results=>{
            setdata(results)
            setLoading(false)
        }).catch(err=>{
            Alert.alert("something went wrong")
        })
    }

    useEffect(()=>{
        fetch
        fetchData()
    },[])

    const renderList = ((item)=>{
        return(
            <Card style={styles.mycard}
            onPress={() => navigation.navigate("packageDetails",{item })}
            >
            <View style={styles.cardView}>
            <Image
            style={{width:120,height:120, borderRadius:10}}
            source={{uri:item.picture}}
            />
            <View style={{marginLeft:10,marginRight:100}}>
            <Text style={styles.text} >
                {item.name}
            </Text>
            <Text numberOfLines={3} style={{ width: 250 }}  >
                {item.description}
            </Text>
            <Text  >
                {item.price}
            </Text>
            </View>
            </View>
        </Card>
        )
    })
    return(

        <View style={{flex:1}}>
            
            <FlatList
            data={data}
            renderItem={({item})=>{
               return renderList(item)
            }}
            keyExtractor={item=>item._id}
            onRefresh={() =>fetchData()}
            refreshing={loading}

        />

        
           
            <FAB
            style={styles.fab}
            small={false}
            theme={{colors:{accent:"#003580"}}}
            icon="plus"
            onPress={() => navigation.navigate("createPackage")}
  />
        </View>
    )
    
}
const styles = StyleSheet.create({
    mycard:{
        margin:5,
       
    },
    cardView:{
        flexDirection:"row",
        padding:5
    },
    text:{
        fontSize:15,
        
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },

})
export default packagesHotel