import { useEffect, useState } from "preact/hooks";
import { getBooks } from "../services/bookServices";

const BookLoader = () => {
    const [bookData, setBookData] = useState(null);
    const [error, setError] = useState(null);
    const [fetchStatus, setFetchStatus] = useState('PENDING');

    const fetchBook = () => {
        console.log('loading');
        setFetchStatus('LOADING');
        getBooks()
        .then((data) => {
            setFetchStatus('SUCCESS');
            setBookData(data);
        })
        .catch((e) => {
            console.log(e);
            setFetchStatus('FAILURE');
        });
    };

    useEffect(() => {
        fetchBook();
    }, []);

    return (
        <>
            {fetchStatus === 'LOADING' && <p>Loading ....</p>}
            {fetchStatus === 'FAILURE' && <p>{error.message}</p>}
            {fetchStatus === 'SUCCESS' && (
                <p>Success ....</p>
            )}
        </>
    );
};

export default BookLoader;