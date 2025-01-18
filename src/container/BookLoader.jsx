import { useEffect, useState } from "react";
import { getBooks } from "../services/bookServices";
import BookList from "../components/BookList/BookList";

const BookLoader = ({searchTerm, setIsModal, setBookData}) => {
    const [booksData, setBooksData] = useState(null);
    const [error, setError] = useState(null);
    const [fetchStatus, setFetchStatus] = useState('PENDING');
    // console.log(searchTerm);
    // console.log(typeof searchTerm);
    // const term = String(searchTerm);
    // console.log(term);
    // console.log(typeof term);

    const fetchBook = () => {
        setFetchStatus('LOADING');
        getBooks({searchTerm})
        .then((data) => {
            setFetchStatus('SUCCESS');
            setBooksData(data);
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
                <BookList booksData={booksData} setIsModal={setIsModal} setBookData={setBookData} />
            )}
        </>
    );
};

export default BookLoader;