import React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { SMainTapContainerView } from './TapStyle'
import { colorSet } from '../../styles/colors'
import { responsiveHeight } from 'react-native-responsive-dimensions'
import { Main } from '../pages/main'

const MainTap = () => {
    return (
        <SMainTapContainerView>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                    backgroundColor: colorSet.white,
                }}
            >
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ height: responsiveHeight(100) - 91 }}
                >
                    <Main />
                </TouchableOpacity>
            </ScrollView>
        </SMainTapContainerView>
    )
}

export default MainTap
