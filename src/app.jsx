import './app.scss'
import BookLoader from './container/BookLoader'
import { getBooks } from './services/bookServices'

export function App() {

  return (
    <>
      <h2>Welcome</h2>
      {/* <button onClick={ () => getBooks }>Search</button> */}
      <BookLoader />
    </>
  )
}
