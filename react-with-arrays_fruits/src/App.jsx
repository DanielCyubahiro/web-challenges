import Card from './components/Card';

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: '🍌 Banana',
      color: 'yellow',
    },
    {
      id: 1338,
      name: '🍎 Apple',
      color: 'red',
    },
    {
      id: 1339,
      name: '🍊 Orange',
      color: 'orange',
    },
    {
      id: 1340,
      name: '🍇 Grapes',
      color: 'purple',
    },
    {
      id: 1341,
      name: '🍓 Strawberry',
      color: 'red',
    }];

  return (
      <div className="app">
        {
          fruits.map(fruit => (
              <Card fruit={fruit} key={fruit.id}/>
          ))
        }
      </div>
  );
}
