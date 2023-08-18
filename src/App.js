import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import BookCard from './components/BookCard';
import './App.css'; // Import your custom CSS

const App = () => {
  const [books, setBooks] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(`/api/books?page=${page}`);
      const newBooks = response.data;
      setBooks(prevBooks => [...prevBooks, ...newBooks]);
      setHasMore(newBooks.length > 0);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const response = await axios.get('/api/books?page=1');
      const newBooks = response.data;
      setBooks(newBooks);
      setPage(2);
    } catch (error) {
      console.error('Error refreshing books:', error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app-container">
      <h1>Bookstore</h1>
      <div className="refresh-control" onClick={handleRefresh}>
        {refreshing ? 'Refreshing...' : 'Pull to Refresh'}
      </div>
      <InfiniteScroll
        dataLength={books.length}
        next={fetchBooks}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
      >
        <div className="book-list">
          {books.map(book => (
            <BookCard
              key={book.id}
              title={book.title}
              discountRate={book.discountRate}
              coverImage={book.coverImage}
              price={book.price}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default App;
