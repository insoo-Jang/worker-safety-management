import React, { useCallback, useEffect, useState, useRef } from 'react'
import {
    Alert,
    NativeEventEmitter,
    NativeModules,
    Keyboard,
    TouchableWithoutFeedback,
    Platform,
    View,
    Text,
} from 'react-native'
import { Button, Input } from 'react-native-elements'
import BleManager from 'react-native-ble-manager'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { debounce, isEmpty } from 'lodash-es'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { fontSizeSet } from '../../../styles/size'
import { colorSet } from '../../../styles/colors'
// import { Camera } from 'expo-camera'
import { i18nt } from '../../../utils/i18n'
import {
    SButtonGroupView,
    SConnectStateContainerView,
    SConnectStateText,
    SContractStateContainerView,
    SContractStateView,
    SInfoContainerView,
    SInfoDetailView,
    STextLabel,
} from './MainStyle'
import Spinner from 'react-native-loading-spinner-overlay'
import { fastenedMessage, typeOfFastened } from '../../../utils/common'
// import { SCREEN } from '../../../navigation/constants'
// import { clearUuid } from '../../../redux/reducers'
// import { Audio } from 'expo-av'

const Main = (props) => {
    const [fastened, setFastened] = useState('-')

    const [errorMessage, setErrorMessage] = useState('')
    const [connectionState, setConnectionState] = useState(false)

    return (
        <>
            <Spinner
                // visible={loading}
                // textContent={'체결여부 검사중'}
                overlayColor={'rgba(0, 0, 0, 0.7)'}
                textStyle={{ color: 'white' }}
            />
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <SInfoContainerView>
                    <SInfoDetailView>
                        <STextLabel>{i18nt('common.name')}</STextLabel>
                        <Input
                            containerStyle={{
                                paddingHorizontal: 0,
                            }}
                            inputContainerStyle={{
                                backgroundColor: colorSet.primaryBg,
                                borderColor: 'transparent',
                                paddingHorizontal: 10,
                            }}
                            inputStyle={{
                                fontSize: fontSizeSet.sm,
                                color: colorSet.normalTextColor,
                            }}
                            errorMessage={errorMessage}
                            // onChangeText={onChangeName}
                            clearButtonMode="always"
                            rightIcon={<Icon name="pencil" size={20} />}
                            placeholder={i18nt('common.enter-name')}
                            disabled={connectionState}
                            maxLength={10}
                        />
                    </SInfoDetailView>
                    <SInfoDetailView>
                        <STextLabel>{i18nt('common.date-of-birth')}</STextLabel>
                        <Input
                            containerStyle={{
                                paddingHorizontal: 0,
                            }}
                            inputContainerStyle={{
                                backgroundColor: colorSet.primaryBg,
                                borderColor: 'transparent',
                                paddingHorizontal: 10,
                            }}
                            inputStyle={{
                                fontSize: fontSizeSet.sm,
                                color: colorSet.normalTextColor,
                            }}
                            errorMessage={errorMessage}
                            onChangeText={(value) => {
                                // onChangeDate(value)
                                // if (value.length >= 6) {
                                //     Keyboard.dismiss()
                                // }
                            }}
                            clearButtonMode="always"
                            rightIcon={
                                <Icon
                                    name="pencil"
                                    size={20}
                                    color={colorSet.normalTextColor}
                                />
                            }
                            placeholder="YY/MM/DD"
                            disabled={connectionState}
                            keyboardType="numeric"
                            maxLength={7}
                            returnKeyType="go"
                        />
                    </SInfoDetailView>
                    {/*<SInfoDetailView>*/}
                    {/*    <STextLabel>*/}
                    {/*        {i18nt('common.connection-status')}*/}
                    {/*    </STextLabel>*/}
                    {/*    <SConnectStateContainerView*/}
                    {/*        connectionState={connectionState}*/}
                    {/*    >*/}
                    {/*        <SConnectStateText>*/}
                    {/*            {connectionState*/}
                    {/*                ? i18nt('sensor.on')*/}
                    {/*                : i18nt('sensor.off')}*/}
                    {/*        </SConnectStateText>*/}
                    {/*    </SConnectStateContainerView>*/}
                    {/*</SInfoDetailView>*/}
                    {/*<SInfoDetailView>*/}
                    {/*    <STextLabel>{i18nt('common.fail-safe')}</STextLabel>*/}
                    {/*    <SContractStateContainerView*/}
                    {/*        borderColor={typeOfFastened(fastened).borderColor}*/}
                    {/*        backgroundColor={*/}
                    {/*            typeOfFastened(fastened).backgroundColor*/}
                    {/*        }*/}
                    {/*    >*/}
                    {/*        <Icon*/}
                    {/*            name={typeOfFastened(fastened).icon}*/}
                    {/*            size={36}*/}
                    {/*            color={typeOfFastened(fastened).color}*/}
                    {/*        />*/}
                    {/*        <SContractStateView>*/}
                    {/*            {fastenedMessage(fastened)}*/}
                    {/*        </SContractStateView>*/}
                    {/*    </SContractStateContainerView>*/}
                    {/*</SInfoDetailView>*/}
                </SInfoContainerView>
            </TouchableWithoutFeedback>

            <SButtonGroupView>
                <Button
                    buttonStyle={{
                        height: 50,
                        fontSize: fontSizeSet.base,
                        marginBottom: 15,
                        backgroundColor: colorSet.primary,
                    }}
                    // onPress={onConnect}
                    title={i18nt('action.connection')}
                    // disabled={connectionState}
                />
                <Button
                    type="outline"
                    buttonStyle={{
                        height: 50,
                        fontSize: fontSizeSet.base,
                        borderColor: colorSet.primary,
                    }}
                    titleStyle={{ color: colorSet.primary }}
                    // onPress={onAllClear}
                    title={i18nt('action.disconnect')}
                    // disabled={!connectionState}
                />
            </SButtonGroupView>
        </>
    )
}

export default Main
