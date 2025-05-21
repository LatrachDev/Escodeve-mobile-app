import React from "react";
import { StyleSheet } from 'react-native';
import Svg, { Ellipse, Circle } from 'react-native-svg';

const TopRightSvg = () => {
  return (
    <Svg
      width={100}
      height={130}
      viewBox="0 0 59 89"
      fill="none"
      style={styles.TopSvg}
    >
      <Ellipse
        cx={42.5}
        cy={58.5}
        rx={35.5}
        ry={30.5}
        fill="#58BECA"
        fillOpacity={0.5}
      />
      <Circle cx={48.5} cy={27.5} r={48.5} fill="#58BECA" fillOpacity={0.5} />
    </Svg>
  );
};

const styles = StyleSheet.create({
  TopSvg: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default TopRightSvg;