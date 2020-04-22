import React, {Component} from 'react';
import {View, TouchableHighlight, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import ModalClearData from './ModalClearData';

class StartView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clearData: false
    };
  }

  handleModal = () => {
    this.setState({ clearData: true })
  }

  handleOnHide = () => {
    this.setState({ clearData: false })
  }

  render() {
    return (
      <View style={styles.container} >

        {/* -------------------MODAL CLEAR DATA------------ */}
        {this.state.clearData ? <ModalClearData onHide={()=> this.handleOnHide()} /> : null }
        

        {/* -------------------CONTINUE-------------------- */}
        {/* ---    Display only if match exist      --- */}
        {this.props.gameSaved.join() === [].join() ? null : (
          <TouchableHighlight
            style={styles.button}
            underlayColor="#fbe899"
            onPress={() =>
              this.props.navigation.navigate('Continue', {
                isCheckingScore: false,
              })
            }>
            <Text style={styles.textButton}> Continue </Text>
          </TouchableHighlight>
        )}

        {/* -------------------NEW GAME-------------------- */}
        {this.props.gameSaved.join() === [].join() ? ( // Version for 2 people only
          <TouchableHighlight
            style={styles.button}
            underlayColor="#fbe899"
            onPress={() => this.props.navigation.navigate('New')}>
            <Text style={styles.textButton}> New game </Text>
          </TouchableHighlight>
        ) : null}

        {/* -------------------SCORE-------------------- */}
        {this.props.gameSaved.join() === [].join() ? null : (
          <TouchableHighlight
            style={styles.button}
            underlayColor="#fbe899"
            onPress={() =>
              this.props.navigation.navigate('Continue', {
                isCheckingScore: true,
              })
            }>
            <Text style={styles.textButton}> Score </Text>
          </TouchableHighlight>
        )}

        {/* -------------------CLEAR DATA-------------------- */}
        {this.props.gameSaved.join() === [].join() ? null : (
          <TouchableHighlight
            style={styles.button}
            underlayColor="#fbe899"
            onPress={this.handleModal}
            >
            <Text style={styles.textButton}> Clear Data </Text>
          </TouchableHighlight>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  textButton: {
    color: '#fbe899', //Gold
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#518668', //green
    padding: 10,
    margin: 10,
    width: 350,
    borderRadius: 50,
    //borderWidth: 2,
  },
});

// -------------STORE CONNEXION--------------
const mapStateToProps = (state) => {
  return {
    gameSaved: state.gameSaved,
  };
};
export default connect(mapStateToProps)(StartView);
