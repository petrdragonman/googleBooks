import classes from './Heading.module.scss';


const Heading = () => {
    const appDescriptionText = "Welcome to this simple book search application powered by the Google Books API. This user-friendly tool allows you to explore a vast library of books with ease."
    // const appDescriptionText = [
    //     "Welcome to this simple book search application powered by the Google Books API!",
    //     "This user-friendly tool allows you to explore a vast library of books with ease.",
    //     "Here's how you can use it:",
    //     "Search by book title: Simply enter the title of the book you're looking for in the search bar.",
    //     "Search by author: Type in the author's name to discover their works."
    // ]
    return (
        <article className={classes.wrapper}>
            <span className={classes.appTitle}>Google Books</span>
            <span className={classes.appDescription}>{appDescriptionText}</span>
        </article>
    );
};

export default Heading;