import classes from './Heading.module.scss';


const Heading = () => {
    return (
        <article className={classes.wrapper}>
            <p className={classes.appTitle}>Google Books</p>
            <p className={classes.appDescription}>You can search on book title or author.</p>
        </article>
    );
};

export default Heading;