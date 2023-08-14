import { Box, Button, Group, LoadingOverlay, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { t } from "i18next";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { useMutate } from "../../hooks/useMutate";
import { notify } from "../../utils/notify";
import { PasswordInputField } from "../atoms/PasswordInput";
import { EditData_TP } from "../molecules/ProfileForm";

export type SignupForm_TP = {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
  password_confirmation: string;
};
type SignupProps_TP = {
  toggleModal?: () => void;
  setBtnState?: Dispatch<SetStateAction<number>>;
  editData?: EditData_TP;
};

export function Signup({ toggleModal, setBtnState, editData }: SignupProps_TP) {
  const navigate = useNavigate();

  const { isLoading, mutate } = useMutate({
    endpoint: "user/auth/register",
    formData: true,
    mutationKey: ["signup"],
    onSuccess: () => {
      notify("success", "_", "تم التسجيل بنجاح", "قم بتسجيل الدخول ");
      navigate("/");
      if (setBtnState) setBtnState(1);
    },
    onError: (err) => {
      notify("error", err);
    },
  });

  const form = useForm<SignupForm_TP>({
    initialValues: {
      first_name: editData?.data.data.first_name || "",
      last_name: editData?.data.data.last_name || "",
      email: editData?.data.data.email || "",
      phone: editData?.data.data.phone || "",
      password: "",
      password_confirmation: "",
    },
    validate: (values) => ({
      first_name: values.first_name.trim() !== "" ? null : t("required"),
      last_name: values.last_name.trim() !== "" ? null : t("required"),
      phone: values.phone.trim() !== "" ? null : t("required"),
      password:
        values.password.trim() !== "" && values.password.trim() !== ""
          ? null
          : t("required"),
      password_confirmation:
        values.password === values.password_confirmation &&
        values.password_confirmation.trim() !== ""
          ? null
          : t("not matched"),
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        values.email
      )
        ? null
        : "Invalid email",
    }),
  });

  return (
    <Box maw={300} mx="auto">
      <form
        onSubmit={form.onSubmit((values) => {
          editData
            ? mutate({ ...values, _method: "put" })
            : mutate(values as never);
        })}
      >
        <div
          className={editData ? "grid grid-cols-1 md:grid-cols-2 gap-2" : ""}
        >
          <LoadingOverlay visible={isLoading} overlayBlur={1} />
          <TextInput
            withAsterisk
            label={`${t("first name")}`}
            placeholder="first name"
            {...form.getInputProps("first_name")}
          />
          <TextInput
            withAsterisk
            label={`${t("last name")}`}
            placeholder="last name"
            {...form.getInputProps("last_name")}
          />
          <TextInput
            withAsterisk
            label={`${t("Email")}`}
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />
          <TextInput
            withAsterisk
            label={`${t("phone")}`}
            placeholder="phone"
            {...form.getInputProps("phone")}
          />
          {!editData && (
            <div className="col-span-2">
              <PasswordInputField<SignupForm_TP>
                form={form}
                className="w-full"
                showConfirm
              />
            </div>
          )}
        </div>
        <Group position="right" mt="md">
          <Button
            type="submit"
            className="flex mt-5 mr-auto bg-mainYellow hover:bg-subYellow text-mainBlue"
          >
            {editData ? t("Update") : t("Submit")}
          </Button>
        </Group>
      </form>
    </Box>
  );
}
