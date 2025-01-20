import { useEffect, useState } from "react";
import { getBooks } from "../services/bookServices";
import BookList from "../components/BookList/BookList";
import classes from './BookLoader.module.scss';

const BookLoader = ({searchTerm, setIsModal, setBookData}) => {
    const [booksData, setBooksData] = useState(null);
    const [error, setError] = useState(null);
    const [fetchStatus, setFetchStatus] = useState('PENDING');
    
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
            {fetchStatus === 'LOADING' && <p className={classes.loading}>Loading ....</p>}
            {fetchStatus === 'FAILURE' && <p className={classes.error}>{error.message}</p>}
            {fetchStatus === 'SUCCESS' && (
                <BookList booksData={booksData} setIsModal={setIsModal} setBookData={setBookData} />
            )}
        </>
    );
};

export default BookLoader;