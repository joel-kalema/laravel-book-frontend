import React from 'react';
import BookCard from './components/BookCard';
import HomePage from './components/homePage';
import FooterWithSitemap from './components/footer'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {

    return (
        <div className="App">
            <Router>
                <HomePage />
                <BookCard />
                <FooterWithSitemap />
                <Routes>
                    {/* <Route path="/books/:bookId" element={<Profile />} />
                    <Route path="/books/:bookId" element={<Profile />} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
