import { Radio, TextInput } from "@mantine/core";
import { useState } from "react";

import MainButton from "../atoms/mainButton";
import SecondaryButton from "../atoms/secondaryButton";
import useFetch from "../../hooks/UseFetch";

export default function Deposit({ closeModal }: any) {
  const [amount, setAmount] = useState("vodafone_cash");

  const handleSubmitForm = (event) => {
    event.preventDefault();

    return;
  };
  const { data: payment } = useFetch({
    endpoint: `payment-methods`,
    queryKey: [`payment-methods`],
  });
  console.log("🚀 ~ file: Deposit.tsx:20 ~ Deposit ~ payment:", payment);
  return (
    <>
      <Radio.Group
        name="favoriteFramework"
        label="Choose Your Payment Methode"
        // description="This is anonymous"
        // withAsterisk
        value={amount}
        onChange={setAmount}
      >
        <div className="grid grid-cols-12 gap-5 mt-4">
          {payment?.data?.map((methode) => (
            <div className="flex items-center justify-between col-span-6 p-5 py-6 shadow-md shadow-style-x2 rounded-3xl ">
              <div>
                <img
                  src={methode?.image}
                  alt=""
                  className="w-[50px] h-[50px] "
                />
              </div>
              <div className="flex items-center ">
                <p className="mx-2">{methode?.name}</p>
              </div>
              <Radio value={methode?.name} label="" className="flex justify-end !w-[20%]" />
            </div>
          ))}
        </div>
      </Radio.Group>
      <div className="flex justify-between gap-5 mt-5 ">
        <MainButton title="Confirm" />

        <SecondaryButton title="Back" action={closeModal} />
      </div>
    </>
  );
}
