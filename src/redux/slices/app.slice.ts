import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type InitialStateType = {
  loading: boolean
  error: string | null
}

const initialState: InitialStateType = {
  loading: false,
  error: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setAppLoading(state, action: PayloadAction<{ loading: boolean }>) {
      state.loading = action.payload.loading
    },
  },
})

export const { setAppLoading } = appSlice.actions
export const appReducer = appSlice.reducer
