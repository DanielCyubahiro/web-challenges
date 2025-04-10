import Image from 'next/image';
import {useRouter} from 'next/router';
import {volumes} from '@/lib/data';
import {BookContainer} from '@/components/BookContainer';
import {List} from '@/components/List';
import {Key} from '@/components/Key';
import {Property} from 'components/Property';
import ArrowLeft from '@/design-resources/arrow-left.svg';
import ArrowRight from '@/design-resources/arrow-right.svg';
import ChevronLeft from '@/design-resources/chevron-left.svg';
import {StyledLink} from '@/components/StyledLink';
import {NavContainer} from '@/components/NavContainer';
import {PageContainer} from 'components/PageContainer';
import {MainContainer} from '@/components/MainContainer';

export default function VolumeDetail() {
  const router = useRouter();
  const {slug} = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  if (!volume) {
    return null;
  }

  const {title, description, cover, books} = volume;

  return (
      <PageContainer>
        <MainContainer>
          <StyledLink href="/volumes">
            <NavContainer>
              <ChevronLeft/>All Volumes
            </NavContainer>
          </StyledLink>
          <h1>{title}</h1>
          <p>{description}</p>
        </MainContainer>
        <BookContainer $backgroundColor={volume.color}>
          <List>
            {books.map(({ordinal, title}) => (
                <li key={title}>
                  <Key>
                    {ordinal}
                  </Key>
                  <Property $fontWeight={'bold'}>
                    {title}
                  </Property>
                </li>
            ))}
          </List>
          <Image
              src={cover}
              alt={`Cover image of ${title}`}
              width={140}
              height={230}
          />
        </BookContainer>
        <MainContainer>
        {previousVolume ? (
            <div>
              <StyledLink href={`/volumes/${previousVolume.slug}`}>
                <NavContainer $align={'left'}>
                  <ArrowLeft/>
                  <div>
                    <Key>
                      Previous Volume
                    </Key>
                    <Property>
                      {previousVolume.title}
                    </Property>
                  </div>
                </NavContainer>
              </StyledLink>
            </div>
        ) : null}
        {nextVolume ? (
            <div>
              <StyledLink href={`/volumes/${nextVolume.slug}`}>
                <NavContainer $align={'right'}>
                  <div>
                    <Key>
                      Next Volume
                    </Key>
                    <Property>
                      {nextVolume.title}
                    </Property>
                  </div>
                  <ArrowRight/>
                </NavContainer>
              </StyledLink>
            </div>
        ) : null}
        </MainContainer>
      </PageContainer>
  );
}
