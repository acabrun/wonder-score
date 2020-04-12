import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class ScoreItem extends React.Component {
  render() {
    const score = this.props.score;
    console.log(score);
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1, }}>
            <Text> {`Date: ${score.dateGame}`} </Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text> {`Winner: ${score.winNameGame}`} </Text>
          </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>
            {' '}
            {`${score.scoreGame[0]} - ${score.scoreGame[1]}`}{' '}
          </Text>
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
    borderWidth: 2
  },
});

export default ScoreItem;
