import React from 'react';
import {ScrollView, ImageBackground} from 'react-native';
import styles from './style';
import CardOne from './components/cardOne';
import CardTwo from './components/cardTwo';

const WeathersCards = () => {
  return (
    <ImageBackground
      source={require('../../assets/img/bg1.jpg')}
      blurRadius={4}
      style={styles.imgBg}>
      <ScrollView style={styles.scrollView}>
        <CardOne />
        <CardTwo />
      </ScrollView>
    </ImageBackground>
  );
};

export default WeathersCards;
