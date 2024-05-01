import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        user_id: '',
        book_id: ''
    });

    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/orders', formData);
            console.log('Order created:', response.data);
            // Reset form data after successful submission
            setFormData({
                user_id: '',
                book_id: ''
            });

            setMessage("Order deleted successfully")
            
            setTimeout(()=> {
                setMessage(" ")
            }, 2000)

        } catch (error) {
            console.error('Error creating order:', error);
            setMessage("Order not found");

            setTimeout(()=> {
                setMessage(" ")
            }, 2000)
        }
    };

    return (
        <div className='w-1/4'>
            <h2>Create Order</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>User ID:</label>
                    <input
                        type="number"
                        name="user_id"
                        value={formData.user_id}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Book ID:</label>
                    <input
                        type="number"
                        name="book_id"
                        value={formData.book_id}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className='bg-[#a3b1ff] px-3 py-2 mt-6'>Create Order</button>

                <p>{message}</p>
            </form>
        </div>
    );
};

export default OrderForm;