import{ LineChart} from 'react-native-chart-kit'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

const {width : WIDTH} = Dimensions.get('window');

export default function Line() {
  const data= { 
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        data: [
          13,
          40,
          1,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100
        ],
      },
    ],
  }

  const config = {
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 255) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }
  return (
      <LineChart 
      data={data}
      width={WIDTH} // from react-native
      height={220}
      chartConfig={config}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
      ></LineChart>
  );
}