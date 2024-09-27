import AddNamePage from 'pages/AddNamePage'
import DrawPage from 'pages/DrawPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AddNamePage />} />
        <Route path="/sorteio" element={<DrawPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
