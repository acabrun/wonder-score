import React, {Component} from 'react';
import {View, TouchableHighlight, StyleSheet, Text} from 'react-native';
import {FAKE_GAME_TAB} from '../helpers/HelpersTab';

import {connect} from 'react-redux';

class ContinueView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    
  }

  render() {
    const {isCheckingScore} = this.props.route.params;
    console.log(this.props.gameSaved);

    return (
      <View style={{flex: 1, backgroundColor: 'yellow'}}>
        {/* LOG */}
        <View
          style={{
            flex: 1.1,
            backgroundColor: 'white',
          }}>
          <View alignItems="center">
            {isCheckingScore ? (
              <Text style={styles.baseText}>Which match do you want to check ?</Text>
            ) : (
              <Text style={styles.baseText}>Choose game !</Text>
            )}
          </View>

          <View style={{flex:1, alignItems:"center"}} >
            {this.props.gameSaved
              ? Object.values(this.props.gameSaved).map((game) => (
                  <TouchableHighlight
                   // key={game.idMatch}
                    style={styles.button}
                    underlayColor="#fbe899"
                    backgroundColor="green"
                    onPress={
                      isCheckingScore
                        ? () => {
                            this.props.navigation.navigate('CheckScore', {
                              paramsMatch: game.paramsMatch,
                              player1: game.player1NameMatch,
                              player2: game.player2NameMatch,
                              idMatch: game.idMatch,
                            });
                          }
                        : () => {
                            this.props.navigation.navigate('Score', {
                              paramsMatch: game.paramsMatch,
                              player1: game.player1NameMatch,
                              player2: game.player2NameMatch,
                              idMatch: game.idMatch,
                              // idGame: game.paramsMatch[0].idGame,
                              isNewMatch: false,
                            });
                          }
                    }>
                    <Text style={styles.textButton}>
                      {game.player1NameMatch} Vs {game.player2NameMatch}
                    </Text>
                  </TouchableHighlight>
                ))
              : null}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textButton: {
    color: '#fbe899',
    fontSize: 18,
    fontWeight: 'bold',
  },
  baseText: {
    fontSize: 28,
    marginBottom: 50,
    marginTop: 25,
    textAlign: "center"
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#518668',
    padding: 10,
    margin: 10,
    borderRadius: 50,
    width: 350,
    //borderWidth: 2,
  },
});

const mapStateToProps = (state) => {
  return {
    gameSaved: state.gameSaved,
  };
};
export default connect(mapStateToProps)(ContinueView);
