import Footer from 'components/Footer'
import Form from 'components/Form'
import Header from 'components/Header'
import NamesList from 'components/NamesList'
import { Card, Title } from 'styles/GlobalComponents'

const AddNamePage = () => {
  return (
    <>
      <Header />
      <Card>
        <Title>Vamos começar!</Title>
        <Form />
        <NamesList />
        <Footer hideonmobile={true} />
      </Card>
    </>
  )
}

export default AddNamePage
