import React, {Component} from 'react';
import {View, TouchableHighlight, StyleSheet, Text} from 'react-native';

export default function StartView({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'yellow'}}>
      <View
        style={{
          flex: 7,
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
          {/* -------------------CONTINUE-------------------- */}
        <TouchableHighlight
          style={styles.button}
          underlayColor="#fbe899"
          onPress={() => navigation.navigate('Continue', {
            isCheckingScore: false
          } )}>
          <Text style={styles.textButton}> Continue </Text>
        </TouchableHighlight>
        {/* -------------------NEW GAME-------------------- */}
        <TouchableHighlight
          style={styles.button}
          underlayColor="#fbe899"
          onPress={() => navigation.navigate('New')}>
          <Text style={styles.textButton}> New game </Text>
        </TouchableHighlight>
        {/* -------------------SCORE-------------------- */}
        <TouchableHighlight
          style={styles.button}
          underlayColor="#fbe899"
          onPress={() => navigation.navigate('Continue', {
            isCheckingScore: true
          } )}>
          <Text style={styles.textButton}> Score </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textButton: {
    color: '#fbe899', //Gold
    fontSize: 16,
    fontWeight: 'bold',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#518668', //green
    padding: 10,
    margin: 10,
    borderRadius: 50,
    borderWidth: 2,
  },
});
