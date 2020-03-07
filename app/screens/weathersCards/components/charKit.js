import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {times} from './timeCounts';

const CharKit = () => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View>
      <LineChart
        bezier
        height={100}
        fromZero={true}
        yAxisInterval={0.3}
        withInnerLines={false}
        withOuterLines={false}
        withVerticalLabels={false}
        withHorizontalLabels={false}
        onDataPointClick={data => alert(data.value)}
        width={screenWidth * 4 + 70}
        data={{
          datasets: [
            {
              data: times.map(({degree}) => degree),
            },
          ],
        }}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          color: () => `orange`,
          propsForDots: {
            r: '3',
            strokeWidth: '0',
            stroke: '#ffa726',
          },
        }}
      />
    </View>
  );
};

export default CharKit;
