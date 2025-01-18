import classes from './Button.module.scss';

const Button = ({
  children,
  variant,
  //   onClick,
  //   onPointerEnter,
  //   onPointerOut,
  ...rest
}) => {
  const btnClasses = [classes.button];

  if (variant) {
    btnClasses.push(classes[variant]);
  }

  return (
    <button
      //   onClick={onClick}
      //   onPointerEnter={onPointerEnter}
      //   onPointerOut={onPointerOut}
      {...rest}
      className={btnClasses.join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;