import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

   return (
      <View style={styles.searchBackground}>
         <Feather name='search' style={styles.iconStyle} />
         <TextInput
            value={term}
            onChangeText={onTermChange}
            placeholder='Search'
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.textInput}
            onEndEditing={onTermSubmit}
         />
      </View>
   )
}

export default SearchBar

const styles = StyleSheet.create({
   searchBackground: {
      backgroundColor: '#f0eeee',
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      marginTop: 15,
      marginBottom: 10,
      flexDirection: "row",
   },
   textInput: {
      flex: 1,
      fontSize: 18
   },
   iconStyle: {
      fontSize: 30,
      alignSelf: "center",
      marginHorizontal: 10
   }
})
