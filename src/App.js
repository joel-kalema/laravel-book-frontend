import React, { useState, useEffect } from 'react';
import BookCard from './components/BookCard';
import HomePage from './components/homePage';
import FooterWithSitemap from './components/footer'

const App = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/api/books')
            .then(response => response.json())
            .then(data => setBooks(data.data))
            .catch(error => console.error('Error fetching books:', error));
    }, []);

    const handleOrder = (bookId) => {
        const userId = 1; // Assuming a fixed user ID for simplicity, replace with actual user ID
        fetch('/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: userId,
                book_id: bookId,
            }),
        })
        .then(response => {
            if (response.ok) {
                alert('Order placed successfully!');
                // Optionally, you can update the UI to reflect the order status
            } else {
                alert('Failed to place order. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error placing order:', error);
            alert('An error occurred while placing the order. Please try again later.');
        });
    };

    return (
        <div className="App">
          <HomePage />

            <BookCard />
            
            {/* <FooterWithSitemap /> */}
        </div>
    );
}

export default App;
