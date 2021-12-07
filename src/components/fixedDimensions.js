import React from 'react';
import { View } from 'react-native';

const FixedDimensionsBasics = () => {
  return (
    <View>
      <View style={{
        width: 100, height: 50, backgroundColor: '#A30A9A'
      }} />
      <View style={{
        width: 60, height: 90, backgroundColor: '#A549AA'
      }} />
      <View style={{
        width: 150, height: 200, backgroundColor: '#A97FBB'
      }} />
    </View>
  );
};

export default FixedDimensionsBasics;