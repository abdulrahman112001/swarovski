import { useParams } from "react-router-dom";
import useFetch from "./hooks/UseFetch";
import ProductCard from "./components/organisms/cardProduct";

export default function Pages() {
  const { id } = useParams();
  console.log("🚀 ~ file: Pages.tsx:6 ~ Pages ~ id:", id);
  const { data: CustomPages } = useFetch({
    endpoint: `products?filter[category]=${id}`,
    queryKey: [`CustomPages`, id],
  });
  console.log("🚀 ~ file: Pages.tsx:11 ~ Pages ~ CustomPages:", CustomPages);
  return (
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-4 newin-section gap-x-12 ">
        {CustomPages?.data?.products.map((item) => (
          <ProductCard imageUrl={item?.main_image} item={item} />
        ))}
      </div>
    </div>
  );
}
