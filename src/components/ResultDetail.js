import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ResultDetail = ({ result }) => {
   return (
      <View style={styles.viewStyle}>
         <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
         <Text style={styles.textStyle}>{result.name}</Text>
         <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
      </View>
   )
}

export default ResultDetail

const styles = StyleSheet.create({
   viewStyle: {
      marginLeft: 15
   },
   imageStyle: {
      width: 250,
      borderRadius: 10,
      height: 150,
      marginBottom: 5
   },
   textStyle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 3
   }
})
