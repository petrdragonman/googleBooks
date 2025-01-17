import classes from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  return (
    <article className={classes.wrapper}>
        <section className={classes.card}>
            <span className={classes.title}>{book.title}</span>
            <span className={classes.description}>{book.description}</span>
        </section>
    </article> 
  );
};

export default BookCard;
