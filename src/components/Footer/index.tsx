import { Button, IconButton } from 'styles/GlobalComponents'
import { FooterContainer } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { useNavigate } from 'react-router-dom'
import { drawName } from 'store/Draw/slice'

const Footer = () => {
  const namesList = useSelector((state: RootState) => state.form.currentList)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const start = () => {
    dispatch(drawName(namesList))
    navigate('/sorteio')
  }

  return (
    <FooterContainer>
      <IconButton $hideOMobile src="images/play-icone.png" />
      <Button disabled={namesList.length < 3} onClick={start}>
        Iniciar brincadeira!
      </Button>
      <img className="desktop-image" src="images/sacola.png" alt="" />
      <img
        className="mobile-image"
        src="images/mobile/sacola-mobile.png"
        alt=""
      />
    </FooterContainer>
  )
}

export default Footer
