import React, {Component} from 'react';
import {
  View,
  TouchableHighlight,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {FAKE_GAME_TAB} from '../helpers/HelpersTab';

import {connect} from 'react-redux';
import ScoreItem from './ScoreItem';

class CheckScore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {}

  render() {
    const idMatch = this.props.route.params;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.matchTitle}>
          <View style={styles.victory}>
            <Text style={styles.textScore}>{idMatch.victoryP1}</Text>
          </View>
          <View style={styles.match}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
              }}>{`${idMatch.player1}`}</Text>
          </View>
          <View style={styles.victory}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
              }}>{`|`}</Text>
          </View>
          <View style={styles.match}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
              }}>{`${idMatch.player2}`}</Text>
          </View>
          <View style={styles.victory}>
            <Text style={styles.textScore}>{idMatch.victoryP2}</Text>
          </View>
        </View>
        <View style={{flex: 11}}>
          <FlatList
            //data={idMatch.paramsMatch}
            data={idMatch.paramsMatch.sort(function (a, b) {
              return new Date(b.dateGame) - new Date(a.dateGame);
            })}
            renderItem={({item}) => <ScoreItem score={item} />}
            //keyExtractor={(item) => item.idGame}
            //   extraData={selected}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
  },
  textButton: {
    color: '#fbe899',
    fontSize: 16,
    fontWeight: 'bold',
  },
  matchTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  match: {
    flex: 3,
    alignItems: 'center',
  },
  victory: {
    flex: 1,
    alignItems: 'center',
  },
  textScore: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#518668',
  },
  baseText: {
    fontSize: 28,
    marginBottom: 50,
    marginTop: 25,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#518668',
    padding: 10,
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
  },
});

const mapStateToProps = (state) => {
  return {
    gameSaved: state.gameSaved,
  };
};
export default connect(mapStateToProps)(CheckScore);
