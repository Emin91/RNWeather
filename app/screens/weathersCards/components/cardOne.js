import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../style';

const CardOne = () => {
  const [currentTime, setCurrentTime] = useState(null);

  const date = new Date().getDay();
  const getCurrentTime = () => {
    let hour = new Date().getHours();
    let minutes = new Date().getMinutes();

    setCurrentTime(hour + ':' + minutes);
  };

  useEffect(() => {
    setInterval(() => {
      getCurrentTime();
    });
  }, 1000);

  return (
    <View style={styles.cardView}>
      <View style={styles.containerOne}>
        <View style={styles.timeView}>
          <View style={styles.date}>
            <Text style={styles.dateText}>пт {date} мар. 2020 г.</Text>
          </View>
          <View style={styles.time}>
            <Text style={styles.timeText}>{currentTime}</Text>
          </View>
        </View>
        <View style={styles.degreView}>
          <Text style={styles.degreText}>10</Text>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconView}>
            <Image
              style={styles.icon}
              resizeMode={'center'}
              source={require('../../../assets/img/cloud.png')}
            />
          </View>
          <View style={styles.iconTitleView}>
            <Text style={styles.iconTitle}>Облачно</Text>
          </View>
        </View>
      </View>
      <View style={styles.containerTwo}>
        <View style={styles.latiudeView}>
          <Text style={styles.texts}>Макс: 17 Мин: 9</Text>
        </View>
        <View style={styles.windView}>
          <Text style={styles.texts}>Ветер: Юг Юго-Запад 6 км/ч</Text>
        </View>
      </View>
    </View>
  );
};

export default CardOne;
