export default function Counter({ setNumberOfPeople, numberOfPeople }) {

  const handleIncrement = () => {
    setNumberOfPeople(numberOfPeople + 1)
  }

  const handleDecrement = () => {
    setNumberOfPeople(numberOfPeople - 1)
  }
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={handleIncrement}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </>
  );
}
