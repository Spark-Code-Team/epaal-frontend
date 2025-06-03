"use client";

import Search from "@/components/elements/search";
import { IoIosArrowDown } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Logo from "@/components/elements/Logo";
import { fetchRole } from "@/redux/features/userRole/useRole";
import { pallete } from "@/constant/Pallete";
import CategoryIcon from "../../../../public/icons/category";
import { fetchUserCart } from "@/helpers/shopCartThunks";
import CartLargeMinimalistic from "../../../../public/icons/CartLargeMinimalistic";
// import { getAllTopic } from "@/helpers/topicThunks";

export default function ShopHeader() {
  const [products, setProducts] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const [navScroll, setNavScroll] = useState(true);
  const [showCategories, setShowCategories] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [login, setLogin] = useState(false);

  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      const { response, error } = await getAllTopic();
      if (response?.data?.toplevel_topic) {
        setProducts(response.data.toplevel_topic);
      } else {
        console.error("Error fetching topics:", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (!store.role.id) dispatch(fetchRole());
    dispatch(fetchUserCart());
  }, []);

  const handelCartShop = () => {
    localStorage.setItem("selected", JSON.stringify(store.counter));
    router.push("/shopping-evaam/products/shop-checkout");
  };

  const onScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setNavScroll(currentScrollY <= 120);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    setLogin(localStorage.getItem("login"));
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <header className="sticky top-0 z-10">
      <div className="z-50 flex items-center justify-between bg-white p-3 md:p-2">
        <div className="flex w-[20%] gap-4 md:w-[60%]">
          <div className="flex items-center gap-5 text-blue-800">
            <RxHamburgerMenu
              className="flex h-6 w-6 md:hidden"
              onClick={() => setBurgerMenu(true)}
            />
            <Link href="/shopping-evaam">
              <Logo width="45px" height="45px" color={pallete.primary} />
            </Link>
          </div>
          <div className="hidden h-14 w-full md:flex">
            <Search />
          </div>
        </div>

        <div className="flex w-[45%] items-center justify-between md:w-[12%]">
          {store.role.id ? (
            <>
              <div
                onClick={() => {
                  const role = store.role.role;
                  router.push(
                    role === "admin"
                      ? "/admin"
                      : role === "shop_admin"
                        ? "/admin/admin-shop"
                        : "/dashboard/",
                  );
                }}
                className="flex h-[26px] cursor-pointer items-center justify-center rounded-lg border-2 border-[#9ED6D9] p-4 text-[13px]"
              >
                حساب کاربری
              </div>

              <div className="flex h-[26px] w-[26px] items-center justify-center rounded-lg border-2 border-[#9ED6D9] p-4">
                <div
                  onClick={handelCartShop}
                  className="relative cursor-pointer"
                >
                  <CartLargeMinimalistic
                    width="24px"
                    height="24px"
                    color="#475569"
                  />
                  {store.cart.userCart?.length > 0 && (
                    <span className="absolute left-[15px] top-[-15px] h-5 w-5 rounded-lg bg-green-600 text-center text-white">
                      {store.cart.userCart.length}
                    </span>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="flex w-full items-center justify-end">
              <Link
                href="/login"
                className="w-fit rounded-lg border-[2px] bg-evaamGreen p-[5px] text-center text-white"
              >
                ورود / ثبت نام
              </Link>
            </div>
          )}
        </div>
      </div>

      <div
        className={`z-0 flex items-center justify-between bg-white p-2 transition-all duration-300 ${
          navScroll
            ? "translate-y-[0] opacity-100"
            : "translate-y-[-5%] opacity-0"
        } relative`}
      >
        <div className="mx-auto flex h-12 w-full md:hidden">
          <Search />
        </div>

        <div className="hidden w-full items-center justify-between bg-evaamGreen px-10 py-3 text-white md:flex">
          <div
            className="flex w-auto cursor-pointer items-center gap-5 rounded-xl bg-white p-2 font-bold text-evaamGreen"
            onClick={() => setShowCategories(!showCategories)}
          >
            <CategoryIcon
              stroke={pallete.primary}
              fill={pallete.white}
              height={20}
              width={20}
            />
            <p className="text-sm">دسته بندی کالاها</p>
          </div>
          <div>|</div>
          {products?.map((topic) => (
            <div
              key={topic.id}
              className="flex cursor-pointer items-center gap-1 text-[13px]"
              onClick={() => setShowCategories(topic.id)}
            >
              <p>{topic.name}</p>
              <IoIosArrowDown />
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
