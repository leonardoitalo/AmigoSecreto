import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { doDraw } from 'helpers/doDraw'

interface DrawState {
  selectedName: string
}

const initialState: DrawState = {
  selectedName: '',
}

const draw = createSlice({
  name: 'draw',
  initialState,
  reducers: {
    drawName: (state, action: PayloadAction<string[]>) => {
      const names = action.payload
      const result = doDraw(names)
      console.log(result)
      state.selectedName = Array.from(result.keys())[0]
    },
  },
})

export const { drawName } = draw.actions

export default draw.reducer
