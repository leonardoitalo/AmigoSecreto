import { Button, IconButton } from 'styles/GlobalComponents'
import { FooterContainer } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from 'store'
import { IconButtonProps } from 'interfaces/IconButtonProps'
import { useNavigate } from 'react-router-dom'

const Footer = ({ hideonmobile }: IconButtonProps) => {
  const namesList = useSelector((state: RootState) => state.form.currentList)
  const navigate = useNavigate()

  const start = () => {
    navigate('/sorteio')
  }

  return (
    <FooterContainer>
      <IconButton hideonmobile={hideonmobile} src="images/play-icone.png" />
      <Button disabled={namesList.length < 3} onClick={start}>
        Iniciar brincadeira!
      </Button>
      <img src="images/sacola.png" alt="" />
    </FooterContainer>
  )
}

export default Footer
