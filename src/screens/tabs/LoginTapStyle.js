import styled from 'styled-components/native'
import { Text } from 'react-native-elements'

import { fontSizeSet } from '../../styles/size'
import { colorSet } from '../../styles/colors'

export const SCopyrightText = styled(Text)`
    text-align: center;
    font-size: ${fontSizeSet.xs}px;
    color: ${colorSet.disableText};
`
SCopyrightText.displayName = 'SCopyrightText'
