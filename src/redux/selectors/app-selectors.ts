import { RootState } from '../store.ts'

export const getLoading = (state: RootState): boolean => state.app.loading
export const getErrorMessages = (state: RootState): string | null => state.app.error
export const getErrorCode = (state: RootState): string | null | undefined => state.app.code
