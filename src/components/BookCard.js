import React, { useState, useEffect } from 'react';
import axios from 'axios';

import OrderForm from './oder'
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from './loading'

import { FaChevronRight } from "react-icons/fa";


const Bookstore = () => {
    const [books, setBooks] = useState([]);
    const [user, setUser] = useState([]);
    const [orders, setOrders] = useState([]);
    const [popUp, setpopUp] = useState([])
    const [popUptoggle, setpopUptoggle] = useState(false)

    const [hasMore, setHasMore] = useState(true);
    const [index, setIndex] = useState(1);

   


    useEffect(() => {
        fetchBooks();
        fetchUsers();
        fetchOrders();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/books?offset=10&limit=12');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const fetchMoreData = () => {
        axios
            .get(`http://localhost:8000/api/books?offset=${index}0&limit=12`)
            .then((response) => {

                if (books.length < 50 && books.length != 0) {
                    setTimeout(() => {
                        setBooks((prevItems) => [...prevItems, ...response.data]);
                    }, 2000)
                } else {
                    setHasMore(false)
                }
            })
            .catch((err) => console.log(err));

        setIndex((prevIndex) => prevIndex + 1);
    };

    const fetchUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/users/1');
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/orders');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const content = (book) => {
        setpopUp([book])
        setpopUptoggle(!popUptoggle)
    }

    const [searchVal, setSearchVal] = useState("");
    const [filters, setFilters] = useState([]);

    const handleSearchClick = () => {
        if (searchVal.trim() === "") {
            setFilters(books);
        } else {
            const filteredBooks = books.filter(book =>
                book.title.toLowerCase().includes(searchVal.toLowerCase())
            );
            setFilters(filteredBooks); // Update products with filtered books
        }
    };

    const orded = books.filter((book) => orders.some(order => order.book_id === book.id));

    console.log("reslt", orded)

    return (
        <div className='flex justify-between px-20 relative'>
            <div className='w-[25%]  stickyexample mt-16'>
            <div className='stickyexample my-16'>
                <h1 className='text-xl font-extrabold text-[#fff] p-4'>Why is it called a text book?</h1>
                <div className='mb-10'>
                    {orded.map((book) => (
                        <p onClick={() => content(book)} className='hover:bg-[#3f414b] px-4 py-2 flex items-center justify-between cursor-pointer'>
                            {book.title}
                            <FaChevronRight className=''/>
                        </p>
                    ))}
                </div>
            </div>

            <div className=' my-6'>
                <h1 className='text-xl font-extrabold text-[#fff] p-4'>List of Books orded</h1>
                <div className='px-4'>
                    <p>According to the OED, textbook derives from an obsolete sense of text, that is, text-hand: 1730 N. Bailey Dict. Britannicum (folio), Text-Book (in Universities) is a Classick Author written very wide by the Students, to give Room for an Interpretation dictated by the Master, &c. to be inserted in the Interlines.</p>
                </div>
            </div>

            </div>

            <div className="w-[70%]">
                <h1 className='my-16 text-3xl font-extrabold w-[60%]'>Bookstore</h1>

                <div className="search-container w-[50%]">
                    <input
                        onChange={(e) => { setSearchVal(e.target.value); handleSearchClick(); }}
                        type="text"
                        placeholder="Search books"
                        className="px-4 py-2 border border-gray-300 rounded-md"
                    />
                </div>

                <InfiniteScroll
                    dataLength={books.length}
                    next={fetchMoreData}
                    hasMore={hasMore}
                    loader={<Loading />}
                >
                    <div className="books-container flex justify-between flex-wrap">
                        {filters.map(book => (
                            <div key={book.id} onClick={() => content(book)} className="book-card cursor-pointer w-[25%] p-4 text-center border-solid border-2 border-sky-500 m-4">
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

                    <h1 className='text-xl font-extrabold my-10'>Explore more books</h1>
                        
                    <div className="books-container flex justify-between flex-wrap">
                        {books.map(book => (
                            <div key={book.id} onClick={() => content(book)} className="book-card cursor-pointer w-[25%] p-4 text-center border-solid border-2 border-sky-500 m-4">
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
                </InfiniteScroll>
            </div>

            {popUptoggle && (
                <div className='fixed top-0 left-0 w-full h-screen bg-[#ffffff] py-10 px-20' >
                    <a onClick={content} className=' hover:text-[#953535] text-xl m-2 cursor-pointer mb-10' >close</a>
                    <div className='bg-[#ffffff]' onClick={(e) => e.stopPropagation()}>
                        {popUp.map(book => (
                            <div className='flex'>
                                <div className='w-2/4 p-20'>
                                    <div className='w-[99%]'>
                                        <img src="https://images-na.ssl-images-amazon.com/images/I/51Ga5GuElyL._AC_SX184_.jpg" className='w-[40%]' alt={book.title} />
                                    </div>
                                    <h3 className='text-xl font-extrabold my-1'>{book.title}</h3>
                                    <p className='text-xl'>{book.writer}</p>
                                    <p className='text-[#953535] font-extrabold'>{book.point}</p>
                                    <p>{book.tag.join(', ')}</p>

                                    <p>Book ID: {book.id}</p>
                                </div>

                                <div className='w-2/4'>
                                    <div className='w-1/4 cursor-pointer'>
                                        <img src='/profile.png' alt='about' />
                                    </div>
                                    <div className='mb-10'>
                                        <p>{user.name}</p>
                                        <p>{user.email}</p>
                                        <p>Points: {user.points}</p>
                                        <p>User ID: {user.id}</p>
                                    </div>
                                    <OrderForm />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>)
            }
        </div>
    );
};

export default Bookstore;