import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {times} from './timeCounts';
import CharKit from './charKit';

const textViews = ['Вероятность дождя', 'Вероятность снега'];

const CardTwo = () => {
  return (
    <View style={styles.cardViewTwo}>
      <View style={styles.viewOne}>
        <Text style={styles.hours}>24 часа спустя</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.viewTwo}>
        {times.map(({time, iconName, iconNameSmall, degree}) => {
          return (
            <>
              <View>
                <View style={styles.box}>
                  <Text style={styles.timeCount}>{time}</Text>
                </View>
                <View style={styles.box}>
                  <Icon name={iconName} size={30} color={'white'} />
                </View>
                <View style={styles.boxTwo}>
                  <Icon name={iconNameSmall} size={16} color={'white'} />
                  <Text style={styles.perText}>{degree}</Text>
                </View>
              </View>
            </>
          );
        })}
      </ScrollView>
      <View style={styles.viewThree}>
        <View>
          <Text>hgjhg</Text>
        </View>
      </View>
      <View style={styles.viewFour}>
        {textViews.map(text => {
          return (
            <>
              <View style={styles.row}>
                <Icon name="umbrella" size={12} color={'white'} />
                <Text style={styles.texts}>{text}</Text>
              </View>
            </>
          );
        })}
        <TouchableOpacity style={styles.rowThree}>
          <Text style={styles.more}>Подробнее</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardTwo;
