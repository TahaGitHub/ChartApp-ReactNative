import React, {useState, useCallback} from 'react';

import {StyleSheet, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import CheckBox from '@react-native-community/checkbox';

function LineChartPure(props) {
  const [isBezier, setisBezier] = useState(true);

  function onChangeIsBezier() {
    setisBezier(e => !e);
  }
  const onChangeIsBeziercallBack = useCallback(onChangeIsBezier, []);

  return (
    <>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier={isBezier}
        style={styles.chart}
      />
      <CheckBox
        value={isBezier}
        onValueChange={onChangeIsBeziercallBack}
        style={styles.checkbox}
      />
    </>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: 'center',
  },
});

export default React.memo(LineChartPure);
