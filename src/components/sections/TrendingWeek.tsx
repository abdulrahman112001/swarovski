import { t } from "i18next";
import CardTrending from "../organisms/cardTrending";
import useFetch from "../../hooks/UseFetch";

const TrendingWeek = () => {
  const { data: Trending } = useFetch({
    endpoint: `trends/products`,
    queryKey: [`Trending`],
  });
  console.log(
    "🚀 ~ file: TrendingWeek.tsx:10 ~ TrendingWeek ~ Trending:",
    Trending
  );

  return (
    <div className="container px-4 mx-auto">
      <section>
        <h2 className="text-center text-[2rem] mt-12 mb-8">
          {t("Trending this week")}
        </h2>
        <div className="grid grid-cols-3 md-m:grid-cols-2 sm-m:!grid-cols-1 gap-8">
          {Trending?.data?.products?.map((item) => (
            <CardTrending
              title={item?.name}
              desc={item?.description}
              image={item?.main_image}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrendingWeek;
