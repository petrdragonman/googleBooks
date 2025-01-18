import BookCard from "../BookCard/BookCard"

const BookList = ({booksData, setIsModal, setBookData}) => {
    return (
        <>
            {booksData.map((book) => (
                <BookCard key={book.id} book={book} setIsModal={setIsModal} setBookData={setBookData} />
            ))}
        </>
    );
};

export default BookList;