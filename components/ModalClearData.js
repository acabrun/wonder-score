import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Modal} from 'react-native';
import {connect} from 'react-redux';

class ModalClearData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataCleared: false,
    };
  }

  handleHide() {
    this.props.onHide(false);
  }

  // Set database and dispatch it to reducer
  _clearData = () => {
    const action = {type: 'CLEAR_DATA', value: []};
    this.props.dispatch(action);
    this.setState({dataCleared: true});
  };


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
          {this.state.dataCleared ? (
            <View
              style={{
                backgroundColor: '#518668c9',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{fontSize: 18, fontWeight: 'bold', color: '#fbe899'}}>
                Data Cleared !
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
              <Text style={styles.baseText}>
                Do you really want to clear all data ?
              </Text>
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
                <Text style={styles.textButton}>Close</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.button}
                underlayColor="#fbe899"
                onPress={() => this._clearData()}>
                <Text style={styles.textButton}>Clear</Text>
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
    textAlign: 'center',
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
export default connect(mapStateToProps)(ModalClearData);
