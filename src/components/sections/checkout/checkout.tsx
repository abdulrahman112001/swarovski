import { Carousel } from "@mantine/carousel";
import { CloseButton, Input, Popover } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import { useState } from "react";
import HeartFill from "../../atoms/icons/HeartFill";
import HeartUnFill from "../../atoms/icons/HeartUnFill";
import Info_IC from "../../atoms/icons/info";
import MainButton from "../../atoms/mainButton";
import ProductCard from "../../organisms/cardProduct";
import Newsletter from "../Newsletter";
import ContactUsBlock from "./contactUs";
import Recommendation from "./recommendation";
import useProductStore, {
  calculateTotalPrice,
} from "../../../store/productStore";
import { Link } from "react-router-dom";

const CheckOutProduct = () => {
  const [opened, { close, open }] = useDisclosure(false);
  const [changeQuantity, setChangeQuantity] = useState(false);
  const [changeSize, setChangeSize] = useState(false);

  const changeQuantityHandler = () => {
    setChangeQuantity(!changeQuantity);
  };

  const changeSizeHandler = () => {
    setChangeSize(!changeSize);
  };
  const { products, addProduct, removeProduct, totalPrice } = useProductStore();
  // Function to remove a product
  // Function to remove a single product by its ID
  const removeSingleProductAndLocalStorage = (productId) => {
    // استدعاء دالة removeProduct من مخزن السلة لإزالة المنتج
    removeProduct(productId);
  
    // الحصول على المنتجات المحدثة بعد الحذف من مخزن السلة
    const updatedProducts = products.filter((product) => product.id !== productId);
  
    // تحديث مخزن localStorage بالمنتجات المحدثة
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  
    // حساب وتحديث السعر الإجمالي في localStorage
    const updatedTotalPrice = calculateTotalPrice(updatedProducts);
    localStorage.setItem("totalPrice", updatedTotalPrice.toString());
  };
  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="grid grid-cols-2 py-8">
          <h1 className="font-[nimbus,sans-serif] font-extrabold uppercase">
            Shopping Bag
          </h1>
          <a
            href="#"
            className="flex items-center justify-end underline text-[15px] hover:text-[#727272]"
          >
            Continue Shopping
          </a>
        </div>

        <div className="grid grid-cols-12 gap-8 pb-12">
          <div className="grid grid-cols-12 col-span-8 ">
            <div className="col-span-8">
              <h2>Sending from Italy</h2>
            </div>
            <div className="flex justify-between col-span-4">
              <span>SImport duties are included</span>

              {/* hover info icon => i */}
              <Popover
                width={300}
                position="left"
                withArrow
                shadow="md"
                opened={opened}
              >
                <Popover.Target>
                  <span
                    className="cursor-pointer "
                    onMouseEnter={open}
                    onMouseLeave={close}
                  >
                    <Info_IC />
                  </span>
                </Popover.Target>
                <Popover.Dropdown
                  sx={{ pointerEvents: "none" }}
                  className="bg-[#222] text-white !w-48"
                >
                  <p>
                    This item has import duties included in the price so you
                    won't have to pay any additional import duties to reveive it
                  </p>
                </Popover.Dropdown>
              </Popover>
            </div>

            {/* Product CheckOut */}
            {products?.map((product) => (
              <div className="grid grid-cols-12 col-span-12 relative mt-2 pt-4 pb-8 border-solid border-t-[0.01rem] !border-[#b6b6b6]">
                {/* img */}
                <div className="col-span-2 flex flex-col max-w-[120px] max-h-[160px] w-[120px] h-[160px]">
                  <img src={product?.image} alt="product" />
                </div>

                {/* product info */}
                <div className="col-span-3">
                  <p className="text-[#727272]">New Sesson</p>
                  <Link
                    to={`/product-details/${product?.id}`}
                    className="font-bold"
                  >
                    {product?.name}
                  </Link>
                  {/* <a href='#'>Letter leather crossbody bag</a> */}
                  <p
                    dangerouslySetInnerHTML={{
                      __html: product?.desc?.slice(0, 40),
                    }}
                  ></p>
                </div>

                {/* product price */}
                <div className="col-span-3">
                  <p className="font-bold"> {product?.price}</p>
                  <p>Import duties included</p>
                </div>

                {/* product details */}
                <div className="grid col-span-4 gap-4">
                  {/* <div>
                    <p>Size</p>
                    <div className="flex gap-2">
                      {!changeSize || (
                        <Input
                          component="select"
                          rightSection={
                            <IconChevronDown size={10} stroke={1.5} />
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </Input>
                      )}

                      {changeSize || <span className="font-bold">1</span>}

                      <button
                        className="underline cursor-pointer text-[14px]"
                        onClick={changeSizeHandler}
                      >
                        {!changeSize ? "Change" : "Cancel"}
                      </button>
                    </div>
                  </div> */}

                  <div>
                    <p>Quantity</p>
                    <div className="flex gap-2">
                      {/* select Quantity */}
                      {!changeQuantity || (
                        <Input
                          component="select"
                          rightSection={
                            <IconChevronDown size={10} stroke={1.5} />
                          }
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                        </Input>
                      )}

                      {/* Number Quantity */}
                      {changeQuantity || <span className="font-bold">{product?.count}</span>}

                      {/* switch between Change Count  */}
                      <button
                        className="underline cursor-pointer text-[14px]"
                        onClick={changeQuantityHandler}
                      >
                        {!changeQuantity ? "Change" : "Cancel"}
                      </button>
                    </div>
                  </div>

                  <div>
                    <button className="wishlist-button flex bg-transparent gap-2 hover:opacity-50 py-3 rounded-[.4rem] ">
                      <i className=" icon-hide flex w-[24px] h-[20px]">
                        <HeartFill />{" "}
                      </i>
                      <i className=" icon-show flex w-[24px]  h-[20px]">
                        <HeartUnFill />
                      </i>
                      <p className="underline mt-[2px]"> Move to wishlist</p>
                    </button>
                  </div>
                </div>

                {/* close */}
                <div className="absolute right-0 top-4">
                  <CloseButton
                    title="Close popover"
                    size="xl"
                    iconSize={20}
                    onClick={() =>
                      removeSingleProductAndLocalStorage(product?.id)
                    } // Pass the product's ID as a parameter
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-4">
            <h3 className="text-[24px] mb-6">Summary</h3>

            <div className="grid gap-1">
              <p className="flex justify-between">
                <span>Subtotal</span>
                <span>{totalPrice}</span>
              </p>
              <p className="flex justify-between">
                <span>Delivery</span>
                <span>$24.00</span>
              </p>
            </div>

            <hr className="my-4  border-t-[#e6e6e6] border-[#b6b6b6]" />

            <div className="flex justify-between">
              <span className="font-bold">Total</span>
              <div>
                <p className="flex justify-end">
                  USD <span className="mx-2 font-bold"> {totalPrice + 24}</span>
                </p>
                <span>Import duties included</span>
              </div>
            </div>

            {/* button check out */}
            <div className="mt-8">
              <MainButton title="Go To Checkout" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      <Recommendation />

      {/* Recommendations */}
      <div className="container px-4 mx-auto mt-24">
        <section className="flex flex-col gap-4">
          <div className="flex justify-between">
            {/* title */}
            <div>
              <p className="text-[1.4rem]">Recommendations</p>
            </div>

            {/* button */}
            <div>
              <a
                href="#"
                className="rounded-[0.8rem] border-[1px] border-solid border-[#000] px-[0.8rem] py-[0.1rem] text-[17px] font-bold"
              >
                Shop Now
              </a>
            </div>
          </div>
          {/* content product */}
          <div className="grid grid-cols-1 newin-section gap-x-12 ">
            <Carousel
              slideSize="25%"
              slideGap="md"
              loop
              align="start"
              slidesToScroll={1}
            >
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
            </Carousel>
          </div>
        </section>
      </div>

      {/* Recently viewed */}
      <div className="container px-4 mx-auto mt-24">
        <section className="flex flex-col gap-4">
          <div className="flex justify-between">
            {/* title */}
            <div>
              <p className="text-[1.4rem]">Recently viewed</p>
            </div>

            {/* button */}
            <div>
              <a
                href="#"
                className="rounded-[0.8rem] border-[1px] border-solid border-[#000] px-[0.8rem] py-[0.1rem] text-[17px] font-bold"
              >
                Shop Now
              </a>
            </div>
          </div>
          {/* content product */}
          <div className="grid grid-cols-1 newin-section gap-x-12 ">
            <Carousel
              slideSize="25%"
              slideGap="sm"
              loop
              align="start"
              slidesToScroll={1}
            >
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <ProductCard
                  item="https://cdn-images.farfetch-contents.com/19/36/15/60/19361560_44363153_480.jpg"
                  imageUrl="https://cdn-images.farfetch-contents.com/21/22/88/29/21228829_51104623_600.jpg"
                />
              </Carousel.Slide>
            </Carousel>
          </div>
        </section>
      </div>

      <ContactUsBlock />

      <Newsletter />
    </>
  );
};

export default CheckOutProduct;
