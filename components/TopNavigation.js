import {
  FaSearch,
  FaHashtag,
  FaRegBell,
  FaUserCircle,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import useDarkMode from '../hooks/useDarkMode';
import { useSession } from "next-auth/react"
import Image from 'next/image';
const TopNavigation = () => {

  let userImage
  const { data: session, status } = useSession()
  if (session) {
    userImage = session.user.image;
  }
  return (
    <div className='top-navigation fixed'>
      {/* <HashtagIcon /> */}
      {/* <div className=''> */}
        <Title />
      {/* </div> */}
      {/* <div className='@apply flex justify-items-end'> */}
        <BellIcon />
        <Search />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {(session) ? <img src={userImage} alt="User Image" height='40' width='40' className='rounded-3xl mr-5' /> : <UserCircle />}
      {/* </div> */}
    </div>
  );
};

// const ThemeIcon = () => {
//   // const [darkTheme, setDarkTheme] = useDarkMode();
//   // let darkTheme = false;
//   const handleMode = () => setDarkTheme(!darkTheme);
//   return (
//     <span onClick={handleMode}>
//       {/* {darkTheme ? (
//         <FaSun size='24' className='top-navigation-icon' />
//       ) : (
//         <FaMoon size='24' className='top-navigation-icon' />
//       )} */}
//     </span>
//   );
// };

const Search = () => (
  <div className='search'>
    <input className='search-input' type='text' placeholder='Search...' />
    <FaSearch size='18' className='text-secondary my-auto' />
  </div>
);
const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
// const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
const Title = () => <h5 className='title-text'>{new Date().toLocaleString("en-US", { month: "long" })}, {new Date().toLocaleString("en-US", { day: '2-digit' })}</h5>;

export default TopNavigation;