import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class ScoreItem extends React.Component {
  render() {
    const score = this.props.score;
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flex: 1}}>
            <Text style={{fontWeight: 'bold', textAlign: 'left'}}>
              {' '}
              {`${score.dateGame}`}{' '}
            </Text>
          </View>
          <View style={{flex: 2, alignItems: 'center', justifyContent: 'center'}}>
            {!score.vicMil && !score.vicSci ? (
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>
                {`${score.scoreGame[0]} - ${score.scoreGame[1]}`}
              </Text>
            ) : score.vicMil ? (
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#972a2a' }}>
                Military Victory
              </Text>
            ) : (
              <Text
                style={{fontWeight: 'bold', fontSize: 18, color: '#265c3a'}}>
                Scientific Victory
              </Text>
            )}
          </View>
          <View style={{flex: 1}}>
            <Text
              style={{fontWeight: 'bold', fontSize: 18, textAlign: 'right'}}>
              {' '}
              {`${score.winNameGame}`}{' '}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginBottom: 5,
    borderWidth: 3,
    borderColor: '#518668',
    height: 70,
    borderRadius: 10,
  },
});

export default ScoreItem;
