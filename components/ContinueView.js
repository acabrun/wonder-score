import React, { Component } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { FAKE_GAME_TAB } from "../helpers/HelpersTab";

import { connect } from "react-redux";

class ContinueView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {}

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "yellow" }}>
        {/* LOG */}
        <View
          style={{
            flex: 1.1,
            backgroundColor: "white"
          }}
        >
          <View alignItems="center">
            {this.props.gameSaved.join() === [].join() ? (
              <Text style={styles.baseText}>No game found !</Text>
            ) : (
              <Text style={styles.baseText}>Choose game !</Text>
            )}
          </View>

          <View>
            {this.props.gameSaved
              ? Object.values(this.props.gameSaved).map(game => (
                  <TouchableOpacity
                    key={game.idMatch}
                    style={styles.button}
                    backgroundColor="green"
                    onPress={() => {
                      this.props.navigation.navigate("Score", {
                        paramsMatch: game.paramsMatch,
                        player1: game.player1NameMatch,
                        player2: game.player2NameMatch,
                        idMatch: game.idMatch,
                       // idGame: game.paramsMatch[0].idGame,
                        isNewMatch: false
                      });
                    }}
                  >
                    <Text style={styles.textButton}>
                      {game.player1NameMatch} Vs {game.player2NameMatch}
                    </Text>
                  </TouchableOpacity>
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
    color: "black",
    fontSize: 16,
    fontWeight: "bold"
  },
  baseText: {
    fontSize: 18,
    marginBottom: 50,
    marginTop: 25
  },
  button: {
    alignItems: "center",
    backgroundColor: "#e3cfad",
    padding: 10,
    margin: 10,
    borderRadius: 10
  }
});

const mapStateToProps = state => {
  return {
    gameSaved: state.gameSaved
  };
};
export default connect(mapStateToProps)(ContinueView);
