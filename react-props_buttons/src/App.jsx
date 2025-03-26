import Button from './Button.jsx';

export default function App() {
  return (
      <section style={{display: 'flex', flexDirection: 'column'}}>
        <Button color='green'/>
        <Button color='green' text='Green Button'/>
        <Button color='green' text='Green Button' isDisabled/>

        <Button color='red'/>
        <Button color='red' text='Red Button'/>
        <Button color='red' text='Red Button' isDisabled/>
      </section>
  );
}
