import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './Home';
// import { Button } from 'expo-elements';
// import { useNavigation } from '@react-navigation/native';
import './Home.css';

const Contact = () => {
  // const navigation = useNavigation();

  return (
    <div class="hero">
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.text}>Digital Marketing Co. is a full-service digital marketing agency that helps businesses grow online. We offer a range of services including SEO, PPC, social media marketing, and more.</Text>
      {/* <Button
        title="Go back"
        buttonStyle={styles.button}
        onPress={() => navigation.goBack()}
      /> */}
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
  },
});

export default Contact;
