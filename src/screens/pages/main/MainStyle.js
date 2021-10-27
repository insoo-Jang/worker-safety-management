import styled from 'styled-components/native'
import { fontSizeSet } from '../../../styles/size'
import { colorSet } from '../../../styles/colors'

export const SInfoContainerView = styled.View`
    flex: 7.5;
    padding: 10px 20px;
    //justify-content: space-between;
`
SInfoContainerView.displayName = 'SInfoContainerView'

export const SInfoDetailView = styled.View``
SInfoDetailView.displayName = 'SInfoDetailView'

export const STextLabel = styled.Text`
    margin: 10px 0;
    color: ${colorSet.normalTextColor};
    font-size: ${fontSizeSet.base}px;
    font-weight: bold;
`
STextLabel.displayName = 'STextLabel'

export const SConnectStateContainerView = styled.View`
    border-width: 1px;
    border-color: ${(prop) =>
        prop.connectionState
            ? 'rgba(77, 245, 11, 0.2)'
            : 'rgba(245, 95, 77, 0.2)'};
    border-radius: 4px;
    background: ${(prop) =>
        prop.connectionState
            ? 'rgba(77, 245, 11, 0.1)'
            : 'rgba(245, 95, 77, 0.1)'};
`
SConnectStateContainerView.displayName = 'SConnectStateContainerView'

export const SConnectStateText = styled.Text`
    padding: 10px;
    color: ${colorSet.normalTextColor};
    text-align: center;
    font-size: ${fontSizeSet.base}px;
`
SConnectStateText.displayName = 'SConnectStateText'

export const SContractStateContainerView = styled.View`
    align-items: center;
    padding: 10px;
    border-width: 1px;
    border-radius: 4px;
    border-color: ${(props) => props.borderColor};
    background: ${(props) => props.backgroundColor};
`
SContractStateContainerView.displayName = 'SContractStateContainerView'

export const SContractStateView = styled.Text`
    text-align: center;
    font-size: ${fontSizeSet.base}px;
`
SContractStateView.displayName = 'SContractStateView'

export const SButtonGroupView = styled.View`
    flex: 2.5;
    justify-content: center;
    padding: 0 20px;
`
SButtonGroupView.displayName = 'SButtonGroupView'
