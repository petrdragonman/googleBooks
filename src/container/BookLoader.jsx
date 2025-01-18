import { useEffect, useState } from "react";
import { getBooks } from "../services/bookServices";
import BookList from "../components/BookList/BookList";

const BookLoader = (searchTerm) => {
    const [bookData, setBookData] = useState(null);
    const [error, setError] = useState(null);
    const [fetchStatus, setFetchStatus] = useState('PENDING');

    console.log("searchTerm - BookLoader: ", searchTerm);
    const fetchBook = () => {
        setFetchStatus('LOADING');
        getBooks(searchTerm)
        .then((data) => {
            setFetchStatus('SUCCESS');
            setBookData(data);
        })
        .catch((e) => {
            setFetchStatus('FAILURE');
            setError(e.message);
        });
    };

    useEffect(() => {
        fetchBook();
    }, [searchTerm]);

    return (
        <>
            {fetchStatus === 'LOADING' && <p>Loading ....</p>}
            {fetchStatus === 'FAILURE' && <p>{error.message}</p>}
            {fetchStatus === 'SUCCESS' && (
                <BookList bookData={bookData}/>
            )}
        </>
    );
};

export default BookLoader;