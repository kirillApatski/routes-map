import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type InitialStateType = {
  status: RequestStatusType
  error: string | null
}

const initialState: InitialStateType = {
  status: 'idle',
  error: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setAppStatus(state, action: PayloadAction<{ status: RequestStatusType }>) {
      state.status = action.payload.status
    },
  },
})

export const { setAppStatus } = appSlice.actions
export const appReducer = appSlice.reducer
