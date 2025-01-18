import classes from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  return (
    <article className={classes.wrapper}>
        <section className={classes.card}>
            <span className={classes.title}>{book.title}</span>
            <span className={classes.author}>{book.authors[0]}</span>
            {book.image && <img src={book.image.thumbnail} alt="book image" />}
            <span className={classes.description}>{book.description}</span>
        </section>
    </article> 
  );
};

export default BookCard;

/**
 * return {
      id,  
      title,
      description,
      authors,
      image,
    };
 */