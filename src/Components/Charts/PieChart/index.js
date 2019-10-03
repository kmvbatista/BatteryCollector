import{ PieChart } from 'react-native-chart-kit'
import React from 'react'
import { Dimensions} from 'react-native'

const screenWidth = Dimensions.get('window').width;
export default function PieChartGraph(props){
  const colors = ['#F00', 'black', 'rgba(131, 167, 234, 1)', '#fff', 'yellow']
  const getPieData = () => {
    let filteredData = props.data.map((el, index) => {
      return {
        name: el.key + '(s)',
        population: el.value,
        color: colors[index],
        legendFontColor: '#fff',
        legendFontSize: 17
      }
    });
    return filteredData;
  }
  const data = getPieData();
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

