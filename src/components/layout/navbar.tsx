import React, { useState, useEffect } from 'react';

import {
  Autocomplete,
  Center,
  Group,
  Header,
  Menu,
  Drawer,
  createStyles,
  rem,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
// Icon
import { IconSearch } from '@tabler/icons-react';
import GlobalSVG from '../atoms/icons/Global';
import HeartSVG from '../atoms/icons/Heart';
import PersonSVG from '../atoms/icons/Person';
import ShopSVG from '../atoms/icons/Shop';
import DropDownNavBar from '../organisms/dropDownNavBar';
import Hamburger_ic from '../atoms/icons/hamburger';
import Search_IC from '../atoms/icons/search';
import useProductStore from '../../store/productStore';

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
  // show and hide items in page
  const [shouldShowButton, setShouldShowButton] = useState(true);
  const [opened, { toggle }] = useDisclosure(false);
  const { classes } = useStyles();

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

  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger='hover'
          transitionProps={{ exitDuration: 0 }}
          withinPortal
          openDelay={200}
          closeDelay={230}
        >
          <Menu.Target>
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
                <IconChevronDown size='0.9rem' stroke={1.5} />
              </Center>
            </a>
          </Menu.Target>
          <Menu.Dropdown>
            <DropDownNavBar />
          </Menu.Dropdown>
        </Menu>
      );
    }
  });
  const { products } = useProductStore();

  return (
    <>
      <div className='header sticky bg-white top-0 left-0 z-[100] mt-4'>
        <div className='container px-4 mx-auto'>
          <nav className='grid grid-cols-[1fr,auto,1fr] items-center gap-[1.6rem] w-full h-11 mb-5 mx-0'>
            {/* category */}
            {/* Drop Down */}
            <div className='flex items-center nav-link ms-[-0.3rem]'>
              {shouldShowButton || (
                <>
                  <a href='#' className=' mx-[1.2rem]  active'>
                    Wonan
                  </a>
                  <a href='#' className=' mx-[1.2rem]'>
                    Men
                  </a>
                  <a href='#' className=' mx-[1.2rem]'>
                    Kids
                  </a>
                  <a href='#' className=' mx-[1.2rem]'>
                    Beauty
                  </a>
                </>
              )}

              {!shouldShowButton || (
                <div className='flex gap-4 '>
                  <button className='w-6 h-6 ' onClick={open}>
                    <Hamburger_ic />
                  </button>

                  <button className='w-6 h-6 '>
                    <Search_IC />
                  </button>
                </div>
              )}
            </div>

            <a href='/' className='w-[12rem] h-6 grid items-center col-[2]'>
              {/* <LogoSVG /> */}
            </a>

            <div className='flex justify-end items-center me-[-0.4rem]'>
              {shouldShowButton || (
                <>
                  <button className='w-11 h-11   flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray '>
                    <GlobalSVG />
                  </button>
                  <button className='w-11 h-11  flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'>
                    <PersonSVG />
                  </button>
                </>
              )}

              <a
                href='#'
                className='w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'
              >
                <HeartSVG />
              </a>
              <a
                href='#'
                className='w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray'
              >
                <ShopSVG />
                {products.length}
              </a>
            </div>
          </nav>
        </div>
        {/* hide navbar in > 1010px */}
        {shouldShowButton || (
          <Header height={56} className={classes?.header} mb={120}>
            <div className='container px-4 mx-auto'>
              <div className={classes.inner}>
                <Group spacing={5} className={classes.links}>
                  {items}
                </Group>
                {/* search */}
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
        )}

        <Drawer opened={openedSideBar} onClose={close} title='Authentication'>
          hello
        </Drawer>
      </div>
    </>
  );
};

export default NavbarSection;
