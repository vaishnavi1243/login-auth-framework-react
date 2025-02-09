import './App.css'
import LoginForm from './components/LoginForm/LoginForm'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
