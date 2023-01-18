import React, {useState,useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableHighlight,
    TouchableOpacity,
    TextInput,
    Button,
    Alert,
    FlatList,
    RefreshControl,
  } from 'react-native';
import {useNavigation,useRoute} from "@react-navigation/native";

const data=[  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    "userId": 1,
    "id": 5,
    "title": "nesciunt quas odio",
    "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    "userId": 1,
    "id": 6,
    "title": "dolorem eum magni eos aperiam quia",
    "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },]
  
  const ColoredView=(props)=>{
    return(
      <View style={{flex:1,backgroundColor:props.backgroundColor,}}>
        <Text>{props.text}</Text>
      </View>
      )
  }


export default  KarisikOrnekScreen=()=>{
    const navigation=useNavigation()
    const route=useRoute()

    const [text,setText]=useState("")
    const[count,setCount]=useState(0)
    const [refreshing,setRefreshing]=useState(false)
    const _onRefresh=()=>{
      setRefreshing(true)
      setTimeout(
        ()=>{
          setRefreshing(false)
        },2000
      );
    }
  
    const fetchdata=()=>{
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    };
   useEffect(()=>{
    console.log("useEffect Güncelle",count)
   })





    return(

    <SafeAreaView style={styles.background}>
    <ScrollView>
    {/* <View style={{flex:1,backgroundColor:'orange'}}>
            <Text> KarisikOrnek Sayfasına Hoşgeldin</Text>
            <Button title="Go Back!" onPress={navigation.goBack()}/>
        </View> */}
     <Text onPress={()=>console.log("hello sino")}>Hello World sinem  </Text>
     <Text numberOfLines={2}> lorem ipsum dolar sit amet 
     <Text style={{color:'red',fontWeight:'bold'}}>lorem ipsum dolar sit amet </Text>
     lorem ipsum dolar sit amet 
     {"\n"}
     lorem ipsum dolar sit amet lorem ipsum dolar sit amet
     </Text>

     <TouchableOpacity onPress={()=>console.log("pressed!")}>
     <Image source={{uri:"https://fotolifeakademi.com/uploads/2021/01/fotografta-kompozisyon-olusturmak.jpg",
    width:100,
    height:100,
    resizeMode:'stretch'}}/>
    </TouchableOpacity>

    <TouchableHighlight onPress={()=>console.log("pressed!")}>
    <View style={{width:'100%', height:75,backgroundColor:'cyan'}}/>
    </TouchableHighlight>

    <TouchableOpacity onPress={()=>console.log("pressed!")}>
    <View style={{width:'100%', height:75,backgroundColor:'green'}}/>
    </TouchableOpacity>

    <TextInput 
    style={{width:200,height:50,borderWidth:1,padding:7,}}
    placeholder='şifre gir'
    value={text}
    onChangeText={setText}
    // secureTextEntry={true}
    />
    <Text>TExt:{text}</Text>
    <Button
    title='Press me!'
    onPress={()=>Alert.alert("Hello"+text,"Nasılsın kanka iyi misin?",
    [
      {text:"İyiyim", onPress:()=>console.log("İyiyim")},
      {text:"Çook İyiyimm", onPress:()=>console.log("Çook İyiyim!")}

    ])}
    />
    {/* <ScrollView>
      {
        data.map(item=>
        <Text style={{fontSize:30,borderWidth:1,borderColor:'brown',margin:10}}>
          {item.title}
          </Text>)
      }
    </ScrollView> */}
    <FlatList
    data={data}
    renderItem={({item})=>
    <Text style={{fontSize:25,fontWeight:'bold',borderWidth:1,borderColor:'yellow',marginVertical:10}}>
{item.title}
    </Text>
  }
  keyExtractor={item=>item.id} 
  // keyextractor item idsini key olarak verdim performan açısından
  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh}/>}
  />



  <ColoredView backgroundColor={"purple"} text="Hello"/>
  <ColoredView backgroundColor={"yellow"} text="sino"/>
  <ColoredView backgroundColor={"orange"} />


<Text style={{color:'black'}}>Count:{count}</Text>
<Button title="UP" onPress={()=> setCount(count+1)}/>
<Text>api</Text>
<Button title="api" onPress={fetchdata}/>
  </ScrollView>


    </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      backgroundColor: 'pink',
      // justifyContent:'center',
      // alignItems:'center',
    },
  
  });
  