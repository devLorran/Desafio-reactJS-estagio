import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
  TextInput,
  Alert,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import axios from "axios";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { UserPhoto, SearchInput, MainView, ViewResult, ViewInfoUser, ButtonToSearch, ViewSearchContainer, ViewButton, Username, Name, Location } from "../../components/Home.style";
import { useNavigation } from '@react-navigation/native';
import 'react-native-gesture-handler'
// import { createDrawerNavigator } from "@react-navigation/drawer";

// const Drawer = createDrawerNavigator();

const Home = ({navigation}) => {
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);
  const inputRef = useRef(null);
  const [indexedsearch, setIndesedSearch] = useState([])

  // setIndesedSearch(...profile)

    //realizando a busca na API
    const getUser = async () => {
      axios.get(`https://api.github.com/users/${user}`)
      .then((res) => {
        // console.log(res.data);
        indexedsearch.push(res.data.name, res.data.login, res.data.avatar_url, res.data.location)
        console.log("Adicionado "+indexedsearch)
        setProfile(res.data);
      }).
      catch ((err) => {
        console.log(err);
      })
    }

    // const addItemSearch = () => {
    //   indexedsearch.push(profile?.name)
    //   console.log("Adicionado "+indexedsearch)
    // }

  const handleRequestUserData = async () => {
    if (inputRef.current) {
      inputRef.current.blur();
      inputRef.current.clear();
    }

    setProfile(null);

    if (!user) return;

    getUser()
    // addItemSearch()
    setUser(null);
  };
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    if (!profile) return;
    const res = await Linking.canOpenURL(profile.html_url);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL(profile.html_url);
    }
  };
  return (
    <MainView>
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <ViewSearchContainer>
      <SearchInput
        ref={inputRef}
        onChangeText={(text) => setUser(text)}
        onSubmitEditing={handleRequestUserData}
        placeholder='Digite o nome de um usuário'
      />
      <ButtonToSearch onPress={handleRequestUserData}>
        <ViewButton>
          <Text ><FontAwesome name="search" size={30} style={{color: 'white'}} /></Text>
        </ViewButton>
      </ButtonToSearch>
    </ViewSearchContainer>
    </KeyboardAvoidingView>
      {profile && (
        <ViewResult>
          <TouchableOpacity onPress={() => navigation.navigate("Profile", profile)}>
            <UserPhoto
              source={{ uri: profile?.avatar_url }}
            />
          </TouchableOpacity>
          <ViewInfoUser>
            <Name>
              {profile?.name}
            </Name>
            <Username>
              {profile?.login}
            </Username>
            <Location>
              {profile?.location}
            </Location>
          </ViewInfoUser>
        </ViewResult>
      )}
    </MainView>
  );

};

export default Home;

