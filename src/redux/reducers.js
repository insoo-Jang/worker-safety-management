import { createSlice } from '@reduxjs/toolkit'

const QR_STATE = {
    android: '',
    ios: '',
    server: '',
}
// “{\“resourceId\“:4222,\“server\“:\“http://192.168.234.24\“,\“ios\“:\“E7465DFB-8E9A-D2BA-65F5-68365089F423\“,\“android\“:\“A4:34:F1:36:F7:3E\“}”
export const qrSlice = createSlice({
    name: 'uuid',
    initialState: QR_STATE,
    reducers: {
        setUuid: (state, action) => action.payload,
        clearUuid: () => QR_STATE,
    },
})

export const { setUuid, clearUuid } = qrSlice.actions

export default qrSlice.reducer

