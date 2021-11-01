import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { responsiveWidth } from 'react-native-responsive-dimensions'
import {
    SButtongroupView,
    SIconView,
    SSubTitleText,
    STextView,
    STitleText,
} from './ButtonGroupStyle'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { colorSet } from '../styles/colors'

const wrapperWidth = responsiveWidth(100) - 40

const ButtonGroup = (props) => {
    const { groupList = {}, resource = {} } = props
    const navigation = useNavigation()
    const buttonNum = groupList?.length

    return buttonNum !== 0 ? (
        <SButtongroupView>
            {groupList.map((data, index) => {
                return (
                    <TouchableOpacity
                        style={{
                            alignItems: 'center',
                            width: wrapperWidth / buttonNum,
                            borderRightWidth: index + 1 < buttonNum ? 1 : 0,
                            borderColor: colorSet.primaryDisable,
                            // paddingVertical: 7,
                        }}
                        key={index}
                    >
                        {/*<SIconView>*/}
                        <Icon
                            name={data?.icon}
                            size={27}
                            style={{ marginBottom: 3 }}
                            color="white"
                        />
                        {/*</SIconView>*/}
                        <STextView>
                            <STitleText>{data?.title}</STitleText>
                        </STextView>
                    </TouchableOpacity>
                )
            })}
        </SButtongroupView>
    ) : null
}

export default ButtonGroup
