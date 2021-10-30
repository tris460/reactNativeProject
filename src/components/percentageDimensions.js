import React from 'react';
import { View } from 'react-native';

const PercentageDimensionsBasics = () => {
  // Try removing the `height: '100%'` on the parent View.
  // The parent will not have dimensions, so the children can't expand.
  return (
    <View style={{ height: '100%' }}>
      <View style={{
        height: '25%', backgroundColor: '#A30A9A'
      }} />
      <View style={{
        width: '40%', height: '15%', backgroundColor: '#A549AA'
      }} />
      <View style={{
        width: '20%', height: '50%', backgroundColor: '#A97FBB'
      }} />
    </View>
  );
};

export default PercentageDimensionsBasics;