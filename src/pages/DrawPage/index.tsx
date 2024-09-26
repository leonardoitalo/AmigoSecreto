import { useSelector } from 'react-redux'
import { RootState } from 'store'

const DrawPage = () => {
  const namesList = useSelector((state: RootState) => state.form.currentList)

  return (
    <section>
      <form action="">
        <select name="currentName" id="currentName">
          {namesList.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </form>
    </section>
  )
}

export default DrawPage
