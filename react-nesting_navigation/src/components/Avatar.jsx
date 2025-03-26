import Image from './Image.jsx';
import avatar from '../img/avatar.jpg';

const Avatar = () => {
  return (
      <button
          type="button"
          onClick={() => console.log('I could toggle a profile!')}
          aria-label="toggle profile"
      >
        <Image src={avatar} alt="avatar"/>
      </button>
  );
};
export default Avatar;