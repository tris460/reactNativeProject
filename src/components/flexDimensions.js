import React from 'react';
import { View } from 'react-native';

const FlexDimensionsBasics = () => {
  return (
    // Try removing the `flex: 1` on the parent View.
    // The parent will not have dimensions, so the children can't expand.
    // What if you add `height: 300` instead of `flex: 1`?
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#A30A9A' }} />
      <View style={{ flex: 2, backgroundColor: '#A549AA' }} />
      <View style={{ flex: 3, backgroundColor: '#A97FBB' }} />
    </View>
  );
};

export default FlexDimensionsBasics;