import {
  Autocomplete,
  Center,
  Drawer,
  Group,
  Header,
  HoverCard,
  Menu,
  Popover,
  Tabs,
  TextInput,
  createStyles,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Cookies from 'js-cookie';
import { IconChevronDown, IconSearch } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProductStore from '../../store/productStore';
import GlobalSVG from '../atoms/icons/Global';
import HeartSVG from '../atoms/icons/Heart';
import PersonSVG from '../atoms/icons/Person';
import ShopSVG from '../atoms/icons/Shop';
import Hamburger_ic from '../atoms/icons/hamburger';
import Search_IC from '../atoms/icons/search';
import DropDownNavBar from '../organisms/dropDownNavBar';
import DynamicNavbar from './DynamicNavbar';
import AuthinticationForm from '../../auth/AuthinticationForm';
import LogoSite_IC from '../atoms/image/LogoSite';
import CloseX_IC from '../atoms/icons/closeX';
import MainButton from '../atoms/mainButton';

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.black,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
  },

  linkLabel: {
    marginRight: rem(5),
  },
}));

interface HeaderSearchProps {
  links: {
    link: string;
    label: string;
    links: { link: string; label: string }[];
  }[];
}
// function Check the scrolling position
const setScrollingAttribute = () => {
  const scrolling = window.scrollY >= 10;

  if (scrolling) {
    document.body.setAttribute('scrolling', 'true');
  } else {
    document.body.removeAttribute('scrolling');
  }
};

