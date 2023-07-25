import { RootState } from '../store.ts'

export const getLoading = (state: RootState): boolean => state.app.loading
