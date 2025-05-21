import React from 'react';
import { StyleSheet } from 'react-native';
import Svg, { Ellipse, Circle } from 'react-native-svg';

const BottomLeftSvg = () => (
  <Svg
    width={109}
    height={83}
    viewBox="0 0 109 83"
    fill="none"
    style={styles.bottomShape}
  >
    <Ellipse
      cx={32.5}
      cy={58}
      rx={59.5}
      ry={58}
      fill="#58BECA"
      fillOpacity={0.5}
    />
    <Circle cx={64} cy={58} r={45} fill="#58BECA" fillOpacity={0.5} />
  </Svg>
);

const styles = StyleSheet.create({
  bottomShape: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});

export default BottomLeftSvg;
