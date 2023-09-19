import {
  Accordion,
  Drawer,
  Popover,
  Tabs,
  TextInput,
  createStyles,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthinticationForm from '../../auth/AuthinticationForm';
import useProductStore from '../../store/productStore';
import GlobalSVG from '../atoms/icons/Global';
import HeartSVG from '../atoms/icons/Heart';
import PersonSVG from '../atoms/icons/Person';
import ShopSVG from '../atoms/icons/Shop';
import CloseX_IC from '../atoms/icons/closeX';
import Hamburger_ic from '../atoms/icons/hamburger';
import Search_IC from '../atoms/icons/search';
import LogoSite_IC from '../atoms/image/LogoSite';
import MainButton from '../atoms/mainButton';
import SecondaryButton from '../atoms/secondaryButton';
import DynamicNavbar from './DynamicNavbar';
import { useAuth } from '../../utils/auth/AuthProvider';
import useFetch from '../../hooks/UseFetch';
import NavbarSkeleton from '../sections/Skeleton/NavbarSkeleton';
import SidebarSkeleton from '../sections/Skeleton/SidebarSkeleton';

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

const NavbarSection = () => {
  // show sidebar in mid screen
  const [openedSideBar, { open, close }] = useDisclosure(false);
  const [openedSearch, { open: openSearch, close: closeSearch }] =
    useDisclosure(false);
  // show and hide items in page
  const [shouldShowButton, setShouldShowButton] = useState(true);

  const [openUserInfo, setOpenUserInfo] = useState(false);

  // get cookie
  const user_token = Cookies.get('user_token');
  console.log(
    '🚀 ~ file: navbar.tsx:102 ~ NavbarSection ~ user_token:',
    user_token
  );

  // login
  const [openedLogin, { open: openLogin, close: closeLogin }] =
    useDisclosure(false);

  // const [isChecked, setIsChecked] = useState(true);

  // useEffect(() => {
  //   if (isChecked) {
  //     document.body.setAttribute('input-check', 'true');
  //   } else {
  //     document.body.removeAttribute('input-check');
  //   }
  // }, [isChecked]);

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

  // hide and show items in screens ⭐➡️ hide item in screens > 992px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
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

  //  ⭐➡️End hide item in screens > 992px

  const { products } = useProductStore();

  const { logout, user } = useAuth();
  const { data: Navs, isLoading: NavsLoading } = useFetch({
    endpoint: `categories`,
    queryKey: [`Navbar_dynamic`],
  });

  return (
    <>
      {NavsLoading ? (
        <NavbarSkeleton />
      ) : (
        <div className='header sticky bg-white top-0 left-0 z-[100] '>
          <div className='container px-4 mx-auto'>
            <nav className='grid grid-cols-[1fr,auto,1fr] items-center gap-[1.6rem] w-full h-11 mb-5 mx-0 py-[5px]'>
              {/* dynamic navigation */}
              <div className='flex items-center nav-link ms-[-0.3rem] drop-down-menu-navbar'>
                {shouldShowButton || (
                  <>
                    <Link to={`/`} className='mx-2 font-bold'>
                      Home
                    </Link>

                    <DynamicNavbar />
                  </>
                )}

                {!shouldShowButton || (
                  <div className='flex '>
                    <button
                      className='w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'
                      onClick={open}
                    >
                      <Hamburger_ic />
                    </button>

                    <button
                      className='w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'
                      onClick={openSearch}
                    >
                      <Search_IC />
                    </button>
                  </div>
                )}
              </div>

              <a
                href='/'
                className='w-[12rem] phone-screen:!w-[10rem] xs-m:!w-[7rem] max-h-18 grid items-center col-[2]'
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
                            <span> {user?.username?.split(' ')[0]}</span>
                          </div>
                        </Popover.Target>
                        <Popover.Dropdown>
                          <div className='flex justify-between'>
                            <h2 className='text-[16px] font-bold'>
                              {user?.username}
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
                              <Link
                                to='/profile'
                                onClick={() => setOpenUserInfo(false)}
                              >
                                My Profile{' '}
                              </Link>
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
                            <MainButton
                              title='Sign Out'
                              action={() => logout()}
                            />
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

          <Drawer
            opened={openedSideBar}
            onClose={close}
            position='left'
            size='45%'
            className='relative sidebar-menu'
          >
            <div className='relative flex items-center'>
              <button
                className='w-8 h-8 p-[6px] absolute right-[2%] rounded-[0.4rem] hover:bg-[#f5f5f5]'
                onClick={close}
              >
                <CloseX_IC />
              </button>

              <a
                href='/'
                className='w-full max-w-[8rem] max-h-18 grid items-center col-[2] '
              >
                <LogoSite_IC />
              </a>
            </div>

            <div className='mt-4'>
              {NavsLoading ? (
                <SidebarSkeleton />
              ) : (
                <Tabs color='dark' defaultValue={Navs?.data[0].name}>
                  <Tabs.List>
                    {Navs?.data?.map((nav: any) => (
                      <Tabs.Tab value={nav?.name}>
                        <Link
                          to={{ pathname: `/${nav?.name}/${nav.id}` }}
                          className='mx-2'
                        >
                          {nav?.name}
                        </Link>
                      </Tabs.Tab>
                    ))}
                  </Tabs.List>
                  {Navs?.data?.map((nav: any) => (
                    <Tabs.Panel value={nav?.name} pt='xs'>
                      <h2 className='pt-[10px] px-[5px] text-[20px]'>
                        Gifts category
                      </h2>
                      <ul className='grid gap-1 mt-2 '>
                        {nav.childreen.map((item: any) => (
                          <li
                            className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'
                            onClick={close}
                          >
                            <Link to={`/${item?.name}/${item?.id}`}>
                              {item?.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </Tabs.Panel>
                  ))}
                </Tabs>
              )}
            </div>

            <div className='mt-8'>
              <h2 className='pt-[10px] px-[5px] text-[20px]'>My Account</h2>
              {user_token && (
                <>
                  <Accordion variant='filled' className='dropdown-user-info'>
                    <Accordion.Item value='customization'>
                      <Accordion.Control>
                        {' '}
                        <h2 className='text-[20px] font-medium flex gap-2'>
                          <PersonSVG />
                          Abdo elsheikh
                        </h2>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <ul className='w-full'>
                          <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                            <a href='#'> My Profile </a>
                          </li>
                          <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                            <a href='#'> Store Credits </a>
                          </li>
                          <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                            <a href='#'> My Orders </a>
                          </li>
                          <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                            <a href='#'> Returns </a>
                          </li>
                        </ul>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>

                  <div className='flex justify-end'>
                    <SecondaryButton title='Sign Out' className='w-full' />
                  </div>
                </>
              )}

              {!user_token && (
                <>
                  <div className='flex flex-col gap-4 py-4'>
                    <div className='flex justify-end'>
                      <MainButton title='Sign In' className='w-full' />
                    </div>
                    <div className='flex justify-end'>
                      <SecondaryButton title='Register' className='w-full' />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div>
              <h2 className='pt-[10px] px-[5px] text-[20px] mb-2'>
                Language and region
              </h2>

              <Accordion className='dropdown-language-info'>
                <Accordion.Item value='customization'>
                  <Accordion.Control>
                    {' '}
                    <h2 className='text-[15px]  flex gap-2'>
                      <GlobalSVG />
                      <div>
                        <h3>English (American)</h3>
                        <span>Language</span>
                      </div>
                    </h2>
                  </Accordion.Control>
                  <Accordion.Panel>
                    <ul className='w-full'>
                      <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                        <a href='#'>English (American)</a>
                      </li>
                      <li className='py-[10px] px-[16px] hover:bg-[#f5f5f5] cursor-pointer'>
                        <a href='#'>العربية</a>
                      </li>
                    </ul>
                  </Accordion.Panel>
                </Accordion.Item>
              </Accordion>
            </div>
          </Drawer>

          {/* dropdown search */}

          <Drawer
            opened={openedSearch}
            onClose={closeSearch}
            position='top'
            overlayProps={{ opacity: 0.5, blur: 4 }}
            size='27%'
            className='relative drawer-search'
          >
            <div className='flex flex-col gap-6  w-[30%] mid-screen:w-[65%] phone-screen:!w-[95%] items-center'>
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
          <AuthinticationForm
            openedLogin={openedLogin}
            closeLogin={closeLogin}
          />
        </div>
      )}
    </>
  );
};

export default NavbarSection;
