import{ BarChart } from 'react-native-chart-kit'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'


const {width : WIDTH} = Dimensions.get('window');

export default function Bar() {
  return(
        <BarChart
        data={{
          labels: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez',
          ],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43, 54, 1, 36, 54, 96, 0],
            },
          ],
        }}
        width={WIDTH}
        height={200}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
    />

  );

}