import { ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '../../utils/auth/AuthProvider';
import { useTheme } from '../../utils/theme/ThemeProvider';
import NavbarSection from '../layout/navbar';
import FooterSection from '../layout/footer';

const RootLayout = () => {
  const { user } = useAuth();
  const { colorScheme, toggleColorScheme } = useTheme();
  const navigate = useNavigate();
  const [showSignupState, setShowSignupState] = useState(false);

  // useEffect(() => {
  //   if (user) {
  //     navigate('/');
  //     setShowSignupState(false);
  //   } else setShowSignupState(true);
  // }, [user]);

  const linksData = [
    {
      link: '/new',
      label: 'New in',
      links: [
        { link: '/new/arrivals', label: 'New Arrivals' },
        { link: '/new/season', label: 'New Season' },
      ],
    },
    // {
    //   link: '/brands',
    //   label: 'Brands',
    //   links: [
    //     { link: '/brands/nike', label: 'Nike' },
    //     { link: '/brands/adidas', label: 'Adidas' },
    //     { link: '/brands/puma', label: 'Puma' },
    //   ],
    // },
    // {
    //   link: '/clothing',
    //   label: 'Clothing',
    //   links: [
    //     { link: '/clothing/tops', label: 'Tops' },
    //     { link: '/clothing/dresses', label: 'Dresses' },
    //     { link: '/clothing/pants', label: 'Pants' },
    //   ],
    // },
    // {
    //   link: '/shoes',
    //   label: 'Shoes',
    //   links: [
    //     { link: '/shoes/sneakers', label: 'Sneakers' },
    //     { link: '/shoes/boots', label: 'Boots' },
    //     { link: '/shoes/sandals', label: 'Sandals' },
    //   ],
    // },
    // {
    //   link: '/bags',
    //   label: 'Bags',
    //   links: [
    //     { link: '/bags/handbags', label: 'Handbags' },
    //     { link: '/bags/backpacks', label: 'Backpacks' },
    //     { link: '/bags/totes', label: 'Totes' },
    //   ],
    // },
    // {
    //   link: '/accessories',
    //   label: 'Accessories',
    //   links: [
    //     { link: '/accessories/jewelry', label: 'Jewelry' },
    //     { link: '/accessories/hats', label: 'Hats' },
    //     { link: '/accessories/scarves', label: 'Scarves' },
    //   ],
    // },
    // {
    //   link: '/jewellery',
    //   label: 'Jewellery',
    //   links: [
    //     { link: '/jewellery/necklaces', label: 'Necklaces' },
    //     { link: '/jewellery/bracelets', label: 'Bracelets' },
    //     { link: '/jewellery/rings', label: 'Rings' },
    //   ],
    // },
    // {
    //   link: '/homeware',
    //   label: 'Homeware',
    //   links: [
    //     { link: '/homeware/decor', label: 'Decor' },
    //     { link: '/homeware/kitchen', label: 'Kitchen' },
    //     { link: '/homeware/furniture', label: 'Furniture' },
    //   ],
    // },
  ];

  return (
    <>
      {/* Import NavBar */}
      <NavbarSection links={linksData} />

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: colorScheme }}
        >
          <Notifications position='top-right' />
          <Outlet />
        </MantineProvider>
      </ColorSchemeProvider>

      <FooterSection />
    </>
  );
};

export default RootLayout;
