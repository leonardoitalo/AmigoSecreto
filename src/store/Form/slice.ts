import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FormState {
  currentList: string[]
  error: string
}

const initialState: FormState = {
  currentList: [],
  error: '',
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addParticipant: (state, action: PayloadAction<string>) => {
      if (state.currentList.includes(action.payload)) {
        // Exibe uma mensagem de erro
        state.error = 'Nomes duplicaddos não são permitidos!'
      } else {
        // Adiciona o participante e limpa o erro anterior
        state.currentList = [...state.currentList, action.payload]
        state.error = ''
      }
    },
  },
})

export const { addParticipant } = formSlice.actions

export default formSlice.reducer
