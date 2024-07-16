import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const Profile = ({ profileImage, initialName, initialUsername, initialEmail, initialLinks, initialBio }) => {

  const [name, setName] = useState(initialName);
  const [username, setUsername] = useState(initialUsername);
  const [email, setEmail] = useState(initialEmail);
  const [links, setLinks] = useState(initialLinks);
  const [bio, setBio] = useState(initialBio);

  const handleEdit = () => {
    console.log('Edit Profile');
  };

  return (
    <LinearGradient
      colors={['#1A0D30', '#000000']}
      style={styles.container}
      start={{ x: 2, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={{ uri: 'https://avatarfiles.alphacoders.com/207/thumb-1920-207641.jpg'}}
          style={styles.profileImage}
        />

        <TouchableOpacity onPress={handleEdit} style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Name </Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={setName}
            placeholder="Naitik"

          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Username </Text>
          <TextInput
            style={styles.textInput}
            value={username}
            onChangeText={setUsername}
            placeholder="naitik_99"
            placeholderTextColor="white"
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Email </Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="naitik@gmail.com"
            placeholderTextColor="white"
          />
        </View>
        {/* <View style={styles.infoContainer}>
          <Text style={styles.label}>Links </Text>
          <TextInput
            style={styles.textInput}
            value={links}
            onChangeText={setLinks}
          />
        </View> */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Bio </Text>
          <TextInput
            style={[styles.textInput, styles.bioInput]}
            value={bio}
            onChangeText={setBio}
            multiline
            numberOfLines={2}
            placeholder="I am a software developer"
            placeholderTextColor="white"
          />
        </View>

        <TouchableOpacity style={styles.feedbackButton}>
          <Text style={styles.feedbackButtonText}>Feedback</Text>
        </TouchableOpacity>

      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 170,
    height: 170,
    borderRadius: 100,
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
    width: 80,
    color: 'white',
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    // borderWidth: 1,
    paddingHorizontal: 10,
    color: 'white',
  },
  bioInput: {
    height: 50,
    textAlignVertical: 'top',
  },
  editButton: {
    padding: 10,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#0D99FF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  feedbackButton: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: 'grey',
    opacity: 0.8,
  },
  feedbackButtonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
