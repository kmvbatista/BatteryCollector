import{ BarChart } from 'react-native-chart-kit'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'


const {width : WIDTH} = Dimensions.get('window');

export default function Bar(props) {
  return(
        <BarChart
        data={{
          labels: [
            'Semana 1',
            'Semana 2',
            'Semana 3',
            'Semana 4',
          ],
          datasets: [
            {
              data: props.data,
            },
          ],
        }}
        width={WIDTH-20}
        height={200}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefe0',
          yAxisLabel: 'Pontos',
          color: (opacity = 0.7) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
    />

  );

}