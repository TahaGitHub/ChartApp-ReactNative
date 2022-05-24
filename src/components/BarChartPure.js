import React from 'react';

import {StyleSheet, Dimensions} from 'react-native';

import {BarChart} from 'react-native-chart-kit';
import {RandomContorller} from '../helps/RandomContorller';

function BarChartPure(props) {
  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientFromOpacity: '#655757',
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(255, 5, 5, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const data_bar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [
          RandomContorller(),
          RandomContorller(),
          RandomContorller(),
          RandomContorller(),
          RandomContorller(),
          RandomContorller(),
        ],
      },
    ],
  };

  return (
    <BarChart
      style={styles.chart}
      data={data_bar}
      width={Dimensions.get('window').width / 1.05}
      height={220}
      yAxisLabel="$"
      chartConfig={chartConfig}
      verticalLabelRotation={30}
    />
  );
}

const styles = StyleSheet.create({
  chart: {
    margin: 8,
    borderRadius: 16,
  },
});

export default React.memo(BarChartPure);
