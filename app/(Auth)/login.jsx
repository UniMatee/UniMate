import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const submit = () => {
    // Handle form submission logic
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <GestureHandlerRootView>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.content}>
          <Text style={styles.heading}>Ready? Are you!</Text>
          <Text style={styles.headingText}>Connexus: Your one-stop app for news, events, and campus life.</Text>

          <FormField
            value={form.email}
            handleChangeText={(text) => setForm({ ...form, email: text })}
            placeholder="Enter your email"
            otherStyles={styles.input}
            keyboardType="email-address"
          />

          <FormField
            value={form.password}
            handleChangeText={(text) => setForm({ ...form, password: text })}
            placeholder="Enter your password"
            otherStyles={styles.input}
            secureTextEntry
          />

          <CustomButton
            title="Sign up with email"
            handlePress={submit}
            containerStyles={styles.button}
            isLoading={isSubmitting}
          />

          <Text style={styles.middleText}>Don't have an account?</Text>

          <Link href="/register" style={styles.linkText}><Text>Sign Up</Text></Link>


          <Text style={styles.footer}>Connexus</Text>
        </View>
      </ScrollView>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'beige',
    padding: 24,
  },
  heading: {
    fontSize: 45,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  headingText: {
    fontSize: 25,
    color: '#333',
    marginBottom: 20,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    width: '100%',
  },
  input: {
    height: 40,
    width: '150%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  button: {
    width: '100%',
    backgroundColor: 'black',
    padding: 14,
    borderRadius: 8,
    marginTop: 24,
    minWidth: 180,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  middleText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  linkText: {
    fontSize: 16,
    color: 'black',
    textDecorationLine: 'underline',
  },
  footer: {
    marginTop: 20,
    fontSize: 60,
    fontWeight: 'bold',
  },
});

export default Login;
