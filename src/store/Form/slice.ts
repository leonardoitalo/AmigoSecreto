import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from 'store'

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
      }
    },
    clearError: (state) => {
      state.error = ''
    },
  },
})

// Criando o thunk para lidar com o temporizador
export const addParticipantWithTimeout =
  (participant: string): AppThunk =>
  (dispatch) => {
    dispatch(addParticipant(participant))
    setTimeout(() => {
      dispatch(clearError())
    }, 5000)
  }

export const { addParticipant, clearError } = formSlice.actions

export default formSlice.reducer
