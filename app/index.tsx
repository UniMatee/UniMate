import React from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, StatusBar } from "react-native";
import { Link } from 'expo-router';
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../components/CustomButton"; 

export default function Page() {
  
  return (
    <SafeAreaView style={{height: "100%" }}>
      <ScrollView contentContainerStyle={{height:'100%'}}>

        <View style={styles.container}>
          <View style={styles.main}>
            <Text style={styles.title}>Connexus</Text> 

            <Text style={styles.subtitle}>
              Your all-in-one app for campus news, lost and found, events, and more.
            </Text>
            <Link href="/login" style={styles.button}>
              <Text style={styles.buttonText}>Lets Get Started</Text>
            </Link>

          
            {/* <CustomButton
              handlePress={() => { } }
              containerStyles={styles.containerStyles} textStyles={undefined} isLoading={undefined}            
              /> */}


          </View>
        </View>
       </ScrollView> 

      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "beige",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    alignItems: "center", 
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
    textAlign: "center",
    marginTop: 24,
    marginBottom: 24,
  },
  button: {
    backgroundColor: "black",
    padding: 14,
    borderRadius: 8,
    marginTop: 24,
    minWidth: 180, 
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    alignContent: "center",
  },
  containerStyles: {
    backgroundColor: "black",
    padding: 14,
    borderRadius: 8,
    marginTop: 24,
    minWidth: 180, 
  },
});
