import{ PieChart } from 'react-native-chart-kit'
import React from 'react'
import { Dimensions} from 'react-native'

const screenWidth = Dimensions.get('window').width;
export default function PieChartGraph(){
  const data = [
    { name: 'Pilha', population: 40, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Bateria', population: 30, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
    { name: 'Óleo', population: 20, color: 'black', legendFontColor: '#7F7F7F', legendFontSize: 15 },
   
  ]
  const chartConfig= {
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }
  return (
        <PieChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      accessor="population"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    />
  );
}

