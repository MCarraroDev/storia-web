import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import TimelinePage from './components/TimelinePage'
import './App.css'

function App() {
  return (
    <Router basename="/storia-web">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
