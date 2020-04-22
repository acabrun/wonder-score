import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Modal,
} from 'react-native';
import {connect} from 'react-redux';
import moment from 'moment';

class ModalViewWinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saveConfirm: false,
    };
  }

  handleHide() {
    this.props.onHide(false);
  }

  // Set database and dispatch it to reducer
  _saveGame = () => {
    const GAME_TAB = {
      idMatch: this.state.idMatch,
      player1NameMatch: this.props.player1,
      player2NameMatch: this.props.player2,
      paramsMatch: [
        {
          idGame: this.state.idGame,
          dateGame: moment().format('DD-MM-YYYY'),
          scoreGame: this.props.score,
          winNameGame: this.props.winner,
        },
      ],
    };

    const action = {type: 'ADD_GAME', value: GAME_TAB};
    this.props.dispatch(action);
    this.setState({saveConfirm: true});
  };

  // _setIdMatch = () => {
  //   // Continue existing match
  //   if (!this.props.isNewMatch) {
  //     this.setState(
  //       {
  //         idMatch: this.props.idMatch,
  //         idGame:
  //           this.props.gameSaved[this.props.idMatch - 1].paramsMatch[
  //             this.props.gameSaved[this.props.idMatch - 1].paramsMatch.length -
  //               1
  //           ].idGame + 1,
  //       },
  //       () => this._saveGame(),
  //     );
  //   } else {
  //     // Create new match
  //     // First match
  //     if (this.props.gameSaved.join() === [].join()) {
  //       this.setState({idMatch: 1, idGame: 1}, () => this._saveGame());
  //     }
  //     // Another match exist
  //     else {
  //       this.setState(
  //         {
  //           idMatch:
  //             this.props.gameSaved[this.props.gameSaved.length - 1].idMatch + 1,
  //           idGame: 1,
  //         },
  //         () => this._saveGame(),
  //       );
  //     }
  //   }
  //   this.props.onSave();
  // };

  // For 2 players only
  _setIdMatch = () => {
    // Continue existing match
    if (this.props.gameSaved.join() === [].join()) {
      this.setState({idMatch: 1, idGame: 1}, () => this._saveGame());
    } else {
      this.setState(
        {
          idMatch: this.props.idMatch,
          idGame:
            this.props.gameSaved[this.props.idMatch - 1].paramsMatch[
              this.props.gameSaved[this.props.idMatch - 1].paramsMatch.length -
                1
            ].idGame + 1,
        },
        () => this._saveGame(),
      );
    }
    this.props.onSave();
  };

  componentDidUpdate() {
    //console.log(this.props.gameSaved);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={true}
          onRequestClose={() => {
            this.handleHide();
          }}>
          {/* ----------------------- SAVE GAME CONFIRM TEXT------------------------ */}
          {this.state.saveConfirm ? (
            <View
              style={{
                backgroundColor: '#518668c9',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#fbe899'}}>
                Game saved !
              </Text>
            </View>
          ) : null}

          <View style={styles.container}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {this.props.winner == 'Draw game' ? (
                <Text style={styles.baseText}>{this.props.winner} !</Text>
              ) : (
                <Text style={styles.baseText}>{this.props.winner} wins !</Text>
              )}
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableHighlight
                style={styles.button}
                underlayColor="#fbe899"
                onPress={() => this.handleHide()}>
                <Text style={styles.textButton}>OK</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                underlayColor="#fbe899"
                onPress={() => this._setIdMatch()}>
                <Text style={styles.textButton}>Save</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 14,
    backgroundColor: '#518668',
  },
  baseText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fbe899',
    textAlign: 'center'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#518668',
    padding: 10,
    margin: 10,
    borderRadius: 50,
    width: 250,
    borderWidth: 2.5,
    borderColor: '#fbe899',
  },
  textButton: {
    color: '#fbe899',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// -------------STORE CONNEXION--------------
const mapStateToProps = (state) => {
  return {
    gameSaved: state.gameSaved,
  };
};
export default connect(mapStateToProps)(ModalViewWinner);