const NavbarSection = ({ links }: HeaderSearchProps) => {
  // show sidebar in mid screen
  const [openedSideBar, { open, close }] = useDisclosure(false);
  const [openedSearch, { open: openSearch, close: closeSearch }] =
    useDisclosure(false);
  // show and hide items in page
  const [shouldShowButton, setShouldShowButton] = useState(true);

  const [opened, { toggle }] = useDisclosure(false);

  const [openUserInfo, setOpenUserInfo] = useState(false);

  // get cookie
  const user_token = Cookies.get('user_token');

  // login
  const [openedLogin, { open: openLogin, close: closeLogin }] =
    useDisclosure(false);

  const { classes } = useStyles();

  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    if (isChecked) {
      document.body.setAttribute('input-check', 'true');
    } else {
      document.body.removeAttribute('input-check');
    }
  }, [isChecked]);

  // Check the scrolling position when entering the page
  useEffect(() => {
    setScrollingAttribute();

    const handleScroll = () => {
      setScrollingAttribute();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // hide and show items in screens ⭐➡️ hide item in screens > 1010px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1011) {
        setShouldShowButton(false);
      } else {
        setShouldShowButton(true);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //  ⭐➡️End hide item in screens > 1010px

  const { products } = useProductStore();

  return (
    <>
      <div className='header sticky bg-white top-0 left-0 z-[100] mt-4'>
        <div className='container px-4 mx-auto'>
          <nav className='grid grid-cols-[1fr,auto,1fr] items-center gap-[1.6rem] w-full h-11 mb-5 mx-0'>
            {/* dynamic navigation */}
            <div className='flex items-center nav-link ms-[-0.3rem] drop-down-menu-navbar'>
              <Link to={`/`} className='mx-2 font-bold'>
                Home
              </Link>
              {/* {shouldShowButton || (
                <>
                  <Menu
                    key={''}
                    trigger='hover'
                    transitionProps={{ exitDuration: 0 }}
                    withinPortal
                    openDelay={200}
                    closeDelay={230}
                  >
                    <Menu.Target>
                      <a
                        href='#'
                        className={classes.link}
                        onClick={(event) => event.preventDefault()}
                      >
                        <Center>
                          <DynamicNavbar />
                       
                        </Center>
                      </a>
                    </Menu.Target>
                    <Menu.Dropdown>
                      <DropDownNavBar />
                    </Menu.Dropdown>
                  </Menu>
                </>
              )} */}

              <DynamicNavbar />

              {!shouldShowButton || (
                <div className='flex gap-4 '>
                  <button
                    className='w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'
                    onClick={open}
                  >
                    <Hamburger_ic />
                  </button>

                  <button className='w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'>
                    <Search_IC />
                  </button>
                </div>
              )}
            </div>

            <a
              href='/'
              className='w-[12rem] max-h-18 grid items-center col-[2]'
            >
              <LogoSite_IC />
            </a>

            <div className='flex justify-end items-center me-[-0.4rem]'>
              {shouldShowButton || (
                <>
                  <button
                    className='w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'
                    onClick={openSearch}
                  >
                    <Search_IC />
                  </button>

                  <button className='w-11 h-11   flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray '>
                    <GlobalSVG />
                  </button>

                  {/* start after login */}

                  {user_token && (
                    <Popover
                      width={300}
                      position='bottom'
                      withArrow
                      shadow='md'
                      opened={openUserInfo}
                      onChange={setOpenUserInfo}
                    >
                      <Popover.Target>
                        <div
                          className='flex  justify-center items-center cursor-pointer rounded-[0.8rem] hover:bg-hoverGray'
                          onClick={() => setOpenUserInfo((o) => !o)}
                        >
                          <button className='w-11 h-11  flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'>
                            <PersonSVG />
                          </button>
                          <span> Abdo elsk...</span>
                        </div>
                      </Popover.Target>
                      <Popover.Dropdown>
                        <div className='flex justify-between'>
                          <h2 className='text-[20px] font-medium'>
                            Abdo elsheikh
                          </h2>
                          <button
                            className='w-8 h-8 p-[6px] rounded-[0.4rem] hover:bg-[#f5f5f5]'
                            onClick={() => setOpenUserInfo(false)}
                          >
                            <CloseX_IC />
                          </button>
                        </div>

                        <ul className='w-full'>
                          <li>
                            <a href='#'> My Profile </a>
                          </li>
                          <li>
                            <a href='#'> Store Credits </a>
                          </li>
                          <li>
                            <a href='#'> My Orders </a>
                          </li>
                          <li>
                            <a href='#'> Returns </a>
                          </li>
                        </ul>

                        <div className='flex justify-end'>
                          <MainButton title='Sign Out' />
                        </div>
                      </Popover.Dropdown>
                    </Popover>
                  )}
                  {/* end after login */}

                  {/* start before login */}
                  {!user_token && (
                    <button
                      onClick={openLogin}
                      className='w-11 h-11  flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'
                    >
                      <PersonSVG />
                    </button>
                  )}
                  {/* end before login */}
                </>
              )}

              <a
                href='#'
                className='w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'
              >
                <HeartSVG />
              </a>
              <Link
                to='/checkout'
                className='w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'
              >
                <ShopSVG />
                {products.length}
              </Link>
            </div>
          </nav>
        </div>
        {/* hide navbar in > 1010px */}
        {/*
         */}

        {/* header and search */}
        {/*          
        {shouldShowButton || (
          <Header height={56} className={classes?.header} mb={120}>
            <div className='container px-4 mx-auto'>
              <div className={classes.inner}>
                <Group spacing={1} className={classes.links}></Group>
                
                <Autocomplete
                  className={classes.search}
                  placeholder='Search'
                  icon={<IconSearch size='1rem' stroke={1.5} />}
                  data={[
                    'React',
                    'Angular',
                    'Vue',
                    'Next.js',
                    'Riot.js',
                    'Svelte',
                    'Blitz.js',
                  ]}
                />
              </div>
            </div>
          </Header>
        )} */}

        {/* sideBar phone screen */}
        <Drawer
          opened={openedSideBar}
          onClose={close}
          position='left'
          size='100%'
        >
          hello
        </Drawer>

        {/* dropdown search */}

        <Drawer
          opened={openedSearch}
          onClose={closeSearch}
          position='top'
          overlayProps={{ opacity: 0.5, blur: 4 }}
          size='27%'
          className='drawer-search relative'
        >
          <div className='flex flex-col gap-6  w-[30%] items-center'>
            <button
              className='w-8 h-8 p-[6px] absolute right-[2%] rounded-[0.4rem] hover:bg-[#f5f5f5]'
              onClick={closeSearch}
            >
              <CloseX_IC />
            </button>
            <a
              href='/'
              className='w-[14rem] max-h-18 grid items-center col-[2] '
            >
              <LogoSite_IC />
            </a>

            <Tabs color='dark' defaultValue='Jewelry' className='w-full'>
              <Tabs.Panel value='Jewelry' pb='lg'>
                <div>
                  <TextInput
                    placeholder='Search Jewelry'
                    withAsterisk
                    icon={<Search_IC fill='#b6b6b6' />}
                  />
                </div>
              </Tabs.Panel>
              <Tabs.Panel value='Silver' pb='lg'>
                <div>
                  <TextInput
                    placeholder='Search Silver'
                    withAsterisk
                    icon={<Search_IC fill='#b6b6b6' />}
                  />
                </div>
              </Tabs.Panel>
              <Tabs.Panel value='Gifts' pb='lg'>
                <div>
                  <TextInput
                    placeholder='Search Gifts'
                    withAsterisk
                    icon={<Search_IC fill='#b6b6b6' />}
                  />
                </div>
              </Tabs.Panel>

              <Tabs.List>
                <Tabs.Tab value='Jewelry'>Jewelry</Tabs.Tab>
                <Tabs.Tab value='Silver'>Silver</Tabs.Tab>
                <Tabs.Tab value='Gifts'>Gifts</Tabs.Tab>
              </Tabs.List>
            </Tabs>
          </div>
        </Drawer>
        <AuthinticationForm openedLogin={openedLogin} closeLogin={closeLogin} />
      </div>
    </>
  );
};

export default NavbarSection;
