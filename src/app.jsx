import { useState } from 'preact/hooks'
import './app.scss'
import Heading from './components/Heading/Heading'
import SearchForm from './components/SearchForm/SearchForm'
import BookLoader from './container/BookLoader'
import BookDetailsModal from './components/BookDetailsModal/BookDetailsModal'

export function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModal, setIsModal] = useState(false);
  const [bookData, setBookData] = useState(null);

  return (
    <>
      <Heading />
      <SearchForm setSearchTerm={setSearchTerm} />
      { searchTerm !== null && searchTerm !== '' && <BookLoader searchTerm={searchTerm} setIsModal={setIsModal} setBookData={setBookData} /> }
      {isModal && (
        <BookDetailsModal setIsModal={setIsModal} book={bookData} />
      )}
    </>
  )
}