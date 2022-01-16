import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [results, error, searchApi] = useResults();

   const filterResultsByPrice = (price) => {
      return results.filter(result => {
         return result.price === price
      })
   };

   return (
      <View style={styles.container}>
         <SearchBar
            term={term}
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
         />
         {
            error ?
               <Text>{error}</Text> :
               <ScrollView>
                  <ResultsList results={filterResultsByPrice(undefined)} title="Not Depended on Price" />
                  <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                  <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricer" />
                  <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
                  <ResultsList results={filterResultsByPrice('$$$$')} title="Make Pocket Empty" />
               </ScrollView>
         }
      </View>
   )
}

export default SearchScreen

const styles = StyleSheet.create({
   container: {
      backgroundColor: "white",
      flex: 1
   }
})
