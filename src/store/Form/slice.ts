import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FormState {
  currentList: string[]
}

const initialState: FormState = {
  currentList: [],
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addParticipant: (state, action: PayloadAction<string>) => {
      state.currentList = [...state.currentList, action.payload]
    },
  },
})

export const { addParticipant } = formSlice.actions

export default formSlice.reducer
