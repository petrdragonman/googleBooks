import { useState } from 'preact/hooks'
import './app.scss'
import Heading from './components/Heading/Heading'
import SearchForm from './components/SearchForm/SearchForm'
import BookLoader from './container/BookLoader'

export function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const onFormSubmit = async (data) => {
    console.log('Form submitted', data);
    setSearchTerm(data);
  };

  return (
    <>
      <Heading />
      <SearchForm onFormSubmit={onFormSubmit} />
      {/* { searchTerm && <p>{searchTerm}</p>} */}
      {/* { searchTerm !== null && searchTerm !== '' && <BookLoader searchTerm={searchTerm} /> } */}
    </>
  )
}

/**
 * 
 * Header section introducing the page
	•	Form containing a text input and a submit / search button
	•	A grid of books Instructions:
	•	When the submit button is clicked you need the request books from the Google books API using the input value as your query string
	•	The books that you receive should be rendered in the books grid.
	•	Each book in the grid should have an image, author, title and description
	•	The grid should be responsive on different screen sizes

 */


  /**
   * https://console.cloud.google.com/apis/api/books.googleapis.com/metrics?project=searchengine-447712
   */
