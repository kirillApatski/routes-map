import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type InitialStateType = {
  loading: boolean
  error: string | null
  code?: string | null
}

const initialState: InitialStateType = {
  loading: false,
  error: null,
  code: null,
}

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setAppLoading(state, action: PayloadAction<{ loading: boolean }>) {
      state.loading = action.payload.loading
    },
    setAppError(state, action: PayloadAction<{ error: string | null; code: string | null }>) {
      state.error = action.payload.error
      state.code = action.payload.code
    },
  },
})

export const { setAppLoading, setAppError } = appSlice.actions
export const appReducer = appSlice.reducer
