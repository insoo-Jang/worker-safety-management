import React, { useState } from 'react'
import { View, FlatList, TouchableOpacity } from 'react-native'
import { ListItem, Text } from 'react-native-elements'
import {
    SSensorListTitleContainerView,
    SSensorListTitleView,
    SSensorListView,
} from './MainStyle'
import { i18nt } from '../../../utils/i18n'
import Empty from '../../../components/Empty'
import { fontSizeSet } from '../../../styles/size'
import { colorSet } from '../../../styles/colors'
import StateBar from '../../../components/StateBar'
import { fastenedMessage, typeOfFastened } from '../../../utils/common'
import { times } from '../../../utils/format'

const SensorList = ({ list }) => {
    const [listOpen, setListOpen] = useState(false)

    const listEmptyStyle = {
        imgWidth: 60,
        imgHeight: 40,
        containerStyle: {
            justifyContent: 'center',
            height: 150,
            alignItems: 'center',
        },
        contentStyle: {
            paddingVertical: 10,
            fontSize: fontSizeSet.sm,
        },
    }
    const listStyle = {
        title: {
            fontSize: fontSizeSet.base,
        },
        subTitle: {
            fontSize: fontSizeSet.sm,
            color: colorSet.disableText,
        },
    }
    const renderItem = ({ item, index }) => {
        // const backgroundColor =
        //     item.time === selectedItemTime.time ? '#f9f9f9' : '#fff'

        return (
            <ListItem
                topDivider
                // onPress={() => onChangeSelectTime(item)}
                containerStyle={{
                    // backgroundColor: backgroundColor,
                    borderColor:
                        index === 0 ? 'transparent' : colorSet.borderColor,
                    paddingHorizontal: 0,
                }}
            >
                <StateBar
                    title={fastenedMessage(item.fastened)}
                    innerStyle={typeOfFastened(item.fastened)}
                />
                <ListItem.Content>
                    <ListItem.Title style={listStyle.title}>
                        {item.name}
                    </ListItem.Title>
                    <ListItem.Subtitle style={listStyle.subTitle}>
                        {times.getDefaultFormat()}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }
    return (
        <View>
            <SSensorListTitleContainerView>
                <SSensorListTitleView>
                    {i18nt('title.sensor-list')}
                </SSensorListTitleView>
            </SSensorListTitleContainerView>
            <SSensorListView>
                {list.length === 0 ? (
                    <Empty
                        description={i18nt('alarm.no-sensor')}
                        {...listEmptyStyle}
                    />
                ) : (
                    <>
                        <FlatList
                            data={list.filter((x, index) => {
                                return listOpen
                                    ? index < list.length
                                    : index < 3
                            })}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                        {list.length > 3 ? (
                            listOpen ? (
                                <TouchableOpacity
                                    style={{
                                        width: '100%',
                                        backgroundColor: 'white',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={() => setListOpen(false)}
                                >
                                    <Text
                                        style={{
                                            fontSize: fontSizeSet.base,
                                            paddingVertical: 15,
                                        }}
                                    >
                                        {i18nt('action.view-fold')}
                                    </Text>
                                </TouchableOpacity>
                            ) : (
                                <TouchableOpacity
                                    style={{
                                        width: '100%',
                                        backgroundColor: 'white',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={() => setListOpen(true)}
                                >
                                    <Text
                                        style={{
                                            fontSize: fontSizeSet.base,
                                            paddingVertical: 15,
                                        }}
                                    >
                                        {i18nt('action.view-more')}
                                    </Text>
                                </TouchableOpacity>
                            )
                        ) : null}
                    </>
                )}
            </SSensorListView>
        </View>
    )
}

export default SensorList
