import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BookingPage from './pages/booking'
import RoomPage from './pages/roomPage'
import CustomerDashboard from './pages/customerDashboard'
import { dummyBookings } from "./pages/customerDashboard"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookingPage />} />
          <Route path="*" element={<BookingPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard bookings={dummyBookings} />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
