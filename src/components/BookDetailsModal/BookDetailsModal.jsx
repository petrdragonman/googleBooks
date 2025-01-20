import Button from "../Button/Button";
import classes from "./BookDetailsModal.module.scss";

const BookDetailsModal = ({ setIsModal, book }) => {
  console.log(book);
  const handleClick = () => {
    setIsModal(false);
  };
  return (
    <article className={classes.wrapper}>
      <section className={classes.modal}>
        <section className={classes.card}>
          <span className={classes.close} onClick={handleClick}>&times;</span>
          <span className={classes.title}>{book.title}</span>
          <section className={classes.authors}>
            {book.authors.map((author) => (
              <span className={classes.author} key={author}>
                {author}
              </span>
            ))}
          </section>
          {book.image && <img src={book.image.thumbnail} alt="book image" />}
          <section className={classes.extras}>
            <span className={classes.item}>Publisher: {book.publisher}</span>
            <span className={classes.item}>{book.publishedDate}</span>
            {/* <span className={classes.item}>{book.pageCount}</span> */}
            <span className={classes.item}>{book.country}</span>
          </section>
          <span className={classes.description}>{book.description}</span>
          <Button onClick={handleClick}>CLOSE</Button>
        </section>
      </section>
      
    </article>
  );
};

export default BookDetailsModal;