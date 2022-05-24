import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';

import {PieChart} from 'react-native-chart-kit';
import {RandomContorller} from '../helps/RandomContorller';

function PieChartPure(props) {
  const chartConfig = {
    backgroundGradientFrom: '#000',
    backgroundGradientFromOpacity: '#655757',
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 5, 5, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data_pie = [
    {
      name: 'Seoul',
      population: RandomContorller(5000),
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Toronto',
      population: RandomContorller(5000),
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Beijing',
      population: RandomContorller(5000),
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'New York',
      population: RandomContorller(5000),
      color: '#C836C3',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Moscow',
      population: RandomContorller(5000),
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];

  return (
    <PieChart
      style={styles.chart}
      data={data_pie}
      width={Dimensions.get('window').width}
      height={220}
      chartConfig={chartConfig}
      accessor={'population'}
      backgroundColor={'transparent'}
      paddingLeft={'3'}
      // center={[10, 50]}
      // absolute
    />
  );
}

const styles = StyleSheet.create({
  chart: {
    margin: 8,
    borderRadius: 16,
  },
});

export default React.memo(PieChartPure);
