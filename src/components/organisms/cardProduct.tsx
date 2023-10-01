import { Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { t } from "i18next";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthinticationForm from "../../auth/AuthinticationForm";
import { select_size } from "../../helper/data";
import useProductStore from "../../store/productStore";
import { useAuth } from "../../utils/auth/AuthProvider";
import { notify } from "../../utils/notify";
import HeartFill from "../atoms/icons/HeartFill";
import HeartUnFill from "../atoms/icons/HeartUnFill";
import SecondaryButton from "../atoms/secondaryButton";
import { useMutate } from "../../hooks/useMutate";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

const ProductCard = ({ imageUrl, item, size, buy }: any) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const optionsSelect = select_size.map((item) => ({
    value: item.id,
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "10px" }}>{item?.size}</span>
        {item?.available ? <span>{`last ${item.available} left`}</span> : null}
      </div>
    ),
  }));

  const handleSelectChange = (value: any) => {
    setSelectedSize(value);
  };

  const afterStyles = {
    "--custom-background-image": `url(${imageUrl})`,
  };
  const { products, addProduct } = useProductStore();

  const [openedCheckOut, { open: openCheckOut, close: closeCheckOut }] =
    useDisclosure(false);
  const [openedLogin, setOpenedLogin] = useState(false);
  const { user } = useAuth();
  const [isFavorited, setFavorited] = useState(item?.isFavourite);
  const queryClient = useQueryClient();
  const { mutate: postData } = useMutate({
    endpoint: "product/favorite-unfavorite",
    formData: true,
    mutationKey: ["product_favorit"],
    onSuccess: () => {
      notify(
        !isFavorited ? "info": "success",
        "_",
        `${
          !isFavorited
            ? t("Remove from favorites")
            : t("Added to favorites")
        }`
      );
      queryClient.invalidateQueries('all_favourites');
    },
    onError: () => {
      notify("error");
    },

    // Query
  });
  // useEffect(() => {
  //   setFavorited(!isFavorited)
  // }, [postData , isFavorited])

  return (
    <>
      <div className="relative">
        <Link to={`/product-details/${item?.id}#top`}>
          <div className="newin-cards">
            <div
              className="mw-[370px]"
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              //@ts-ignore
              style={afterStyles}
            >
              {/* show */}
              <img src={item?.hover_image} alt="product1" />
              {/* <img src={item} alt='product1' /> */}
            </div>
          </div>
          {/* card info */}
          <div className="mt-4">
            <span className="text-[#727272]">New Season</span>
            <div>
              <h3 className="font-bold">{item?.name}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: item?.description?.slice(0, 30),
                }}
              ></p>
              <p className="mt-4">{item?.price} €</p>
            </div>
          </div>
        </Link>
        <button
          className="absolute top-[10px]  z-10 right-[20px]"
          onClick={() => {
            if (user) {
              setFavorited(!isFavorited);
              postData({ product_id: item?.id });
            }
          }}
        >
          {isFavorited ? (
            <HeartFill />
          ) : (
            <HeartUnFill
              action={() => (user ? openCheckOut(true) : setOpenedLogin(true))}
            />
          )}
        </button>
        <div className="mt-8">
          {user ? (
            ""
          ) : (
            <AuthinticationForm
              openedLogin={openedLogin}
              closeLogin={() => setOpenedLogin(false)}
            />
          )}
        </div>

        <div className="my-8">
          {!size || (
            <div>
              <Select
                rightSection={<IconChevronDown size="1rem" />}
                rightSectionWidth={30}
                placeholder="Select size"
                styles={{ rightSection: { pointerEvents: "none" } }}
                data={optionsSelect}
                value={selectedSize}
                onChange={handleSelectChange}
              />
            </div>
          )}

          {!buy || (
            <div className="grid gap-4 mt-4">
              <div>
                <SecondaryButton
                  title={t("Add To Bag")}
                  className="w-full font-bold"
                  action={() => {
                    addProduct({
                      id: item?.id,
                      name: item?.name,
                      price: item?.price,
                      count: 1,
                      image: item?.hover_image,
                      desc: item?.description,
                    });
                    notify(
                      "success",
                      "",
                      "The product has been added successfully"
                    );
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
