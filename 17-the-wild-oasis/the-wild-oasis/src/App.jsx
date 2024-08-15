import { BrowserRouter, Route, Routes } from "react-router-dom"
import DashBoard from "./pages/Dashboard"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='bookings' element={<Dashboard />} />
        <Route path='users' element={<Dashboard />} />
        <Route path='settings' element={<Dashboard />} />
        <Route path='account' element={<Dashboard />} />
        <Route path='login' element={<Dashboard />} />
        <Route path='*' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

expo<BrowserRrBrowserRouteruter>
  <Routes>
    <Route path='dashboard'  />
  </Routes>
</BrowserRruter>