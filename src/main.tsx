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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AuthLayout />}>
        <Route element={<RootLayout />}>
          <Route path='/' element={<Home />} />
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
