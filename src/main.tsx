import { Loader } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import RootLayout from './components/auth-unauth-routes/RootLayout.tsx';
import './i18n.ts';
import './index.css';
import './styles/style.css';
import Home from './pages/Home.tsx';
import UnAuthorized from './pages/UnAuthorized.tsx';
import { AuthLayout } from './utils/auth/AuthLayout.tsx';
import { ThemeProvider } from './utils/theme/ThemeProvider.tsx';
import ViewProduct from './components/sections/product-details/viewProduct.tsx';
import CheckOutProduct from './components/sections/checkout/checkout.tsx';
import Pages from './Pages.tsx';
import ProfileSettings from './components/sections/profile/ProfileSettings.tsx';
import ShowProduct from './components/sections/all-product/ShowProduct.tsx';
import ContactUsPage from './components/sections/contact-us/contactUs.tsx';
import FaqsPage from './components/sections/faqs/faqsPage.tsx';
import ReturnsAndRefunds from './components/sections/Returns-refunds/ReturnsRefund.tsx';
import FavoritePage from './pages/FavoritePage.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/:id/:id' element={<Pages />} />
          <Route path='/product-details/:id' element={<ViewProduct />} />
          <Route path='/' element={<CheckOutProduct />} />
          <Route path='/product-detail' element={<ViewProduct />} />
          <Route path='/checkout' element={<CheckOutProduct />} />
          <Route path='/profile' element={<ProfileSettings />} />
          <Route path='/show-product' element={<ShowProduct />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/faqs' element={<FaqsPage />} />
          <Route path='/refund-policy' element={<ReturnsAndRefunds />} />
          <Route path='/favorite' element={<FavoritePage />} />

        </Route>
        <Route path='*' element={<UnAuthorized />} />
      </Route>
    </>
  )
);

const queryClient = new QueryClient();
// const dir = window.localStorage.getItem('dir')
// dir === 'ltr' ? document.body.setAttribute('dir', 'ltr') : document.body.setAttribute('dir', 'rtl')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <ThemeProvider>
      <Suspense
        fallback={
          <Loader
            color='#0A2357'
            className='h-screen flex justify-center items-center w-[50px] mx-auto'
          />
        }
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} position='bottom-left' />
        </QueryClientProvider>
      </Suspense>
    </ThemeProvider>
  </>
);
