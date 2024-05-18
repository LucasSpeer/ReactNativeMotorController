import { Text, View, StyleSheet, Image, FlexDirection } from "react-native";
import { StatusBar } from 'expo-status-bar';

import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';

const PlaceholderImage = require('../assets/images/splash.png');

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Motor Controller</Text>
      <View style={styles.footerContainer}>
        <Button theme="up" />
        <Button theme="down" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
    },
    titleText: {
        fontSize: 45,
        fontWeight: 'bold',
        color: '#fff'
    },
    imageContainer: {
      flex: 1,
      paddingTop: 58,
    },
    footerContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
});