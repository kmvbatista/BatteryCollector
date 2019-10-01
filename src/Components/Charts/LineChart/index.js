import{ LineChart} from 'react-native-chart-kit'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

const {width : WIDTH} = Dimensions.get('window');

export default function Line(props) {
  const data= { 
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [
      {
        data: props.data,
      },
    ],
  }

  const config = {
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
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