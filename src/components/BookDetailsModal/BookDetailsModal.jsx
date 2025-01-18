import classes from "./BookDetailsModal.module.scss";

const BookDetailsModal = ({ setIsModal, book}) => {
    const handleClick = () => {
        setIsModal(false);
    }
  return (
    <article className={classes.wrapper}>
        <section className={classes.card}>
            <span className={classes.title}>{book.title}</span>
            <section className={classes.authors}>
              {book.authors.map((author) => (<span className={classes.author} key={author}>{author}</span>))}
            </section>
            {book.image && <img src={book.image.thumbnail} alt="book image" />}
            <span className={classes.description}>{book.description}</span>
            <button onClick={handleClick}>close</button>
        </section>
    </article> 
  );
};

export default BookDetailsModal;


/**
 * <article className={classes.wrapper}>
      <p className={classes.title}>This is a modal</p>
      <button onClick={handleClick}>close</button>
    </article>
 */