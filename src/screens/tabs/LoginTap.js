import React from 'react'
import {
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native'
import { SMainTapContainerView } from './TapStyle'
import { colorSet } from '../../styles/colors'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Main } from '../pages/main'
import { SCopyrightText } from './LoginTapStyle'
import { Login } from '../pages/login'

const LoginTap = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{ backgroundColor: colorSet.white }}>
                <Login />
                <SCopyrightText>
                    © 2021 NKIA, ALL RIGHTS RESERVED
                </SCopyrightText>
            </ScrollView>
        </TouchableWithoutFeedback>
    )
}

export default LoginTap
