import { View, Text, TextInput, Image, FlatList, Pressable, Linking } from 'react-native'
import Moment from "moment"
import React, { Component, useEffect, useState } from 'react';
import axios from "axios";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRoute } from '@react-navigation/native';
import { ContainerInfo, Container, Title, ImgProfile, UserImg, UserTitle, ContainerLocation, ContainerSeguidores, ContainerRepositorie, RepositorieText, RepositorieTitle, RepositorieButton, ButtonText, List, QuantityRepositorie, Followers, ViewInfo, ViewTitle } from "../../components/Profile.style";
import styled from "styled-components/native";
const Profile = ({ route, navigation }) => {
  const profile = route.params;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios.get(`https://api.github.com/users/${profile.login}/repos`)
    .then((res) => {
      setRepos(res.data);
    }).
    catch ((err) => {
      console.log(err);
    })
  }, [])

  repos.map((rep) => (
    console.log("Repo "
    +rep.name + 
    " " + rep.language +
    " " + rep.description +
    " " + Moment(rep.created_at).format('DD/MM/YYYY') +
    " " + Moment(rep.pushed_at).format('DD/MM/YYYY') + 
    " " + rep.owner.login) 
  ))

  return (
    <Container>
        <UserImg>
          <ImgProfile source={{ uri: profile.avatar_url }}/>
        </UserImg>
      <ContainerInfo>
        <UserTitle>{profile.name} </UserTitle>
        <Title><FontAwesome name="user" size={10} color="#888888" /> {profile.login}</Title>
        <ContainerSeguidores>
          <Followers> <FontAwesome name="users" size={10} color="#888888" /> Seguindo: {profile.following}</Followers>
          <Title>Seguidores: {profile.followers}</Title>
        </ContainerSeguidores>
      </ContainerInfo>

      <ContainerLocation>
        <Title>{profile.location}</Title>
        <Title>ID: {profile.id}</Title>
      </ContainerLocation>

      <ContainerSeguidores>
        <QuantityRepositorie><FontAwesome name="database" size={20} color="#888888" /> repositórios públicos: {profile.public_repos}</QuantityRepositorie>
      </ContainerSeguidores>
      <List>
        <FlatList
          data={repos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </List>
    </Container>
  )
}

const renderItem = ({ item }) => (
  <ContainerRepositorie>
    <ViewTitle>
      <RepositorieTitle>{item.name}</RepositorieTitle>
    </ViewTitle>
    <ViewInfo>
      <RepositorieText>{item.language}</RepositorieText>
      <RepositorieText>{item.description}</RepositorieText>
      <RepositorieText>{item.owner.login}</RepositorieText>
      <RepositorieText>Criado em: { Moment(item.created_at).format('DD/MM/YYYY') }</RepositorieText>
      <RepositorieText>Último Push: { Moment(item.pushed_at).format('DD/MM/YYYY') }</RepositorieText>
    </ViewInfo>
    
    <Pressable onPress={() => Linking.openURL(item.html_url)}>
      <RepositorieButton>
        <ButtonText >
          Ver no github
        </ButtonText>
      </RepositorieButton>
    </Pressable>
  </ContainerRepositorie> 
);
export default Profile

