import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Alert,
  Modal
} from "react-native";

export default class ModalView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: true
    };
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#518668",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View>
              <Text
                style={{ marginBottom: 50, fontSize: 20, fontWeight: "bold", color: "#fbe899" }}
              >
                Previous winner was {this.props.previousWinner}
              </Text>
              <TouchableHighlight
                style={styles.button}
                underlayColor="#fbe899"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.textButton}>OK</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
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
    backgroundColor: "#518668",
    padding: 10,
    margin: 10,
    borderRadius: 50,
    width: 250,
    borderWidth: 2.5,
    borderColor: "#fbe899"
  },
  textButton: {
    color: "#fbe899",
    fontSize: 18,
    fontWeight: "bold",
  },
  textInput: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1
  }
});
