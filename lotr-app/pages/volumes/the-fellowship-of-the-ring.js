import { volumes } from "@/resources/lib/data";
import BookDetails from "@/components/BookDetails";
import Image from "next/image";

const TheFellowshipOfTheRing = () => {
  const currentVolume = volumes.find((volume) => volume.slug === "the-fellowship-of-the-ring");
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

export default TheFellowshipOfTheRing;