import { useRef } from 'preact/hooks';
import classes from './SearchForm.module.scss';

const SearchForm = ({onFormSubmit})=> {
    console.log("in form");
    const formRef = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;
        const formData = new FormData(form);
        const formValues = Object.fromEntries(formData.entries());
        console.log(formValues);
        onFormSubmit(formValues);
        form.reset();
    };

    return (
        <form className={classes.form} ref={formRef} onSubmit={handleSubmit}>
            <div className={classes.field}>
                <input type="text" name="search" id='searchInput' className={classes.searchText} />
                <input type="image" src="../../../public/search.svg" alt="search icon" className={classes.searchImg} name="submit" />
            </div>
        </form>
    );
};

export default SearchForm;