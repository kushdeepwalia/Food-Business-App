import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import yelp from '../api/yelp';

const ResultShowScreen = ({ navigation }) => {
   const id = navigation.getParam('id');
   const [result, setResult] = useState(null);

   console.log(result);

   const getResult = async (id) => {
      try {
         const response = await yelp.get(`/${id}`);
         console.log(response.data);
         setResult(response.data);
      }
      catch {
         console.log("Error");
      }
   }

   useEffect(() => {
      getResult(id);
   }, [])

   if (!result) {
      return null;
   }

   return (
      <>
         {
            result !== null ?
               <View>
                  <Text style={styles.textStyle}>{result.name}</Text>
                  <FlatList
                     data={result.photos}
                     keyExtractor={(photo) => photo}
                     renderItem={({ item }) => {
                        return <Image source={{ uri: item }} style={styles.imageStyle} />
                     }}
                  />
               </View> :
               null
         }
      </>
   );
}

export default ResultShowScreen

const styles = StyleSheet.create({
   imageStyle: {
      width: 300,
      height: 200,
      marginBottom: 10,
      alignSelf: "center"
   },
   textStyle: {
      alignSelf: "center",
      fontSize: 25,
      marginVertical: 10
   }
})
