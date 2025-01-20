import { useRef, useState } from 'preact/hooks';
import classes from './SearchForm.module.scss';

const SearchForm = ({setSearchTerm})=> {
    const [searchValues, setSearchValues] = useState('');
    const formRef = useRef(null);

    const handleChange = (e) => {
        setSearchValues(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = formRef.current;
        setSearchTerm(searchValues);
        form.reset();
    };

    return (
        <form className={classes.form} ref={formRef} onSubmit={handleSubmit}>
            <div className={classes.field}>
                <input type="text" name="search" id='searchInput' className={classes.searchText} onChange={handleChange} required/>
                <input type="image" src="../search.svg" alt="search icon" className={classes.searchImg} name="submit" />
            </div>
        </form>
    );
};

export default SearchForm;