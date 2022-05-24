import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';

import {ProgressChart} from 'react-native-chart-kit';
import {RandomContorller} from '../helps/RandomContorller';

function ProgressChartPure(props) {
  const chartConfig = {
    backgroundGradientFrom: '#000',
    backgroundGradientFromOpacity: '#655757',
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data_progress = {
    labels: ['Swim', 'Bike', 'Run'], // optional
    data: [
      RandomContorller(0.99),
      RandomContorller(0.99),
      RandomContorller(0.99),
    ],
  };

  return (
    <ProgressChart
      style={styles.chart}
      data={data_progress}
      width={Dimensions.get('window').width}
      height={220}
      strokeWidth={16}
      radius={32}
      chartConfig={chartConfig}
      hideLegend={false}
    />
  );
}

const styles = StyleSheet.create({
  chart: {
    margin: 8,
    borderRadius: 16,
  },
});

export default React.memo(ProgressChartPure);
