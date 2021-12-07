import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Flex = () => {
  return (
    <View style={[styles.container, {
      // Try setting `flexDirection` to `"row"`.
      flexDirection: "row"
    }]}>
      <View style={{ flex: 2, backgroundColor: '#A30A9A' }} />
      <View style={{ flex: 2, backgroundColor: '#A549AA' }} />
      <View style={{ flex: 3, backgroundColor: '#A97FBB' }} />
      <View style={{ flex: 3, backgroundColor:  '#A91CAA'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;