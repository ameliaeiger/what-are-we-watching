import React from "react"
import { View } from "react-native"

import PartyGreeting from "../components/PartyGreeting"

const PartyView = ({ navigation }) => {

    return(
        <View>
            <PartyGreeting navigation={navigation} />
        </View>
    )
}

export default PartyView