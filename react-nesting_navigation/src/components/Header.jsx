import logo from '../img/logo.jpg';
import avatar from '../img/avatar.jpg';

const Header = ({children}) => {
  return (
      <header className="header">
        {children}
      </header>
  );
};
export default Header;