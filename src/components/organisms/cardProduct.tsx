import HeartUnFill from "../atoms/icons/HeartUnFill";
import HeartFill from "../atoms/icons/HeartFill";
import { Select } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { select_size } from "../../helper/data";
import { useState } from "react";
import SecondaryButton from "../atoms/secondaryButton";
import { Link } from "react-router-dom";
import useProductStore from "../../store/productStore";
import { notify } from "../../utils/notify";

const ProductCard = ({ imageUrl, item, size, buy }: any) => {
  console.log("🚀 ~ file: cardProduct.tsx:10 ~ ProductCard ~ item:", item);
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

  const handleSelectChange = (value) => {
    setSelectedSize(value);
  };

  const afterStyles = {
    "--custom-background-image": `url(${imageUrl})`,
  };
  const { products, addProduct } = useProductStore();
  console.log(
    "🚀 ~ file: cardProduct.tsx:39 ~ ProductCard ~ products:",
    products
  );

  return (
    <>
      <div className="relative">
        <Link to={`/product-details/${item?.id}`}>
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
                  __html: item?.description.slice(0,30),
                }}
              ></p>
              <p className="mt-4">{item?.price} €</p>
            </div>
          </div>
        </Link>
        <button className="card-favorite">
          <HeartUnFill />
          <HeartFill />
        </button>

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
                  title="Add To Bag"
                  className="w-full font-bold"
                  action={() => {
                    addProduct({
                      id: item?.id,
                      name: item?.name,
                      price: item?.price,
                      count: 1,
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
