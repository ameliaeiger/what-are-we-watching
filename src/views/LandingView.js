import React from "react"
import { View } from "react-native"
import LoginForm from "../components/LoginForm.js"

const LandingView = ({ navigation }) => {

    return(
        <View>
            <LoginForm navigation={navigation} />
        </View>
    )
}

export default LandingView