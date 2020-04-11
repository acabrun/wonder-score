import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";


class NewGameView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p1: "",
      p2: "",
      textFilled: true,
    };
  }



  componentDidMount() {
  }

  render() {
    return (
      // Component who move up textInput when keyboard is active
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
        <View
          style={{
            flex: 6,
            backgroundColor: "white",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <Text style={styles.baseText}>Who is playing ?</Text>
          <TextInput
            style={this.state.textFilled ? styles.textInput : styles.textInputNotFilled }
            placeholder=" Player 1"
            onChangeText={p1 => this.setState({ p1 })}
            value={this.state.p1}
          />
          <TextInput
            style={this.state.textFilled ? styles.textInput : styles.textInputNotFilled }
            placeholder=" Player 2"
            onChangeText={p2 => this.setState({ p2 })}
            value={this.state.p2}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            backgroundColor: "white"
          }}
        >
          <TouchableOpacity
            style={styles.button}
            backgroundColor="blue"
            onPress={() => {
              if (this.state.p1.trim() === "" || this.state.p2.trim() === "") {
                this.setState({ textFilled : false })
              } else {
                this.setState({ textFilled : true })
                this.props.navigation.navigate("Score", {
                  player1: this.state.p1,
                  player2: this.state.p2,
                  isNewMatch: true
                });
              }
            }}
          >
            <Text style={styles.textButton}> Start game </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: 18
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#e3cfad",
    padding: 10,
    margin: 10,
    borderRadius: 10
  },
  textButton: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },
  textInput: {
    height: 40,
    width: 250,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5
  },
  textInputNotFilled: {
    height: 40,
    width: 250,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5
  }
});


export default NewGameView