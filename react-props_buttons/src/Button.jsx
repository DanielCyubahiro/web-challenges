const Button = ({color, text, isDisabled}) => {
  return (
      <button
          disabled={isDisabled}
          style={{
            backgroundColor: color,
            height: 50,
            width: 80,
            margin: 10,
          }}
      >
        {text ?? ''}
      </button>
  );
};
export default Button;