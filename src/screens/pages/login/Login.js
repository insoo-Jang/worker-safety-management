import React from 'react'
import {
    SLoginContainerView,
    SLoginHeaderView,
    SLoginInfoText,
    SLoginInfoView,
} from './LoginStyle'
import { Platform } from 'react-native'
import { i18nt } from '../../../utils/i18n'
import { Input, Button } from 'react-native-elements'
import { colorSet } from '../../../styles/colors'
import { fontSizeSet } from '../../../styles/size'
import { WarnAlert } from '../../../components/Alerts'

const Login = (props) => {
    return (
        <SLoginContainerView
            style={{
                paddingTop: Platform.OS === 'ios' ? 80 : 40,
            }}
        >
            <SLoginHeaderView>
                <SLoginInfoText>
                    {/*{!isEmpty(key) && t(`service-title.${key}`)}*/}
                    {/*{!isEmpty(key) && ' '}*/}
                    {i18nt('login.header')}
                </SLoginInfoText>
            </SLoginHeaderView>
            <SLoginInfoView>
                <Input
                    placeholder={i18nt('login.name')}
                    returnKeyType="next"
                    clearButtonMode="always"
                    containerStyle={{
                        paddingHorizontal: 0,
                    }}
                    inputContainerStyle={{
                        backgroundColor: colorSet.primaryBg,
                        borderColor: 'transparent',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                    }}
                    inputStyle={{
                        fontSize: fontSizeSet.sm,
                        color: colorSet.normalTextColor,
                    }}
                />
                {/*<Input*/}
                {/*    placeholder={i18nt('login.date-of-birth')}*/}
                {/*    returnKeyType="next"*/}
                {/*    clearButtonMode="always"*/}
                {/*    containerStyle={{*/}
                {/*        paddingHorizontal: 0,*/}
                {/*    }}*/}
                {/*    inputContainerStyle={{*/}
                {/*        backgroundColor: colorSet.primaryBg,*/}
                {/*        borderColor: 'transparent',*/}
                {/*        paddingHorizontal: 10,*/}
                {/*        paddingVertical: 5,*/}
                {/*    }}*/}
                {/*    inputStyle={{*/}
                {/*        fontSize: fontSizeSet.sm,*/}
                {/*        color: colorSet.normalTextColor,*/}
                {/*    }}*/}
                {/*/>*/}
                <Input
                    placeholder={i18nt('login.phone-number')}
                    returnKeyType="next"
                    clearButtonMode="always"
                    containerStyle={{
                        paddingHorizontal: 0,
                    }}
                    inputContainerStyle={{
                        backgroundColor: colorSet.primaryBg,
                        borderColor: 'transparent',
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                    }}
                    inputStyle={{
                        fontSize: fontSizeSet.sm,
                        color: colorSet.normalTextColor,
                    }}
                />
                <Button
                    // onPress={onConnect}

                    // disabled={isEmpty(userId) || isEmpty(userPw)}
                    buttonType="text"
                    title={i18nt('login.next')}
                    buttonStyle={{
                        backgroundColor: colorSet.primary,
                        borderRadius: 2,
                        paddingVertical: 20,
                        marginVertical: 10,
                    }}
                />
                <Button
                    buttonType="text"
                    title={i18nt('login.manager-mode')}
                    type="clear"
                    titleStyle={{
                        color: colorSet.normalTextColor,
                        fontSize: fontSizeSet.sm,
                    }}
                    onPress={() => {
                        WarnAlert({ message: '서비스 개발중...' })
                    }}
                />
            </SLoginInfoView>
        </SLoginContainerView>
    )
}

export default Login
