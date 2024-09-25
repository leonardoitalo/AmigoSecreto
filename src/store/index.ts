import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import formReducer from 'store/Form/slice'

export const store = configureStore({
  reducer: {
    form: formReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
export type AppDispatch = typeof store.dispatch
