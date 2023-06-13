import './index.css'
import Home from './pages/home/home'
import { BrowserRouter } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
      <Home></Home>
    </BrowserRouter>
  )
}
