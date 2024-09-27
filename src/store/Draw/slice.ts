import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { doDraw } from 'helpers/doDraw'

interface DrawState {
  selectedName: Record<string, string>
  firstName: string
}

const initialState: DrawState = {
  selectedName: {},
  firstName: '',
}

const draw = createSlice({
  name: 'draw',
  initialState,
  reducers: {
    drawName: (state, action: PayloadAction<string[]>) => {
      const names = action.payload
      const result = doDraw(names)
      state.selectedName = Object.fromEntries(result.entries())
    },
  },
})

export const { drawName } = draw.actions

export default draw.reducer
