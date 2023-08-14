import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../utils/auth/AuthProvider";
import { useTheme } from "../../utils/theme/ThemeProvider";
import { Navbar } from "../molecules/Navbar";
import { ScrollToTopBtn } from "../atoms/ScrollToTopBtn";
import Footer from "../molecules/Footer";


export const ProtectedRoute = () => {
  const { user } = useAuth();
  const { colorScheme, toggleColorScheme } = useTheme();


  if (!user) {
    return <Navigate to="/home" />;
  }

// theme section 
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            {/* <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}> */}
            {/* <Navbar/> */}
            {/* <Outlet /> */}
            {/* <Footer/> */}
            <ScrollToTopBtn/>
            {/* </MantineProvider> */}
        </ColorSchemeProvider>
  );
};