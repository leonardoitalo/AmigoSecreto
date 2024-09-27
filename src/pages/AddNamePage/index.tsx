import Footer from 'components/Footer'
import Form from 'components/Form'
import NamesList from 'components/NamesList'
import { Card, Title } from 'styles/GlobalComponents'

const AddNamePage = () => {
  return (
    <>
      <Card>
        <Title>Vamos começar!</Title>
        <Form />
        <NamesList />
        <Footer />
      </Card>
    </>
  )
}

export default AddNamePage
