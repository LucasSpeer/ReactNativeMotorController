import { StyleSheet, View, Pressable, Text, } from 'react-native';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useState } from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';

const url = "http://motors.local:8110";
const defDur = "0.08";
const buttonSize = 40;

const sendCmd = async ({ cmd = "dn", dur = defDur }) => {
  try {
    const payloadStr = JSON.stringify(
      {
        cmd: cmd,
        dur: dur
      });
    await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'text/plain',
        'Content-Type': 'application/json',
      },
      body: payloadStr,
    });
  } catch (error) {
    console.error(error);
  }
}

export default function Button({ theme = "" }) {
  if (theme === "up") {
    return (
      <TouchableHighlight
        style={[styles.buttonContainer,]}
        underlayColor={"#DDD"}
        onPress={() => sendCmd({
          cmd: "dn",
        })}
      >
        <FontAwesome
          name="arrow-up"
          size={buttonSize}
          color="#25292e"
          style={styles.buttonIcon}
        />
      </TouchableHighlight>
    );
  }
  if (theme === "dn") {
    return (
      <TouchableHighlight
        style={[styles.buttonContainer,]}
        underlayColor={"#DDD"}
        onPress={() => sendCmd({
          cmd: "dn",
        })}
      >
        <FontAwesome
          name="arrow-down"
          size={buttonSize}
          color="#25292e"
          style={styles.buttonIcon}
        />
      </TouchableHighlight>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{ }</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 300,
    height: 150,
    marginHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderWidth: 4,
    borderColor: "#888",
    backgroundColor: "#fff",
    borderRadius: 18,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "#fff",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
