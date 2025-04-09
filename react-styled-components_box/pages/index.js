import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import {BoxWithStyledComponents} from '@/components/BoxWithStyledComponents';
import {BoxContainer} from '@/components/BoxContainer';

export default function HomePage() {
  return (
    <BoxContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </BoxContainer>
  );
}
