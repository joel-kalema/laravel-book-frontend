import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bookstore = () => {
    const [books, setBooks] = useState([]);
    const [popUp, setpopUp] = useState([])
    const [popUptoggle, setpopUptoggle] = useState(false)


    useEffect(() => {
        fetchBooks();
    }, []);

    const content = (book) => {
        setpopUp([book])
    setpopUptoggle(!book)
    }

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    return (
        <div>
            <h1>Bookstore</h1>
            <div className="books-container w-[60%] mx-auto flex justify-between flex-wrap">
                {books.map(book => (
                    <div key={book.id} onClick={() => content(book)} className="book-card w-[25%] p-4 text-center border-solid border-2 border-sky-500 m-4">
                        <div>
                            <div className='w-[60%] mx-auto'>
                                <img src="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg" alt={book.title} />
                            </div>
                            <h3 className='text-sm font-extrabold my-1'>{book.title}</h3>
                            <p className='text-xs'>{book.writer}</p>
                            <p className='text-[#953535] font-extrabold'>{book.point}</p>
                            <p>{book.tag.join(', ')}</p>
                        </div>
                    </div>
                ))}
            </div>

             {popUptoggle && (
                <div onClick={content} className='fixed left-0 top-0 w-full h-screen bg-[#191d28ea] py-20 flex justify-center items-center exp backdrop-blur-xl' >
                    <div className='bg-[#1b212f] w-2/5 shadow-xl' >
                        <a  onClick={content} className=' hover:text-[#ffd175] text-xl m-2 cursor-pointer flex w-1/6' >close</a>
                        {popUp.map(book => (
                            <div>
                            <div className='w-[60%] mx-auto'>
                                <img src="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg" alt={book.title} />
                            </div>
                            <h3 className='text-sm font-extrabold my-1'>{book.title}</h3>
                            <p className='text-xs'>{book.writer}</p>
                            <p className='text-[#953535] font-extrabold'>{book.point}</p>
                            <p>{book.tag.join(', ')}</p>
                        </div>
                        ))}
                    </div>
                </div>)
            }
        </div>
    );
};

export default Bookstore;