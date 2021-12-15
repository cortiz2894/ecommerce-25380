import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js'
import Footer from '../Footer/Footer'
import ContactPage from '../../pages/ContactPage/ContactPage';
import HomePage from '../../pages/HomePage/HomePage.js';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage'
import ItemDetailPage from '../../pages/ItemDetailPage/ItemDetailPage'
import CartPage from '../../pages/CartPage/CartPage'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/products/:id' element={<ItemDetailPage />} />
                <Route path='/about' element={<AboutUsPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/' element={<HomePage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
