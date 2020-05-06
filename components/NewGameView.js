import React, {Component} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableHighlight,
  KeyboardAvoidingView,
} from 'react-native';

class NewGameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p1: '',
      p2: '',
      textFilled: true,
    };
  }

  render() {
    return (
      // Component who move up textInput when keyboard is active
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
        <View style={styles.inputContainer}>
          <Text style={styles.baseText}>Who is playing ?</Text>
          <TextInput
            style={
              this.state.textFilled
                ? styles.textInput
                : styles.textInputNotFilled
            }
            placeholder=" Player 1"
            maxLength={8}
            onChangeText={(p1) => this.setState({p1})}
            value={this.state.p1}
          />
          <TextInput
            style={
              this.state.textFilled
                ? styles.textInput
                : styles.textInputNotFilled
            }
            placeholder=" Player 2"
            maxLength={8}
            onChangeText={(p2) => this.setState({p2})}
            value={this.state.p2}
          />
        </View>
        <View
          style={styles.buttonContainer}>
          <TouchableHighlight
            style={styles.button}
            underlayColor="#fbe899"
            backgroundColor="blue"
            onPress={() => {
              if (this.state.p1.trim() === '' || this.state.p2.trim() === '') {
                this.setState({textFilled: false});
              } else {
                this.setState({textFilled: true});
                this.props.navigation.navigate('Score', {
                  player1: this.state.p1,
                  player2: this.state.p2,
                  isNewMatch: true,
                });
              }
            }}>
            <Text style={styles.textButton}> Start game </Text>
          </TouchableHighlight>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 6,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  baseText: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Cochin'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#518668',
    padding: 10,
    margin: 10,
    borderRadius: 50,
    width: 350,
    //borderWidth: 2
  },
  textButton: {
    color: '#fbe899',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    width: 250,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  textInputNotFilled: {
    height: 40,
    width: 250,
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 10,
  },
});

export default NewGameView;
