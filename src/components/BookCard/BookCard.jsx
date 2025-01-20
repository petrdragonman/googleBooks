import classes from "./BookCard.module.scss";
import Button from "../Button/Button";

const BookCard = ({ book, setIsModal, setBookData }) => {
  const handleOnClick = () => {
    setBookData(book);
    setIsModal(true);
  };

  return (
    <article className={classes.wrapper}>
        <section className={classes.card}>
            <span className={classes.title}>{book.title}</span>
            <section className={classes.authors}>
              {book.authors.map((author) => (<span className={classes.author} key={author}>{author}</span>))}
            </section>
            {book.image && <img src={book.image.thumbnail} alt="book image" />}
            <span className={classes.description}>{book.description}</span>
            <Button className={classes.button} onClick={handleOnClick} >
              more details
            </Button>
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