import "./styles.css";

const Article = () => {
  return (
      <article className="article">
        <h2 className="article__title">Spain</h2>
        <label htmlFor="input">Input:</label>
        <input id="input" type="text" />
        <a className="article__link" href="https://en.wikipedia.org/wiki/Spain"></a>
      </article>
  )
}

export default function App() {
  return <Article />;
}
