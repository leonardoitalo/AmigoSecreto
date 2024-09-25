import AddNamePage from 'pages/AddNamePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AddNamePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
