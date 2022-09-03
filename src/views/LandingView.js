import React from "react"
import { View } from "react-native"
import LoginForm from "../components/LoginForm.js"

const LandingView = ({ navigation, globals }) => {

    return(
        <View>
            <LoginForm navigation={navigation} globals={globals}/>
        </View>
    )
}

export default LandingView