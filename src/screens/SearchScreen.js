import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [searchInput, setInput] = useState("");
  const [searchApi, results, error] = useResults();

  const filterResultsByPrice = price => {
    //price==='$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };
  return (
    <>
      <SearchBar
        searchInput={searchInput}
        onInputChange={setInput}
        onInputSubmit={() => searchApi(searchInput)}
      />
      {error ? <Text>{error}</Text> : null}

      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title='Cost Effective'
        />
        <ResultsList results={filterResultsByPrice("$$")} title='Bit Pricier' />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title='Big Spender'
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
