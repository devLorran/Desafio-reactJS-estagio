import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import Home from "../../screens/Home/Home";
import Profile from "../../screens/Profile/Profile";


const { Navigator, Screen } = createNativeStackNavigator();


export default function(){
    return(
        <Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Screen name="Home" component={Home} />
            <Screen name="Profile" component={Profile} />
        </Navigator>
    )
}