import { Modal, Tabs, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import MainButton from "../components/atoms/mainButton";
import Login from "./Login";
import Regester from "./Regester";

export default function AuthinticationForm({ openedLogin, closeLogin }: any) {
  const form = useForm({
    initialValues: {
      email: "",
      //   termsOfService: false,
    },

    validate: {
      //   email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const HandleForgotPassword = () => {
    setForgotTab(true);
  };

  // ChangeState When Click Forget => hide item
  const [forgotTab, setForgotTab] = useState(false);
  return (
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
          <Login  closeLogin={closeLogin}/>
        </Tabs.Panel>

        <Tabs.Panel value="im new here" pt="xs">
          <Regester />
        </Tabs.Panel>

        <Tabs.Panel value="forgot password" pt="xs">
          <div className="grid gap-6">
            <div>
              <p>
                Enter your email address and we'll send you a link to reset your
                password
              </p>
            </div>

            <div>
              <TextInput placeholder="Email address" label="Email address" />
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
  );
}
