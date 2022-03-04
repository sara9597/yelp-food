import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ searchInput, onInputChange, onInputSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name='search' style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder='Search'
        value={searchInput}
        onChangeText={onInputChange}
        autoCapitalize='none'
        autoCorrect={false}
        onEndEditing={onInputSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#f0eeee",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 10
  },
  inputStyle: {
    flex: 1,
    fontSize: 18 // po defaultu 14
  },
  iconStyle: {
    fontSize: 35,
    color: "black",
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchBar;
