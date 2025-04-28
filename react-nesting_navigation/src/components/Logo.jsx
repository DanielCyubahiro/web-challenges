import Image from './Image.jsx';
import logo from '../img/logo.jpg';
import Link from './Link.jsx';

const Logo = () => {
  return (
      <Link href="#">
        <Image src={logo} alt="logo"/>
      </Link>
  );
};
export default Logo;