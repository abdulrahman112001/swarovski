import {
  Autocomplete,
  Center,
  Drawer,
  Group,
  Header,
  Menu,
  Modal,
  PasswordInput,
  Tabs,
  TextInput,
  createStyles,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import useProductStore from "../../store/productStore";
import GlobalSVG from "../atoms/icons/Global";
import HeartSVG from "../atoms/icons/Heart";
import PersonSVG from "../atoms/icons/Person";
import ShopSVG from "../atoms/icons/Shop";
import CheckFalse from "../atoms/icons/checkFalse";
import CheckTrue from "../atoms/icons/checkTrue";
import MainButton from "../atoms/mainButton";
import SecondaryButton from "../atoms/secondaryButton";
import PasswordRequirementInput from "../molecules/PasswordRequirement";
import DropDownNavBar from "../organisms/dropDownNavBar";
import Hamburger_ic from "../atoms/icons/hamburger";
import Search_IC from "../atoms/icons/search";
import DynamicNavbar from "./DynamicNavbar";

const useStyles = createStyles((theme) => ({
  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
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
    document.body.setAttribute("scrolling", "true");
  } else {
    document.body.removeAttribute("scrolling");
  }
};

const NavbarSection = ({ links }: HeaderSearchProps) => {
  // handle Email
  const [emailValue, setEmailValue] = useState("");
  // handle Password
  const [handlePassword, setHandlePassword] = useState("");

  // handle Name Register
  const [registerName, setRegisterName] = useState("");

  // handle Email Register
  const [registerEmail, setRegisterEmail] = useState("");

  // Forgot Password
  const [forgotPassword, setForgotPassword] = useState("");

  // ChangeState When Click Forget => hide item
  const [forgotTab, setForgotTab] = useState(false);

  const HandleForgotPassword = () => {
    setForgotTab(true);
  };

  // show sidebar in mid screen
  const [openedSideBar, { open, close }] = useDisclosure(false);
  // show and hide items in page
  const [shouldShowButton, setShouldShowButton] = useState(true);

  const [opened, { toggle }] = useDisclosure(false);

  // login
  const [openedLogin, { open: openLogin, close: closeLogin }] =
    useDisclosure(false);

  const { classes } = useStyles();

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event: any) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    if (isChecked) {
      document.body.setAttribute("input-check", "true");
    } else {
      document.body.removeAttribute("input-check");
    }
  }, [isChecked]);

  // Check the scrolling position when entering the page
  useEffect(() => {
    setScrollingAttribute();

    const handleScroll = () => {
      setScrollingAttribute();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
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
          trigger="hover"
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
                <IconChevronDown size="0.9rem" stroke={1.5} />
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
      <div className="header sticky bg-white top-0 left-0 z-[100] mt-4">
        <div className="container px-4 mx-auto">
          <nav className="grid grid-cols-[1fr,auto,1fr] items-center gap-[1.6rem] w-full h-11 mb-5 mx-0">
            {/* dynamic navigation */}
            <div className="flex items-center nav-link ms-[-0.3rem]">
              {shouldShowButton || (
                <>
                  <DynamicNavbar/>
                </>
              )}

              {!shouldShowButton || (
                <div className="flex gap-4 ">
                  <button className="w-6 h-6 " onClick={open}>
                    <Hamburger_ic />
                  </button>

                  <button className="w-6 h-6 ">
                    <Search_IC />
                  </button>
                </div>
              )}
            </div>

            <a href="/" className="w-[12rem] h-6 grid items-center col-[2]">
              {/* <LogoSVG /> */}
            </a>

            <div className="flex justify-end items-center me-[-0.4rem]">
              {shouldShowButton || (
                <>
                  <button className="w-11 h-11   flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray ">
                    <GlobalSVG />
                  </button>
                  <button
                    onClick={openLogin}
                    className="w-11 h-11  flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray"
                  >
                    <PersonSVG />
                  </button>
                </>
              )}

              <a
                href="#"
                className="w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray"
              >
                <HeartSVG />
              </a>
              <Link
                to="/checkout"
                className="w-11 h-11 flex justify-center items-center rounded-[0.8rem] hover:bg-hoverGray"
              >
                <ShopSVG />
                {products.length}
              </Link>
            </div>
          </nav>
        </div>
        {/* hide navbar in > 1010px */}
        {shouldShowButton || (
          <Header height={56} className={classes?.header} mb={120}>
            <div className="container px-4 mx-auto">
              <div className={classes.inner}>
                <Group spacing={5} className={classes.links}>
                  {/* {items} */}
                </Group>
                {/* search */}
                <Autocomplete
                  className={classes.search}
                  placeholder="Search"
                  icon={<IconSearch size="1rem" stroke={1.5} />}
                  data={[
                    "React",
                    "Angular",
                    "Vue",
                    "Next.js",
                    "Riot.js",
                    "Svelte",
                    "Blitz.js",
                  ]}
                />
              </div>
            </div>
          </Header>
        )}

        <Drawer opened={openedSideBar} onClose={close} title="Authentication">
          hello
        </Drawer>

        <Modal
          opened={openedLogin}
          onClose={closeLogin}
          title={forgotTab ? "Forgot your password?" : `Come on in`}
          centered
          size="md"
        >
          <Tabs color="dark" defaultValue="sign in">
            {forgotTab || (
              <Tabs.List>
                <Tabs.Tab value="sign in">
                  <h2 className="uppercase text-[17px]">sign in</h2>
                </Tabs.Tab>
                <Tabs.Tab value="im new here">
                  <h2 className="uppercase text-[17px]">i&#39;m new here</h2>
                </Tabs.Tab>
              </Tabs.List>
            )}

            <Tabs.Panel value="sign in" pt="xs">
              <div className="grid gap-2">
                <TextInput
                  placeholder="Email address"
                  label="Email address"
                  value={emailValue}
                  onChange={(event) => setEmailValue(event.currentTarget.value)}
                />
                <PasswordInput
                  placeholder="Password"
                  label="Password"
                  value={handlePassword}
                  onChange={(event) =>
                    setHandlePassword(event.currentTarget.value)
                  }
                />

                <div className="relative flex w-fit New-input-checked">
                  <input
                    type="checkbox"
                    className="absolute opacity-0 cursor-pointer"
                    onChange={handleCheckboxChange}
                  />
                  <CheckFalse />
                  <CheckTrue />

                  <p>Keep me signed in.</p>
                </div>

                <div>
                  <Tabs.Tab value="forgot password" pt="xs">
                    <p className="underline" onClick={HandleForgotPassword}>
                      Forgot your password?
                    </p>
                  </Tabs.Tab>

                  <MainButton title="Sign In" className="w-full" />
                </div>

                <p className="text-center uppercase">or</p>

                <SecondaryButton
                  title="Continue With Google"
                  className="w-full"
                />
                <SecondaryButton
                  title="Continue With Apple"
                  className="w-full"
                />
                <SecondaryButton
                  title="Continue With Facebook"
                  className="w-full"
                />

                <Tabs.Tab value="im new here">
                  <h2 className="uppercase text-[17px] underline">
                    New to FarFETCH? Register.
                  </h2>
                </Tabs.Tab>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="im new here" pt="xs">
              <div className="grid gap-2">
                <TextInput
                  placeholder="Your Name"
                  label="Name"
                  onChange={(event) =>
                    setRegisterName(event.currentTarget.value)
                  }
                />
                <TextInput
                  placeholder="Email address"
                  label="Email address"
                  onChange={(event) =>
                    setRegisterEmail(event.currentTarget.value)
                  }
                />

                <PasswordRequirementInput />

                <div>
                  <p className="text-[14px]">
                    By registering, you agree to our{" "}
                    <a href="#" className="underline">
                      Terms & Conditions, Privacy and Cookie Policy,
                    </a>
                    and to join our loyalty programme
                  </p>
                </div>

                <div className="flex">
                  <div className="relative flex w-fit New-input-checked">
                    <input
                      type="checkbox"
                      className="absolute opacity-0 cursor-pointer"
                      onChange={handleCheckboxChange}
                    />
                    <CheckFalse />
                    <CheckTrue />
                  </div>

                  <p className="text-[14px]">
                    Sign up and never miss out on exclusive member rewards,
                    tailored new arrivals and new launches. Unsubscribe at the
                    bottom of our emails.
                  </p>
                </div>

                <div>
                  <MainButton title="Rigister" className="w-full" />
                </div>

                <p className="text-center uppercase">or</p>

                <SecondaryButton
                  title="Continue With Google"
                  className="w-full"
                />
                <SecondaryButton
                  title="Continue With Apple"
                  className="w-full"
                />
                <SecondaryButton
                  title="Continue With Facebook"
                  className="w-full"
                />
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="forgot password" pt="xs">
              <div className="grid gap-6">
                <div>
                  <p>
                    Enter your email address and we'll send you a link to reset
                    your password
                  </p>
                </div>

                <div>
                  <TextInput
                    placeholder="Email address"
                    label="Email address"
                    onChange={(event) =>
                      setForgotPassword(event.currentTarget.value)
                    }
                  />
                </div>

                <div className="grid gap-4">
                  <MainButton title="Reset Password" className="w-full" />
                  <Tabs.Tab value="sign in" className="w-full border-none">
                    <h2
                      className="uppercase text-[17px]"
                      onClick={() => setForgotTab(false)}
                    >
                      Back to Sigh In
                    </h2>
                  </Tabs.Tab>
                </div>
              </div>
            </Tabs.Panel>
          </Tabs>
        </Modal>
      </div>
    </>
  );
};

export default NavbarSection;
