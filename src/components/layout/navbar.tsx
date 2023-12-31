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
import SaudiArabia_IC from '../atoms/icons/saudiArabia';
import EuropeFlag_IC from '../atoms/icons/EuropeFlag';

import ImageCheckOut from '../../assets/images/20996106_51004058_170.webp';
import { useIsRTL } from '../../hooks/useIsRTL';
import { useTranslation } from 'react-i18next';
import { Settings } from '../Settings';
import { t } from 'i18next';

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
  const [openLanguage, setOpenLanguage] = useState(false);
  const [openCartShopping, setOpenCartShopping] = useState(false);

  // get cookie
  const user_token = Cookies.get('user_token');

  // login
  const [openedLogin, { open: openLogin, close: closeLogin }] =
    useDisclosure(false);

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

  const { products, removeProduct, totalPrice } = useProductStore();
  console.log(
    '🚀 ~ file: navbar.tsx:156 ~ NavbarSection ~ products:',
    products
  );

  const { logout, user } = useAuth();
  const { data: Navs, isLoading: NavsLoading } = useFetch({
    endpoint: `categories`,
    queryKey: [`Navbar_dynamic`],
  });

  const isRTL = useIsRTL();
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = isRTL ? 'ar' : 'en';
  }, [isRTL]);
  const toggleLang = () => {
    i18n.changeLanguage(isRTL ? 'en' : 'ar');
    setOpenLanguage(false);
    window.location.reload(); // إعادة تحميل الصفحة
  };
  const removeSingleProductAndLocalStorage = (productId) => {
    // استدعاء دالة removeProduct من مخزن السلة لإزالة المنتج
    removeProduct(productId);

    // الحصول على المنتجات المحدثة بعد الحذف من مخزن السلة
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
  };
  return (
    <>
      {NavsLoading ? (
        <NavbarSkeleton />
      ) : (
        <div className='header sticky bg-white top-0 left-0 z-[100] '>
          <div className='container px-4 mx-auto'>
            <nav className='grid grid-cols-[1fr,auto,1fr] items-center gap-[1.6rem] w-full h-11 mb-5 s-500:!mb-0 mx-0 py-[5px] s-500:flex s-500:justify-between s-500:h-max'>
              {/* dynamic navigation */}
              <div className='flex items-center nav-link ms-[-0.3rem] drop-down-menu-navbar'>
                {shouldShowButton || (
                  <>
                    <Link to={`/`} className='mx-2 font-bold'>
                      {t('Home')}
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
                className='w-[9.5rem] s-500:!w-[9rem] phone-screen:!w-[10rem] xs-m:!w-[7rem] max-h-18 grid items-center col-[2]'
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

                    {/* Change Language */}
                    <Popover
                      width={300}
                      position='bottom'
                      withArrow
                      shadow='md'
                      opened={openLanguage}
                      onChange={setOpenLanguage}
                    >
                      <Popover.Target>
                        <div
                          className='flex  justify-center items-center cursor-pointer rounded-[0.8rem] hover:bg-hoverGray'
                          onClick={() => setOpenLanguage((o) => !o)}
                        >
                          <button className='w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray '>
                            <GlobalSVG />
                          </button>
                        </div>
                      </Popover.Target>
                      <Popover.Dropdown>
                        <div className='flex justify-between'>
                          <h2 className='text-[14px] font-bold'>
                            {t('Choose Language')}
                          </h2>
                          <button
                            className='w-8 h-8 p-[6px] rounded-[0.4rem] hover:bg-[#f5f5f5]'
                            onClick={() => setOpenLanguage(false)}
                          >
                            <CloseX_IC />
                          </button>
                        </div>

                        <ul className='w-full'>
                          <li
                            className='text-center font-bold cursor-pointer hover:bg-[#f5f5f5]'
                            onClick={toggleLang}
                          >
                            العربية
                          </li>
                          <hr />
                          <li
                            className='text-center font-bold cursor-pointer hover:bg-[#f5f5f5]'
                            onClick={toggleLang}
                          >
                            English
                          </li>
                        </ul>
                      </Popover.Dropdown>
                    </Popover>

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
                              {user?.username && user.username.length > 24
                                ? user.username.substring(0, 24) + '...'
                                : user?.username}
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
                                {t('My Profile')}
                              </Link>
                            </li>
                            <li>
                              <a href='#'>{t('Account credit')}</a>
                            </li>
                            <li>
                              <a href='#'>{t('My Orders')}</a>
                            </li>
                            <li>
                              <a href='#'>{t('Returns')}</a>
                            </li>
                          </ul>

                          <div className='flex justify-end'>
                            <MainButton
                              title={t('Sign Out')}
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

                <Link
                  to='/favorite'
                  className='w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'
                >
                  <HeartSVG />
                </Link>

                <Popover
                  width={350}
                  position='bottom'
                  withArrow
                  shadow='md'
                  opened={openCartShopping}
                  onChange={setOpenCartShopping}
                >
                  <Popover.Target>
                    <div
                      className='w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray cursor-pointer'
                      onClick={() => setOpenCartShopping((o) => !o)}
                    >
                      <ShopSVG />
                      {products.length}
                    </div>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <div className='flex flex-col gap-6'>
                      <div className='grid grid-cols-2'>
                        <h2 className='text-[14px] '>
                          {t('Total')} :{' '}
                          <span className='font-bold'>{totalPrice} </span>
                        </h2>

                        <h2 className='text-[14px] flex justify-end'>
                          {t('Piece')} :{' '}
                          <span className='font-bold px-[5px]'>
                            {' '}
                            {products?.length} {t('items')}
                          </span>
                        </h2>
                      </div>

                      <div className='w-full'>
                        <MainButton
                          title={t('go to checkout')}
                          className='w-full uppercase'
                        />
                      </div>

                      {!products.length ? (
                        <p className='m-auto text-center'>
                          {' '}
                          There are no products
                        </p>
                      ) : (
                        <div className='max-h-[18rem] overflow-y-scroll grid gap-4'>
                          {products.map((item) => (
                            <div className='grid grid-cols-12 gap-2'>
                              <span className='col-span-3'>
                                <img src={item?.image} alt='bag' />
                              </span>
                              <div className='col-span-9'>
                                <h5>{item?.name}</h5>
                                <div className='grid grid-cols-12'>
                                  <h4 className='col-span-11 font-bold'>
                                    SA {item?.price}
                                  </h4>
                                  <span
                                    className='font-bold text-red-600 cursor-pointer'
                                    onClick={() =>
                                      removeSingleProductAndLocalStorage(
                                        item?.id
                                      )
                                    }
                                  >
                                    X
                                  </span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className='w-full'>
                        <Link
                          to='/checkout'
                          onClick={() => setOpenCartShopping(false)}
                        >
                          <SecondaryButton
                            title={t('view and edit cart')}
                            className='w-full uppercase'
                          />
                        </Link>
                      </div>
                    </div>
                  </Popover.Dropdown>
                </Popover>
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
            size='max-content'
            className='relative drawer-search '
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
