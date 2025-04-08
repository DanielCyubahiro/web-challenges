import { volumes } from "@/resources/lib/data";
import BookDetails from "@/components/BookDetails";
import Image from "next/image";

const TheTwoTowers = () => {
  const currentVolume = volumes.find(
    (volume) => volume.slug === "the-two-towers");
  return (
    <>
      <BookDetails volume={currentVolume} />
      <Image
        src={currentVolume.cover}
        alt={currentVolume.title}
        width={140}
        height={230}
      />
    </>
  );
};

export default TheTwoTowers;