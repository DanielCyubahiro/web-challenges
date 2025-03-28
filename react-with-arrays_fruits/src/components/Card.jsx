import './Card.css';

export default function Card({fruit}) {
  return <p className="card" style={{background: fruit.color}}>{fruit.name}</p>;
}
