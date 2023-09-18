import { HoverCard } from "@mantine/core";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/UseFetch";
export default function DynamicNavbar() {
  const { data: Navs } = useFetch({
    endpoint: `categories`,
    queryKey: [`Navbar_dynamic`],
  });
  console.log("🚀 ~ file: DynamicNavbar.tsx:9 ~ DynamicNavbar ~ Navs:", Navs);
  return (
    <>
      {Navs?.data?.map((nav: any) => (
        <HoverCard
          width={200}
          shadow="md"
          withArrow
          openDelay={200}
          closeDelay={200}
        >
          <HoverCard.Target>
            <Link to={{ pathname: `/${nav?.name}/${nav.id}` }} className="mx-2">
              { nav?.name}
            </Link>
          </HoverCard.Target>
          {nav.childreen.length > 0 && (
            <HoverCard.Dropdown>
              <ul>
                {nav.childreen.map((item: any) => (
                  <li className="text-center hover:opacity-[0.7]">
                    <Link to={`/${item?.name}/${item?.id}`}>{item?.name}</Link>
                  </li>
                ))}
              </ul>
            </HoverCard.Dropdown>
          )}
        </HoverCard>
      ))}
    </>
  );
}
