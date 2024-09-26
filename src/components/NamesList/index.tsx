import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { NamesListContainer } from './styles'

const NamesList = () => {
  const namesList = useSelector((state: RootState) => state.form.currentList)
  return (
    <NamesListContainer>
      {namesList.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </NamesListContainer>
  )
}

export default NamesList
