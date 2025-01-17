import BookCard from "../BookCard/BookCard"

const BookList = ({bookData}) => {
    return (
        <>
            {bookData.map((book) => (
                <BookCard key={book.id} book={book} />
            ))}
        </>
    );
};

export default BookList;