import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useAuth } from "../../utils/auth/AuthProvider";
import { useTheme } from "../../utils/theme/ThemeProvider";

const RootLayout = () => {
  const { user } = useAuth();
  const { colorScheme, toggleColorScheme } = useTheme();
  const navigate = useNavigate();
  const [showSignupState, setShowSignupState] = useState(false);

  useEffect(() => {
    if (user) {
      navigate("/");
      setShowSignupState(false);
    } else setShowSignupState(true);
  }, [user]);

  return (
    <>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{ colorScheme: colorScheme }}
        >
          <Notifications />
          <Outlet />
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

export default RootLayout;
