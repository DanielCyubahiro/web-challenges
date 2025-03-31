import Counter from "./components/Counter";
import "./styles.css";
import {useState} from 'react';

export default function App() {
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter setNumberOfPeople={setNumberOfPeople} numberOfPeople={numberOfPeople} />
      <p>You are going to reserve a table for {numberOfPeople} people.</p>
    </div>
  );
}
