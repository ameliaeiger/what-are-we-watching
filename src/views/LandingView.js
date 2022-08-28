import React from "react"
import { View, Button } from 'react-native'
import Header from "../components/Header.js"
import LoginForm from "../components/LoginForm.js"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const LandingView = ({ navigation }) => {

    return(
        <View>
        <Header />
        <LoginForm navigation={navigation} />
        </View>
    )
}

export default LandingView