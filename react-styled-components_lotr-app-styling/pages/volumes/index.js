import {introduction, volumes} from '@/lib/data';
import {PageContainer} from '@/components/PageContainer';
import {MainContainer} from '@/components/MainContainer';
import {StyledLink} from '@/components/StyledLink';
import Image from 'next/image';
import {BookCollection} from '@/components/BookCollection';

export default function Volumes() {
  return (
      <PageContainer>
        <MainContainer>
          <h1>The Lord of the Rings</h1>
          <p>{introduction}</p>
          <h2>All Volumes</h2>
          <BookCollection>
            {volumes.map((volume) => (
                <li key={volume.slug} style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  flexDirection: 'column',
                  maxWidth: '100%'
                }}>
                  <Image
                      src={volume.cover}
                      alt={`Cover image of ${volume.title}`}
                      width={70}
                      height={120}
                  />
                  <StyledLink
                      href={`/volumes/${volume.slug}`}>{volume.title}</StyledLink>
                </li>
            ))}
          </BookCollection>
        </MainContainer>
      </PageContainer>
  );
}
