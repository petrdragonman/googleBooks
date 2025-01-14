import './app.scss'
import Heading from './components/Heading/Heading'
import SearchForm from './components/SearchForm/SearchForm'
import BookLoader from './container/BookLoader'
import { getBooks } from './services/bookServices'

export function App() {

  const onFormSubmit = (data) => {
    console.log('Form submitted', data);
  };

  return (
    <>
      <Heading />
      <SearchForm onFormSubmit={onFormSubmit} />
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
