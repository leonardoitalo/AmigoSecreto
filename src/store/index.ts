import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import formReducer from 'store/Form/slice'
import drawReducer from 'store/Draw/slice'

export const store = configureStore({
  reducer: {
    form: formReducer,
    draw: drawReducer,
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
