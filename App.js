/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import LineChartPure from './src/components/LineChartPure';
import ProgressChartPure from './src/components/ProgressChartPure';
import BarChartPure from './src/components/BarChartPure';
import PieChartPure from './src/components/PieChartPure';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [reset, setreset] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    height: '100%',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Text style={styles.mainText}>Chart App</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            },
          ]}>
          <View>
            <Text style={styles.chartTitleText}>Line Chart</Text>
            <LineChartPure reset={reset} />
          </View>

          <View style={styles.chartView}>
            <Text style={styles.chartTitleText}>Progress Chart</Text>
            <ProgressChartPure reset={reset} />
          </View>

          <View style={styles.chartView}>
            <Text style={styles.chartTitleText}>Bar Chart</Text>
            <BarChartPure reset={reset} />
          </View>

          <View style={styles.chartView}>
            <Text style={styles.chartTitleText}>Pie Chart</Text>
            <PieChartPure reset={reset} />
          </View>
        </View>
      </ScrollView>

      <Button onPress={() => setreset(e => !e)} title="Reset" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainText: {
    textAlign: 'center',
    marginVertical: 25,
    fontSize: 25,
    fontWeight: 'bold',
  },
  chartTitleText: {
    marginHorizontal: '5%',
    fontWeight: '500',
  },
  chartView: {
    marginTop: 30,
  },
});

export default App;
