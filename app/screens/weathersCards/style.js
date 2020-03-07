import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imgBg: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    flex: 1,
    padding: 5,
  },
  cardView: {
    width: '100%',
    height: 200,
    borderRadius: 6,
    paddingBottom: 5,
    marginBottom: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  containerOne: {
    flex: 0.8,
    flexDirection: 'row',
  },
  timeView: {
    flex: 0.5,
  },
  date: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  dateText: {
    fontSize: 18,
    color: 'white',
  },
  time: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 50,
    color: 'white',
  },
  degreView: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  degreText: {
    fontSize: 70,
    color: 'white',
  },
  iconContainer: {
    flex: 0.2,
  },
  iconView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    width: '80%',
    height: '80%',
  },
  iconTitleView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconTitle: {
    fontSize: 15,
    color: 'white',
  },
  containerTwo: {
    flex: 0.2,
  },
  latiudeView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  windView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  texts: {
    fontSize: 15,
    color: 'white',
  },

  //Card two

  cardViewTwo: {
    width: '100%',
    height: 280,
    borderRadius: 6,
    paddingTop: 5,
    paddingBottom: 5,
    marginBottom: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  viewOne: {
    flex: 0.1,
    paddingRight: 8,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  hours: {
    fontSize: 15,
    color: 'white',
  },
  viewTwo: {
    flex: 0.1,
    // flexDirection: 'row',
  },
  box: {
    width: 50,
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxTwo: {
    width: 50,
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  timeCount: {
    fontSize: 15,
    color: 'white',
  },
  perText: {
    fontSize: 15,
    color: 'orange',
  },
  viewThree: {
    flex: 0.65,
    backgroundColor: '#345',
  },
  viewFour: {
    flex: 0.15,
    flexDirection: 'row',
    paddingBottom: 5,
  },
  row: {
    flex: 0.35,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
  },
  texts: {
    fontSize: 10,
    color: 'white',
  },
  rowThree: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  more: {
    fontSize: 15,
    color: 'orange',
  },
});

export default styles;
