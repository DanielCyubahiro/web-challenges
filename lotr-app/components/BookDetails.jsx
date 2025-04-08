import Link from "next/link";

const BookDetails = ({ volume }) => {
  return (
    <>
      <Link href={"/volumes"}>
        ← All Volumes
      </Link>
      <h1>
        {volume?.title}
      </h1>
      <p>
        {volume?.description}
      </p>
      <ul>
        {volume?.books.map(book => (
          <li key={book.ordinal}>
            <p>Ordinal:{book.ordinal}</p>
            <p>Title:{book.title}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
export default BookDetails;