import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const screenWidth = Dimensions.get('screen').width
export const SMainTapContainerView = styled.View`
    flex: 1;
    width: ${screenWidth}px;
`
SMainTapContainerView.displayName = 'SMainTapContainerView'
