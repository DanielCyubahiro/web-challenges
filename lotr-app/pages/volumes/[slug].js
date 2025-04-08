import { volumes } from "@/resources/lib/data";
import BookDetails from "@/components/BookDetails";
import Image from "next/image";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);
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

export default Slug;