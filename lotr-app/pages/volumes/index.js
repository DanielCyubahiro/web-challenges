import { introduction, volumes } from "@/resources/lib/data";
import Link from "next/link";

const Volumes = () => {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>
        {introduction}
      </p>
      <h2>All Volumes</h2>
      <ul>
        {volumes?.map(volume => {
            return (
              <li key={volume.slug}>
                <Link href={`/volumes/${volume.slug}`}>
                  {volume.title}
                </Link>
              </li>
            );
          },
        )}
      </ul>
    </>
  );
};
export default Volumes;