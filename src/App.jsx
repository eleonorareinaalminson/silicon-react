import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import NotFound from './pages/NotFound'
import FeaturesPage from './pages/FeaturesPage'

function App() {

  return ( 
      <BrowserRouter>
       <div className="wrapper">
        <Header />
        <main>
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/features" element={<FeaturesPage />} />
           <Route path="/contact" element={<ContactPage />} />
           <Route path="*" element={<NotFound />} />
         </Routes>
        </main>
        <Footer />
       </div>
     </BrowserRouter>
  )
}

export default App
