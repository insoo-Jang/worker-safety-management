import React, { useCallback, useEffect, useState, useRef } from 'react'
import { NativeModules, ScrollView } from 'react-native'
import { SButtongroupContainerView } from '../../../components/ButtonGroupStyle'
import ButtonGroup from '../../../components/ButtonGroup'
import { i18nt } from '../../../utils/i18n'
import StateBar from '../../../components/StateBar'
import NativeEventEmitter from 'react-native/Libraries/EventEmitter/NativeEventEmitter'
import { SSensorListContainerView } from './MainStyle'
import SensorList from './SensorList'
import DividerComponent from '../../../components/DividerComponent'
import { Divider } from 'react-native-elements'

const BleManagerModule = NativeModules.BleManager
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule)

const Main = (props) => {
    const [bluetoothState, setBluetoothState] = useState(null)

    const buttonGroupList = [
        { title: i18nt('action.connection'), icon: 'access-point' },
        { title: i18nt('action.disconnect'), icon: 'cancel' },
    ]

    const sensorList = [
        { name: 'NKIA123123', fastened: '11' },
        { name: 'NKIA456456', fastened: '00' },
        { name: 'NKIA456456', fastened: '00' },
        { name: 'NKIA456456', fastened: '00' },
        { name: 'NKIA456456', fastened: '00' },
    ]

    // useEffect(() => {
    //     bleManagerEmitter.addListener('BleManagerDidUpdateState', (args) => {
    //         if (args?.state !== bluetoothState) {
    //             setBluetoothState(args.state)
    //         }
    //     })
    // }, [bluetoothState])
    return (
        <>
            <SButtongroupContainerView>
                <ButtonGroup groupList={buttonGroupList} />
            </SButtongroupContainerView>
            <ScrollView showsVerticalScrollIndicator={false}>
                {bluetoothState === null || bluetoothState === 'off' ? (
                    <StateBar title={i18nt('alarm.bluetooth-off')} />
                ) : null}
                <SSensorListContainerView>
                    {/*<SensorList list={sensorList} />*/}
                </SSensorListContainerView>
                <Divider />
            </ScrollView>
        </>
    )
}

export default Main
