import {StyledCardWrapper} from '@/components/CardWrapper';
import {StyledCardTitle} from '@/components/CardTitle';
import {StyledCardDescription} from '@/components/CardDescription';

export default function Card() {
  return (
      <StyledCardWrapper>
        <StyledCardTitle>Homer Simpson</StyledCardTitle>
        <StyledCardDescription>
          Homer Jay Simpson is a fictional character and the main protagonist of
          the American animated sitcom The Simpsons. He is voiced by Dan
          Castellaneta and first appeared, along with the rest of his family, in
          The Tracey Ullman Show short Good Night on April 19, 1987.
        </StyledCardDescription>
      </StyledCardWrapper>
  );
}
